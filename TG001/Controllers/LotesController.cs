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
    public class LotesController : ControllerBase
    {
        private readonly ContasAPagarContext _context;

        public LotesController(ContasAPagarContext context)
        {
            _context = context;
        }

        // GET: api/Lotes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lote>>> GetLotes()
        {
            return await _context.Lotes.ToListAsync();
        }

        // GET: api/Lotes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Lote>> GetLote(int id)
        {
            var lote = await _context.Lotes.FindAsync(id);

            if (lote == null)
            {
                return NotFound();
            }

            return lote;
        }

        // PUT: api/Lotes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLote(int id, Lote lote)
        {
            if (id != lote.ID)
            {
                return BadRequest();
            }

            _context.Entry(lote).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoteExists(id))
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

        // POST: api/Lotes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Lote>> PostLote(Lote lote)
        {
            _context.Lotes.Add(lote);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLote", new { id = lote.ID }, lote);
        }

        // DELETE: api/Lotes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Lote>> DeleteLote(int id)
        {
            var lote = await _context.Lotes.FindAsync(id);
            if (lote == null)
            {
                return NotFound();
            }

            _context.Lotes.Remove(lote);
            await _context.SaveChangesAsync();

            return lote;
        }

        private bool LoteExists(int id)
        {
            return _context.Lotes.Any(e => e.ID == id);
        }
    }
}
