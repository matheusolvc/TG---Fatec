using System;
using System.Collections.Generic;
using System.Text;

namespace TG001.Models
{
    public class Imposto : Conta
    {
        public TimeSpan PeriodoApuracao { get; set; }

        public int CodigoImposto { get; set; }

        public string LinhaDigitavel { get; set; }

        public string CNPJMatriz { get; set; }

    }
}
