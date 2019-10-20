using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TG001.Models;
using TG001.Repo.Contexto;

namespace TG001.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImpostoController : ControllerBase
    {
        private readonly ContasAPagarContexto _context;

        public ImpostoController(ContasAPagarContexto context)
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
            var imposto = await _context.Impostos.FindAsync(id);

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
            imposto.ID = _context.Impostos.ToList().Max(i => i.ID) + 1;
            _context.Impostos.Add(imposto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetImposto", new { id = imposto.ID }, imposto);
        }

        // DELETE: api/Imposto/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Imposto>> DeleteImposto(int id)
        {
            var imposto = await _context.Impostos.FindAsync(id);
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
