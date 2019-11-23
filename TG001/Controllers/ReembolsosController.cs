using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TG001.Data;
using TG001.Models;

namespace TG001.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReembolsosController : ControllerBase
    {
        private readonly ContasAPagarContext _context;

        public ReembolsosController(ContasAPagarContext context)
        {
            _context = context;
        }

        // GET: api/Reembolsoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reembolso>>> GetReembolsos()
        {
            return await _context.Reembolsos.ToListAsync();
        }

        // GET: api/Reembolsoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reembolso>> GetReembolso(int id)
        {
            var reembolso = await _context.Reembolsos.FindAsync(id);

            if (reembolso == null)
            {
                return NotFound();
            }

            return reembolso;
        }

        // PUT: api/Reembolsoes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReembolso(int id, Reembolso reembolso)
        {
            if (id != reembolso.ID)
            {
                return BadRequest();
            }

            _context.Entry(reembolso).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReembolsoExists(id))
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

        // POST: api/Reembolsoes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Reembolso>> PostReembolso(Reembolso reembolso)
        {
            _context.Reembolsos.Add(reembolso);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReembolso", new { id = reembolso.ID }, reembolso);
        }

        // DELETE: api/Reembolsoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Reembolso>> DeleteReembolso(int id)
        {
            var reembolso = await _context.Reembolsos.FindAsync(id);
            if (reembolso == null)
            {
                return NotFound();
            }

            _context.Reembolsos.Remove(reembolso);
            await _context.SaveChangesAsync();

            return reembolso;
        }

        private bool ReembolsoExists(int id)
        {
            return _context.Reembolsos.Any(e => e.ID == id);
        }
    }
}
