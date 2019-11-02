using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace TG001.Repo.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Colaboradores",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    CPF = table.Column<string>(nullable: true),
                    Nome = table.Column<string>(nullable: true),
                    Matricula = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Senha = table.Column<string>(nullable: true),
                    CodBanco = table.Column<string>(nullable: true),
                    Agencia = table.Column<string>(nullable: true),
                    Conta = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Colaboradores", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Fornecedores",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    CNPJ = table.Column<string>(nullable: true),
                    RazaoSocial = table.Column<string>(nullable: true),
                    CodBanco = table.Column<string>(nullable: true),
                    Agencia = table.Column<string>(nullable: true),
                    Conta = table.Column<string>(nullable: true),
                    Telefone = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Endereco = table.Column<string>(nullable: true),
                    Numero = table.Column<string>(nullable: true),
                    Bairro = table.Column<string>(nullable: true),
                    Cidade = table.Column<string>(nullable: true),
                    UF = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fornecedores", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TipoUsuario = table.Column<string>(nullable: true),
                    Matricula = table.Column<int>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    SenhaCrip = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Lotes",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    DataAlteracao = table.Column<DateTime>(nullable: false),
                    DataGeracao = table.Column<DateTime>(nullable: false),
                    ValorTotalLote = table.Column<double>(nullable: false),
                    StatusTransmissao = table.Column<string>(nullable: true),
                    UsuarioID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lotes", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Lotes_Usuarios_UsuarioID",
                        column: x => x.UsuarioID,
                        principalTable: "Usuarios",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Conta",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Status = table.Column<string>(nullable: true),
                    DataCriacao = table.Column<DateTime>(nullable: false),
                    DataAlteracao = table.Column<DateTime>(nullable: false),
                    DataEmissao = table.Column<DateTime>(nullable: false),
                    DataVencimento = table.Column<DateTime>(nullable: false),
                    DataPagamento = table.Column<DateTime>(nullable: false),
                    TipoConta = table.Column<int>(nullable: false),
                    ValorDocumento = table.Column<double>(nullable: false),
                    Multa = table.Column<double>(nullable: false),
                    Juros = table.Column<double>(nullable: false),
                    ValorAPagar = table.Column<double>(nullable: false),
                    UsuarioID = table.Column<int>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false),
                    LoteID = table.Column<int>(nullable: true),
                    LinhaDigitavel = table.Column<string>(nullable: true),
                    FornecedorID = table.Column<int>(nullable: true),
                    PeriodoApuracao = table.Column<TimeSpan>(nullable: true),
                    CodigoImposto = table.Column<int>(nullable: true),
                    Imposto_LinhaDigitavel = table.Column<string>(nullable: true),
                    CNPJMatriz = table.Column<string>(nullable: true),
                    OutraConta_FornecedorID = table.Column<int>(nullable: true),
                    DataRecibo = table.Column<DateTime>(nullable: true),
                    Descricao = table.Column<string>(nullable: true),
                    ColaboradorID = table.Column<int>(nullable: true),
                    DataSolicitacao = table.Column<DateTime>(nullable: true),
                    TipoRenegociacao = table.Column<string>(nullable: true),
                    QuantidadeParcelas = table.Column<int>(nullable: true),
                    NovaDataVencimento = table.Column<DateTime>(nullable: true),
                    NovoValor = table.Column<double>(nullable: true),
                    Observacao = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Conta", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Conta_Fornecedores_FornecedorID",
                        column: x => x.FornecedorID,
                        principalTable: "Fornecedores",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Conta_Lotes_LoteID",
                        column: x => x.LoteID,
                        principalTable: "Lotes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Conta_Usuarios_UsuarioID",
                        column: x => x.UsuarioID,
                        principalTable: "Usuarios",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Conta_Fornecedores_OutraConta_FornecedorID",
                        column: x => x.OutraConta_FornecedorID,
                        principalTable: "Fornecedores",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Conta_Colaboradores_ColaboradorID",
                        column: x => x.ColaboradorID,
                        principalTable: "Colaboradores",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RetornosLote",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    StatusTransmissao = table.Column<string>(nullable: true),
                    Mensagem = table.Column<string>(nullable: true),
                    LoteID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RetornosLote", x => x.ID);
                    table.ForeignKey(
                        name: "FK_RetornosLote_Lotes_LoteID",
                        column: x => x.LoteID,
                        principalTable: "Lotes",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Conta_FornecedorID",
                table: "Conta",
                column: "FornecedorID");

            migrationBuilder.CreateIndex(
                name: "IX_Conta_LoteID",
                table: "Conta",
                column: "LoteID");

            migrationBuilder.CreateIndex(
                name: "IX_Conta_UsuarioID",
                table: "Conta",
                column: "UsuarioID");

            migrationBuilder.CreateIndex(
                name: "IX_Conta_OutraConta_FornecedorID",
                table: "Conta",
                column: "OutraConta_FornecedorID");

            migrationBuilder.CreateIndex(
                name: "IX_Conta_ColaboradorID",
                table: "Conta",
                column: "ColaboradorID");

            migrationBuilder.CreateIndex(
                name: "IX_Lotes_UsuarioID",
                table: "Lotes",
                column: "UsuarioID");

            migrationBuilder.CreateIndex(
                name: "IX_RetornosLote_LoteID",
                table: "RetornosLote",
                column: "LoteID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Conta");

            migrationBuilder.DropTable(
                name: "RetornosLote");

            migrationBuilder.DropTable(
                name: "Fornecedores");

            migrationBuilder.DropTable(
                name: "Colaboradores");

            migrationBuilder.DropTable(
                name: "Lotes");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
