using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TG001.Data;
using TG001.Models.Migracao;

namespace TG001.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContasMigracaoMigradasController : ControllerBase
    {
        private readonly ContasAPagarContext _context;

        public ContasMigracaoMigradasController(ContasAPagarContext context)
        {
            _context = context;
        }

        // GET: api/ContasMigracaoMigradas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContasMigracaoMigradas>>> GetContasMigracaoMigradas()
        {
            return await _context.ContasMigracaoMigradas.ToListAsync();
        }

        // GET: api/ContasMigracaoMigradas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContasMigracaoMigradas>> GetContasMigracaoMigradas(int id)
        {
            var contasMigracaoMigradas = await _context.ContasMigracaoMigradas.FindAsync(id);

            if (contasMigracaoMigradas == null)
            {
                return NotFound();
            }

            return contasMigracaoMigradas;
        }

        // PUT: api/ContasMigracaoMigradas/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContasMigracaoMigradas(int id, ContasMigracaoMigradas contasMigracaoMigradas)
        {
            if (id != contasMigracaoMigradas.ID)
            {
                return BadRequest();
            }

            _context.Entry(contasMigracaoMigradas).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContasMigracaoMigradasExists(id))
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

        // POST: api/ContasMigracaoMigradas
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ContasMigracaoMigradas>> PostContasMigracaoMigradas(ContasMigracaoMigradas contasMigracaoMigradas)
        {
            _context.ContasMigracaoMigradas.Add(contasMigracaoMigradas);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContasMigracaoMigradas", new { id = contasMigracaoMigradas.ID }, contasMigracaoMigradas);
        }

        // DELETE: api/ContasMigracaoMigradas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ContasMigracaoMigradas>> DeleteContasMigracaoMigradas(int id)
        {
            var contasMigracaoMigradas = await _context.ContasMigracaoMigradas.FindAsync(id);
            if (contasMigracaoMigradas == null)
            {
                return NotFound();
            }

            _context.ContasMigracaoMigradas.Remove(contasMigracaoMigradas);
            await _context.SaveChangesAsync();

            return contasMigracaoMigradas;
        }

        private bool ContasMigracaoMigradasExists(int id)
        {
            return _context.ContasMigracaoMigradas.Any(e => e.ID == id);
        }
    }
}
