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
    public class ContasMigracaoController : ControllerBase
    {
        private readonly ContasAPagarContext _context;

        public ContasMigracaoController(ContasAPagarContext context)
        {
            _context = context;
        }

        // GET: api/ContasMigracao
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContasMigracao>>> GetContasMigracao()
        {
            return await _context.ContasMigracao.ToListAsync();
        }

        // GET: api/ContasMigracao/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContasMigracao>> GetContasMigracao(int id)
        {
            var contasMigracao = await _context.ContasMigracao.FindAsync(id);

            if (contasMigracao == null)
            {
                return NotFound();
            }

            return contasMigracao;
        }

        // PUT: api/ContasMigracao/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContasMigracao(int id, ContasMigracao contasMigracao)
        {
            if (id != contasMigracao.ID)
            {
                return BadRequest();
            }

            _context.Entry(contasMigracao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContasMigracaoExists(id))
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

        // POST: api/ContasMigracao
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ContasMigracao>> PostContasMigracao(ContasMigracao contasMigracao)
        {
            _context.ContasMigracao.Add(contasMigracao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContasMigracao", new { id = contasMigracao.ID }, contasMigracao);
        }

        // DELETE: api/ContasMigracao/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ContasMigracao>> DeleteContasMigracao(int id)
        {
            var contasMigracao = await _context.ContasMigracao.FindAsync(id);
            if (contasMigracao == null)
            {
                return NotFound();
            }

            _context.ContasMigracao.Remove(contasMigracao);
            await _context.SaveChangesAsync();

            return contasMigracao;
        }

        private bool ContasMigracaoExists(int id)
        {
            return _context.ContasMigracao.Any(e => e.ID == id);
        }
    }
}
