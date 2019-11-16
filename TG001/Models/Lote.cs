using System;
using System.Collections.Generic;

namespace TG001.Models
{
    public class Lote
    {
        public int ID { get; set; }

        public DateTime DataAlteracao { get; set; }

        public DateTime DataGeracao { get; set; }

        public double ValorTotalLote { get; set; }

        public string StatusTransmissao { get; set; }

        public virtual ApplicationUser Usuario { get; set; }

        public ICollection<Conta> Contas { get; set; }

    }
}
