using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace TG001.Models
{
    public class Colaborador : Usuario
    {

        [Required]
        public string CPF { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public string CodBanco { get; set; }

        [Required]
        public string Agencia { get; set; }

        [Required]
        public string Conta { get; set; }
    }
}
