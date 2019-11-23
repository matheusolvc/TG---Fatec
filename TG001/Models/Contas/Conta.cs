using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TG001.Models
{
    public class Conta
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string Status { get; set; }

        public DateTime DataCriacao { get; set; }

        public DateTime? DataAlteracao { get; set; }

        [Required]
        public DateTime DataEmissao { get; set; }

        [Required]
        public DateTime DataVencimento { get; set; }

        public DateTime? DataPagamento { get; set; }

        [Required]
        public int TipoConta { get; set; }

        [Required]
        public double ValorDocumento { get; set; }

        [Required]
        public double Multa { get; set; }

        [Required]
        public double Juros { get; set; }

        [Required]
        public double ValorAPagar { get; set; }

        [ForeignKey("Usuario")]
        public string UsuarioID { get; set; }

        public virtual Usuario Usuario { get; set; }
    }
}
