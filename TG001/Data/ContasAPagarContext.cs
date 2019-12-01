using TG001.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using TG001.Config;
using Microsoft.AspNetCore.Diagnostics;
using TG001.Models.Migracao;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using Microsoft.Extensions.DependencyInjection;
using TG001.Utils;
using System.ComponentModel;
using Castle.DynamicProxy.Generators;
using System.Globalization;
using TG001.Controllers;

namespace TG001.Data
{
    public class ContasAPagarContext : ApiAuthorizationDbContext<Usuario>
    {
        private readonly ConfiguracoesDB ConfigDB;

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
        public DbSet<ContasMigracao> ContasMigracao { get; set; }
        public DbSet<ContasMigracaoMigradas> ContasMigracaoMigradas { get; set; }

        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Conta> Conta { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var stringDeConexao = $"server={ConfigDB.Conexao.Server};database={ConfigDB.Conexao.Database};user={ConfigDB.Conexao.User};password={ConfigDB.Conexao.Password}";
            optionsBuilder.UseMySql(stringDeConexao);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }

    #region Inicialização de DB

    
    public static class ApplicationDBInitializer
    {
        public static void SeedDatabase(UserManager<Usuario> userManager, UserManager<Colaborador> colaboradorManager, ContasAPagarContext context, IServiceProvider serviceProvider)
        {
            SeedInfoExt(context);
            SeedUsers(userManager, colaboradorManager, serviceProvider);
            SeedContas(context);
        }

        private static void SeedInfoExt(ContasAPagarContext context)
        {
            if (!context.Fornecedores.Any())
            {
                #region Gera Lista de Fornecedores

                List<Fornecedor> fornecedores = new List<Fornecedor>()
            {
                new Fornecedor{Agencia="001",Bairro="Jardim Tropical", Cidade="Sorocaba",CNPJ="23.374.452/0001-39", CodBanco="033", Conta="1658", Email="rh@naireestherconstrucoesme.com.br",Endereco="Rua André Luiz", Numero="135", RazaoSocial="Nair e Esther Construções ME",Telefone="(11) 3685-5108", UF="SP"},

                new Fornecedor{Agencia="137",Bairro="Montanhão",  Cidade="São Bernardo do Campo",CNPJ="83.775.353/0001-90", CodBanco="001", Conta="3547", Email="ouvidoria@heloiseeerickinformaticame.com.br",Endereco="Rua Janete Clair", Numero="529", RazaoSocial="Heloise e Erick Informática ME",Telefone="(11) 3965-8118", UF="SP"},

                new Fornecedor{Agencia="357",Bairro="Jardim Novo Ângulo", Cidade="Hortolândia",CNPJ="26.703.156/0001-22", CodBanco="025", Conta="6523", Email="cobranca@vitoriaenathanadvocaciame.com.br",Endereco="Travessa E", Numero="119", RazaoSocial="Vitória e Nathan Advocacia ME",Telefone="(19) 2894-5673", UF="SP"},

                new Fornecedor{Agencia="112",Bairro="Parque Maria Helena", Cidade="Campinas",CNPJ="08.957.455/0001-01", CodBanco="001", Conta="1325", Email="almoxarifado@renanelucasconsultoriafinanceiraltda.com.br",Endereco="Rua Jorge Rodrigues Dias", Numero="930", RazaoSocial="Renan e Lucas Consultoria Financeira Ltda",Telefone="(19) 2573-9236", UF="SP"},

                new Fornecedor{Agencia="120",Bairro="Centro", Cidade="Tupã",CNPJ="13.706.098/0001-49", CodBanco="033", Conta="4523", Email="representantes@thiagoeyagoassessoriajuridicaltda.com.br",Endereco="Rua Potiguaras", Numero="398", RazaoSocial="Thiago e Yago Assessoria Jurídica Ltda",Telefone="(14) 2855-3108", UF="SP"}
            };

                #endregion

                fornecedores.ForEach(f =>
                {
                    context.Fornecedores.Add(f);
                });
                context.SaveChanges();
            }
            if (!context.ContasMigracao.Any())
            {
                #region Gera Lista de contas para migração
                Random rand = new Random();
                RandomDateTime randomDateTime = new RandomDateTime();
                int tam = rand.Next(1, 100);
                List<ContasMigracao> contasMigracao = new List<ContasMigracao>(tam);

                for (int x = 0; x < tam; x++)
                {
                    contasMigracao.Add(new ContasMigracao
                    {
                        DataEmissao = randomDateTime.Next(),
                        DataPagamento = randomDateTime.Next(),
                        DataVencimento = randomDateTime.Next(),
                        ID = rand.Next(),
                        Juros = rand.NextDouble() * rand.Next(0, 25),
                        Multa = rand.NextDouble() * rand.Next(0, 25),
                        Tipo = ((TipoContaMigracao)rand.Next(0, 4)).ToString(),
                        Valor = rand.NextDouble() * rand.Next(0, 25)
                    });
                }
                #endregion

                contasMigracao.ForEach(cm =>
                {
                    context.ContasMigracao.Add(cm);
                });
                context.SaveChanges();
            }
        }

