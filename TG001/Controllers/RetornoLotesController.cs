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
    public class RetornoLotesController : ControllerBase
    {
        private readonly ContasAPagarContext _context;

        public RetornoLotesController(ContasAPagarContext context)
        {
            _context = context;
        }

        // GET: api/RetornoLotes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RetornoLote>>> GetRetornosLote()
        {
            return await _context.RetornosLote.ToListAsync();
        }

        // GET: api/RetornoLotes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RetornoLote>> GetRetornoLote(int id)
        {
            var retornoLote = await _context.RetornosLote.FindAsync(id);

            if (retornoLote == null)
            {
                return NotFound();
            }

            return retornoLote;
        }

        // PUT: api/RetornoLotes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRetornoLote(int id, RetornoLote retornoLote)
        {
            if (id != retornoLote.ID)
            {
                return BadRequest();
            }

            _context.Entry(retornoLote).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RetornoLoteExists(id))
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

        // POST: api/RetornoLotes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<RetornoLote>> PostRetornoLote(RetornoLote retornoLote)
        {
            _context.RetornosLote.Add(retornoLote);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRetornoLote", new { id = retornoLote.ID }, retornoLote);
        }

        // DELETE: api/RetornoLotes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RetornoLote>> DeleteRetornoLote(int id)
        {
            var retornoLote = await _context.RetornosLote.FindAsync(id);
            if (retornoLote == null)
            {
                return NotFound();
            }

            _context.RetornosLote.Remove(retornoLote);
            await _context.SaveChangesAsync();

            return retornoLote;
        }

        private bool RetornoLoteExists(int id)
        {
            return _context.RetornosLote.Any(e => e.ID == id);
        }
    }
}
