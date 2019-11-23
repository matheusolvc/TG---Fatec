using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TG001.Data;
using TG001.Models;

namespace TG001.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ImpostosController : ControllerBase
    {
        private readonly ContasAPagarContext _context;

        public ImpostosController(ContasAPagarContext context)
        {
            _context = context;
        }

        // GET: api/Imposto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Imposto>>> GetImpostos()
        {
            return await _context.Impostos.ToListAsync();
        }

        // GET: api/Imposto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Imposto>> GetImposto(int id)
        {
            Imposto imposto = await _context.Impostos.FindAsync(id);

            if (imposto == null)
            {
                return NotFound();
            }

            return imposto;
        }

        // PUT: api/Imposto/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutImposto(int id, Imposto imposto)
        {
            if (id != imposto.ID)
            {
                return BadRequest();
            }

            _context.Entry(imposto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImpostoExists(id))
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

        // POST: api/Imposto
        [HttpPost]
        public async Task<ActionResult<Imposto>> PostImposto(Imposto imposto)
        {
            imposto.DataCriacao = DateTime.Now;
            _context.Impostos.Add(imposto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetImposto", new { id = imposto.ID }, imposto);
        }

        // DELETE: api/Imposto/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Imposto>> DeleteImposto(int id)
        {
            Imposto imposto = await _context.Impostos.FindAsync(id);
            if (imposto == null)
            {
                return NotFound();
            }

            _context.Impostos.Remove(imposto);
            await _context.SaveChangesAsync();

            return imposto;
        }

        private bool ImpostoExists(int id)
        {
            return _context.Impostos.Any(e => e.ID == id);
        }
    }
}
