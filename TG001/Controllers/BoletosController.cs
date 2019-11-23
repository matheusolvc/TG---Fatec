using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using TG001.Data;
using TG001.Models;

namespace TG001.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BoletosController : ControllerBase
    {
        private readonly ContasAPagarContext _context;
        private readonly Microsoft.AspNetCore.Identity.UserManager<Usuario> _userManager;

        public BoletosController(ContasAPagarContext context, Microsoft.AspNetCore.Identity.UserManager<Usuario> userManager)
        {
            _userManager = userManager;
            _context = context;
        }

        // GET: api/Boletos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Boleto>>> GetBoletos()
        {
            return await _context.Boletos.Include(b => b.Fornecedor).Include(b => b.Usuario).ToListAsync();
        }

        // GET: api/Boletos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Boleto>> GetBoleto(int id)
        {
            Boleto boleto = await _context.Boletos.Include(b=>b.Fornecedor).Include(b=>b.Usuario).SingleOrDefaultAsync(b=>b.ID == id);

            if (boleto == null)
            {
                return NotFound();
            }

            return boleto;
        }

        // PUT: api/Boletos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBoleto(int id, Boleto boleto)
        {
            if (id != boleto.ID)
            {
                return BadRequest();
            }

            _context.Entry(boleto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BoletoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Boletos
        [HttpPost]
        public async Task<ActionResult<Boleto>> PostBoleto(Boleto boleto)
        {
            if (ModelState.IsValid)
            {
                var userID = HttpContext.User.Identities.First().Claims.FirstOrDefault(c => c.Type.Contains("nameidentifier"))?.Value;
                //boleto.Usuario = await _userManager.GetUserAsync(HttpContext.User);
                boleto.Usuario = await _context.Users.FindAsync(userID);
                boleto.DataCriacao = DateTime.Now;
                _context.Boletos.Add(boleto);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetBoleto", new { id = boleto.ID }, boleto);
            }
            else
                return BadRequest();
        }

        // DELETE: api/Boletos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Boleto>> DeleteBoleto(int id)
        {
            Boleto boleto = await _context.Boletos.FindAsync(id);
            if (boleto == null)
            {
                return NotFound();
            }

            _context.Boletos.Remove(boleto);
            await _context.SaveChangesAsync();

            return boleto;
        }

        private bool BoletoExists(int id)
        {
            return _context.Boletos.Any(e => e.ID == id);
        }
    }
}
