using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TG001.Models
{
    public class Lote
    {
        [Key]
        public int ID { get; set; }

        public DateTime? DataAlteracao { get; set; }

        [Required]
        public DateTime DataGeracao { get; set; }

        [Required]
        public double ValorTotalLote { get; set; }

        [Required]
        public string StatusTransmissao { get; set; }

        [ForeignKey("Usuario")]
        public string UsuarioID { get; set; }

        public virtual Usuario Usuario { get; set; }

        public ICollection<Conta> Contas { get; set; }

    }
}
