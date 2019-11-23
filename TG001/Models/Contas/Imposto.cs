using System;
using System.ComponentModel.DataAnnotations;

namespace TG001.Models
{
    public class Imposto : Conta
    {
        [Required]
        public DateTime PeriodoApuracaoInicio { get; set; }

        [Required]
        public DateTime PeriodoApuracaoFim { get; set; }

        [Required]
        public int CodigoImposto { get; set; }

        [Required]
        public string LinhaDigitavel { get; set; }

        [Required]
        public string CNPJMatriz { get; set; }

    }
}
