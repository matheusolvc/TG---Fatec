using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TG001.Models
{
    public class Renegociacao : Conta
    {

        [Required]
        public DateTime DataSolicitacao { get; set; }

        [Required]
        public string TipoRenegociacao { get; set; }

        [Required]
        public int QuantidadeParcelas { get; set; }

        [Required]
        public DateTime NovaDataVencimento { get; set; }

        [Required]
        public double NovoValor { get; set; }

        public string Observacao { get; set; }

        [ForeignKey("Conta")]
        public int ContaID { get; set; }

        public virtual Conta ContaRenegociada { get; set; }
    }
}
