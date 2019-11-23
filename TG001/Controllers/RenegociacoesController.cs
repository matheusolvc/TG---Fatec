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
    public class RenegociacoesController : ControllerBase
    {
        private readonly ContasAPagarContext _context;

        public RenegociacoesController(ContasAPagarContext context)
        {
            _context = context;
        }

        // GET: api/Renegociacoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Renegociacao>>> GetRenegociacoes()
        {
            return await _context.Renegociacoes.ToListAsync();
        }

        // GET: api/Renegociacoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Renegociacao>> GetRenegociacao(int id)
        {
            var renegociacao = await _context.Renegociacoes.FindAsync(id);

            if (renegociacao == null)
            {
                return NotFound();
            }

            return renegociacao;
        }

        // PUT: api/Renegociacoes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRenegociacao(int id, Renegociacao renegociacao)
        {
            if (id != renegociacao.ID)
            {
                return BadRequest();
            }

            _context.Entry(renegociacao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RenegociacaoExists(id))
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

        // POST: api/Renegociacoes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Renegociacao>> PostRenegociacao(Renegociacao renegociacao)
        {
            _context.Renegociacoes.Add(renegociacao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRenegociacao", new { id = renegociacao.ID }, renegociacao);
        }

        // DELETE: api/Renegociacoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Renegociacao>> DeleteRenegociacao(int id)
        {
            var renegociacao = await _context.Renegociacoes.FindAsync(id);
            if (renegociacao == null)
            {
                return NotFound();
            }

            _context.Renegociacoes.Remove(renegociacao);
            await _context.SaveChangesAsync();

            return renegociacao;
        }

        private bool RenegociacaoExists(int id)
        {
            return _context.Renegociacoes.Any(e => e.ID == id);
        }
    }
}