        #region Enums

        private enum TipoContaMigracao
        {
            BOLETO,
            IMPOSTO,
            RENEGOCIACAO,
            REEMBOLSO,
            OUTRAS
        }

        private enum TipoStatusConta
        {
            PENDENTEPAGAMENTO,
            PAGAMENTOREALIZADO
        }

        private enum TipoConta
        {
            Boleto,
            Imposto,
            Renegociacao,
            Reembolso,
            Outras
        }

        #endregion

        private static void SeedContas(ContasAPagarContext context)
        {
            if (!context.Boletos.Any())
            {
                #region Gera Novos Boletos

                Random rand = new Random();
                RandomDateTime randdt = new RandomDateTime();
                int tam = rand.Next(1, 25);
                List<Boleto> boletos = new List<Boleto>(tam);

                for (int x = 0; x < tam; x++)
                {
                    Boleto b = new Boleto();
                    b.DataAlteracao = rand.NextDouble() > 0.5d ? randdt.Next() : (DateTime?)null;
                    b.DataCriacao = randdt.Next();
                    b.DataEmissao = randdt.Next();
                    b.DataPagamento = rand.NextDouble() > 0.5d ? randdt.Next() : (DateTime?)null;
                    b.DataVencimento = randdt.Next();
                    b.FornecedorID = context.Fornecedores.Find(rand.Next(1, context.Fornecedores.Count())).ID;
                    b.Juros = rand.NextDouble() * rand.Next(250);

                    b.Multa = rand.NextDouble() * rand.Next(250);
                    b.Status = ((TipoStatusConta)rand.Next(2)).ToString();
                    b.TipoConta = (int)TipoConta.Boleto;
                    b.UsuarioID = context.Users.ToArray()[rand.Next(context.Users.Count())].Id;
                    b.ValorAPagar = rand.NextDouble() * rand.Next(250);
                    b.ValorDocumento = rand.NextDouble() * rand.Next(250);
                    b.LinhaDigitavel = RandomString.NextString(15);
                    b.NumeroDocumento = rand.Next().ToString(CultureInfo.InvariantCulture);
                    b.Serie = RandomString.NextString(25);
                    boletos.Add(b);
                }

                #endregion

                boletos.ForEach(i =>
                {
                    context.Boletos.Add(i);
                });
                context.SaveChanges();
            }

            if (!context.Impostos.Any())
            {
                #region Gera Novos Impostos

                Random rand = new Random();
                RandomDateTime randdt = new RandomDateTime();
                int tam = rand.Next(1, 25);
                List<Imposto> impostos = new List<Imposto>(tam);

                for (int x = 0; x < tam; x++)
                {
                    DateTime dtaprIni, dtAprFim;

                    do
                    {
                        dtaprIni = randdt.Next();
                        dtAprFim = randdt.Next();
                    }
                    while (dtaprIni > dtAprFim);
                    impostos.Add(new Imposto
                    {
                        DataAlteracao = rand.NextDouble() > 0.5d ? randdt.Next() : (DateTime?)null,
                        DataCriacao = randdt.Next(),
                        DataEmissao = randdt.Next(),
                        DataPagamento = rand.NextDouble() > 0.5d ? randdt.Next() : (DateTime?)null,
                        DataVencimento = randdt.Next(),
                        Juros = rand.NextDouble() * rand.Next(250),
                        PeriodoApuracaoInicio = dtaprIni,
                        PeriodoApuracaoFim = dtAprFim,
                        Multa = rand.NextDouble() * rand.Next(250),
                        Status = ((TipoStatusConta)rand.Next(2)).ToString(),
                        TipoConta = (int)TipoConta.Imposto,
                        UsuarioID = context.Users.ToArray()[rand.Next(context.Users.Count())].Id,
                        ValorAPagar = rand.NextDouble() * rand.Next(250),
                        ValorDocumento = rand.NextDouble() * rand.Next(250),
                        LinhaDigitavel = RandomString.NextString(15),
                        CNPJMatriz = RandomString.NextString(18),
                        CodigoImposto = rand.Next(),
                        NumeroDocumento = rand.Next().ToString(CultureInfo.InvariantCulture),
                        Serie = RandomString.NextString(25)
                    });
                }

                #endregion

                impostos.ForEach(i =>
                {
                    context.Impostos.Add(i);
                });

                context.SaveChanges();
            }

            if (!context.OutrasContas.Any())
            {
                #region Gera novas outras contas

                Random rand = new Random();
                RandomDateTime randdt = new RandomDateTime();
                int tam = rand.Next(1, 25);
                List<OutraConta> outrasContas = new List<OutraConta>(tam);

                for (int x = 0; x < tam; x++)
                {
                    DateTime dtaprIni, dtAprFim;

                    do
                    {
                        dtaprIni = randdt.Next();
                        dtAprFim = randdt.Next();
                    }
                    while (dtaprIni > dtAprFim);

                    outrasContas.Add(new OutraConta
                    {
                        DataAlteracao = rand.NextDouble() > 0.5d ? randdt.Next() : (DateTime?)null,
                        DataCriacao = randdt.Next(),
                        DataEmissao = randdt.Next(),
                        DataPagamento = rand.NextDouble() > 0.5d ? randdt.Next() : (DateTime?)null,
                        DataVencimento = randdt.Next(),
                        Juros = rand.NextDouble() * rand.Next(250),
                        Multa = rand.NextDouble() * rand.Next(250),
                        Status = ((TipoStatusConta)rand.Next(2)).ToString(),
                        TipoConta = (int)TipoConta.Outras,
                        UsuarioID = context.Users.ToArray()[rand.Next(context.Users.Count())].Id,
                        ValorAPagar = rand.NextDouble() * rand.Next(250),
                        ValorDocumento = rand.NextDouble() * rand.Next(250),
                        FornecedorID = context.Fornecedores.ToArray()[rand.Next(context.Fornecedores.Count())].ID,
                        NumeroDocumento = rand.Next().ToString(CultureInfo.InvariantCulture),
                        Serie = RandomString.NextString(25)
                    });
                }
                #endregion

                outrasContas.ForEach(o =>
                {
                    context.OutrasContas.Add(o);
                });

                context.SaveChanges();
            }

            if (!context.Reembolsos.Any())
            {
                #region Gera Novos Reembolsos

                Random rand = new Random();
                RandomDateTime randdt = new RandomDateTime();
                int tam = rand.Next(1, 10);
                List<Reembolso> reembolsos = new List<Reembolso>();

                for (int x = 0; x < tam; x++)
                {
                    DateTime dtaprIni, dtAprFim;

                    do
                    {
                        dtaprIni = randdt.Next();
                        dtAprFim = randdt.Next();
                    }
                    while (dtaprIni > dtAprFim);

                    Reembolso r = new Reembolso();
                    r.DataAlteracao = rand.NextDouble() > 0.5d ? randdt.Next() : (DateTime?)null;
                    r.DataCriacao = randdt.Next();
                    r.DataEmissao = randdt.Next();
                    r.DataPagamento = rand.NextDouble() > 0.5d ? randdt.Next() : (DateTime?)null;
                    r.DataVencimento = randdt.Next();
                    r.Juros = rand.NextDouble() * rand.Next(250);
                    r.Multa = rand.NextDouble() * rand.Next(250);
                    r.Status = ((TipoStatusConta)rand.Next(2)).ToString();
                    r.TipoConta = (int)TipoConta.Renegociacao;
                    r.UsuarioID = context.Users.ToArray()[rand.Next(0, context.Users.Count())].Id;
                    r.ValorAPagar = rand.NextDouble() * rand.Next(250);
                    r.ValorDocumento = rand.NextDouble() * rand.Next(250);
                    r.ColaboradorID = context.Colaboradores.ToArray()[rand.Next(0,context.Colaboradores.Count())].Id;
                    r.DataRecibo = randdt.Next();
                    r.NumeroDocumento = rand.Next().ToString(CultureInfo.InvariantCulture);
                    r.Serie = RandomString.NextString(25);

                    reembolsos.Add(r);
                }

                #endregion

                reembolsos.ForEach(r =>
                {
                    context.Add(r);
                });

                context.SaveChanges();
            }

            if (!context.Renegociacoes.Any())
            {
                #region Gera Novas Renegociacoes

                Random rand = new Random();
                RandomDateTime randdt = new RandomDateTime();
                int tam = rand.Next(2);
                List<Renegociacao> renegociacoes = new List<Renegociacao>(tam);

                for (int x = 0; x < tam; x++)
                {
                    DateTime dtaprIni, dtAprFim;

                    do
                    {
                        dtaprIni = randdt.Next();
                        dtAprFim = randdt.Next();
                    }
                    while (dtaprIni > dtAprFim);

                    renegociacoes.Add(new Renegociacao
                    {
                        DataAlteracao = rand.NextDouble() > 0.5d ? randdt.Next() : (DateTime?)null,
                        DataCriacao = randdt.Next(),
                        DataEmissao = randdt.Next(),
                        DataPagamento = rand.NextDouble() > 0.5d ? randdt.Next() : (DateTime?)null,
                        DataVencimento = randdt.Next(),
                        Juros = rand.NextDouble() * rand.Next(250),
                        Multa = rand.NextDouble() * rand.Next(250),
                        Status = ((TipoStatusConta)rand.Next(2)).ToString(),
                        TipoConta = (int)TipoConta.Renegociacao,
                        UsuarioID = context.Users.ToArray()[rand.Next(context.Users.Count())].Id,
                        ValorAPagar = rand.NextDouble() * rand.Next(250),
                        ValorDocumento = rand.NextDouble() * rand.Next(250),
                        ContaID = context.Conta.ToArray()[rand.Next(context.Conta.Count())].ID,
                        DataSolicitacao = randdt.Next(),
                        NovaDataVencimento = randdt.Next(),
                        NovoValor = rand.NextDouble() * rand.Next(250),
                        QuantidadeParcelas = rand.Next(1, 25),
                        TipoRenegociacao = RandomString.NextString(15),
                        NumeroDocumento = rand.Next().ToString(CultureInfo.InvariantCulture),
                        Serie = RandomString.NextString(25)
                    });
                }

                #endregion

                renegociacoes.ForEach(r =>
                {
                    context.Renegociacoes.Add(r);
                });

                context.SaveChanges();
            }
        }

