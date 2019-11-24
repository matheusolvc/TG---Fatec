using Microsoft.EntityFrameworkCore.Migrations;

namespace TG001.Migrations
{
    public partial class AddNumDocSerie : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NumeroDocumento",
                table: "Conta",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Serie",
                table: "Conta",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NumeroDocumento",
                table: "Conta");

            migrationBuilder.DropColumn(
                name: "Serie",
                table: "Conta");
        }
    }
}
