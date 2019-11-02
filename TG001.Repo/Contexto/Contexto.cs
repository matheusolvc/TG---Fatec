using Microsoft.EntityFrameworkCore;
using TG001.Models;

namespace TG001.Repo.Contexto
{
    public class ContasAPagarContexto : DbContext
    {
        private const string StringDeConexao = "server=localhost;database=ContasAPagar;user=admin;password=123456";

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Colaborador> Colaboradores { get; set; }
        public DbSet<Fornecedor> Fornecedores { get; set; }
        public DbSet<Lote> Lotes { get; set; }
        public DbSet<RetornoLote> RetornosLote { get; set; }
        public DbSet<Boleto> Boletos { get; set; }
        public DbSet<Imposto> Impostos { get; set; }
        public DbSet<OutraConta> OutrasContas { get; set; }
        public DbSet<Reembolso> Reembolsos { get; set; }
        public DbSet<Renegociacao> Renegociacoes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(StringDeConexao);
        }
    }
}
