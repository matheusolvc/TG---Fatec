using TG001.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using TG001.Config;

namespace TG001.Data
{
    public class ContasAPagarContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        private readonly ConfiguracoesDB ConfigDB;

        //private const string StringDeConexao = "server=localhost;database=ContasAPagar;user=admin;password=123456";

        public ContasAPagarContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions, IOptions<ConfiguracoesDB> configDB) : base(options, operationalStoreOptions)
        {
            ConfigDB = configDB.Value;
        }

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
            var stringDeConexao = $"server={ConfigDB.Conexao.Server};database={ConfigDB.Conexao.Database};user={ConfigDB.Conexao.User};password={ConfigDB.Conexao.Password}";
            optionsBuilder.UseMySql(stringDeConexao);
        }
    }

    public class ApplicationDBInitializer
    {
        public static void SeedUsers(UserManager<ApplicationUser> userManager)
        {
            userManager.PasswordValidators.Clear();
            if (!userManager.Users.Any())
            {
                ApplicationUser usuario = new ApplicationUser
                {
                    EmailConfirmed = true,
                    Id = "1",
                    NormalizedUserName = "SUPERVISOR",
                    PhoneNumberConfirmed = true,
                    UserName = "SUPERVISOR",
                    Email = string.Empty,
                    LockoutEnabled = false,
                    NormalizedEmail = string.Empty,
                    PhoneNumber = string.Empty,
                    TwoFactorEnabled = false
                };
                IdentityResult result = userManager.CreateAsync(usuario, "123456").Result;

                //if (result.Succeeded)
                //{   
                //    userManager.AddToRoleAsync(usuario, "Admin").Wait();
                //}
            }
        }
    }
}
