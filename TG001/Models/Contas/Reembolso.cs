using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TG001.Models
{
    public class Reembolso : Conta
    {
        [Required]
        public DateTime DataRecibo { get; set; }


        public string Descricao { get; set; }

        [ForeignKey("Colaborador")]
        public string ColaboradorID { get; set; }

        public virtual Colaborador Colaborador { get; set; }
    }
}