        private static void SeedUsers(UserManager<Usuario> usuarioManager, UserManager<Colaborador> colaboradorManager, IServiceProvider serviceProvider)
        {
            CreateRoles(serviceProvider).Wait();
            usuarioManager.PasswordValidators.Clear();
            #region SUPERVISOR

            if (!usuarioManager.Users.Any())
            {
                Usuario usuario = new Usuario
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
                    TwoFactorEnabled = false,
                    Matricula = "000000000"
                };
                IdentityResult result = usuarioManager.CreateAsync(usuario, "123456").Result;

                if (result.Succeeded)
                {
                    usuarioManager.AddToRoleAsync(usuario, "Admin").Wait();
                }
            }

            #endregion

            #region Colaboradores
            colaboradorManager.PasswordValidators.Clear();
            if (!colaboradorManager.Users.Any())
            {
                Colaborador colaborador = new Colaborador
                {
                    Agencia = "154",
                    CodBanco = "033",
                    Conta = "1354",
                    CPF = "000.000.001-91",
                    Email = "colab@gmail.com",
                    Matricula = "3549795",
                    Nome = "Colaborador da Silva",
                    UserName = "COLAB01",
                    NormalizedUserName = "COLAB01".Normalize(),
                    LockoutEnabled = false,
                    NormalizedEmail = "colab@gmail.com".Normalize(),
                    TwoFactorEnabled = false,
                    EmailConfirmed = true,
                    AccessFailedCount = 0,
                    Id = "2"
                };
                IdentityResult result = colaboradorManager.CreateAsync(colaborador, "COLAB01").Result;

                if (result.Succeeded)
                {
                    colaboradorManager.AddToRoleAsync(colaborador, "Colaborador").Wait();
                }
            }

