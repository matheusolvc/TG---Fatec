using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TG001.Models.Migracao
{
    public class ContasMigracao
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public DateTime DataEmissao { get; set; }

        [Required]
        public DateTime DataVencimento { get; set; }

        [Required]
        public DateTime DataPagamento { get; set; }

        [Required]
        public string Tipo { get; set; }

        [Required]
        public double Valor { get; set; }

        [Required]
        public double Multa { get; set; }

        [Required]
        public double Juros { get; set; }
    }
}
