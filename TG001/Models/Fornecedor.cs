using System.ComponentModel.DataAnnotations;

namespace TG001.Models
{
    public class Fornecedor
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string CNPJ { get; set; }

        [Required]
        public string RazaoSocial { get; set; }

        [Required]
        public string CodBanco { get; set; }

        [Required]
        public string Agencia { get; set; }

        [Required]
        public string Conta { get; set; }

        [Required]
        public string Telefone { get; set; }

        public string Email { get; set; }

        [Required]
        public string Endereco { get; set; }

        [Required]
        public string Numero { get; set; }

        [Required]
        public string Bairro { get; set; }

        [Required]
        public string Cidade { get; set; }

        [Required]
        public string UF { get; set; }
    }
}