            #endregion

            #region Usuarios

            
            if (!usuarioManager.GetUsersInRoleAsync("Usuario").Result.Any())
            {
                Usuario usuario = new Usuario
                {
                    EmailConfirmed = true,
                    Id = "3",
                    NormalizedUserName = "USUARIO01",
                    PhoneNumberConfirmed = true,
                    UserName = "USUARIO01".Normalize(),
                    Email = "usuario@gmail.com",
                    LockoutEnabled = false,
                    NormalizedEmail = "usuario@gmail.com".Normalize(),
                    PhoneNumber = string.Empty,
                    TwoFactorEnabled = false,
                    Matricula = "123351351"
                };
                IdentityResult result = usuarioManager.CreateAsync(usuario, "123456").Result;

                if (result.Succeeded)
                {
                    usuarioManager.AddToRoleAsync(usuario, "Usuario").Wait();
                }
            }

            #endregion

        }

        private static async Task CreateRoles(IServiceProvider serviceProvider)
        {
            var RoleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            string[] roleNames = { "Admin", "Usuario", "Colaborador" };
            IdentityResult roleResult;

            foreach (var roleName in roleNames)
            {
                var roleExist = await RoleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    roleResult = await RoleManager.CreateAsync(new IdentityRole(roleName));
                }
            }
        }
    }
    #endregion
}
