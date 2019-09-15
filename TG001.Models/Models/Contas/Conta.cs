using System;
using System.Collections.Generic;
using System.Text;

namespace TG001.Models
{
    public class Conta
    {
        public int ID { get; set; }

        public string Status { get; set; }

        public DateTime DataCriacao { get; set; }

        public DateTime DataAlteracao { get; set; }

        public DateTime DataEmissao { get; set; }
        
        public DateTime DataVencimento { get; set; }
        
        public DateTime DataPagamento { get; set; }
        
        public int TipoConta { get; set; }
        
        public double ValorDocumento { get; set; }
        
        public double Multa { get; set; }
        
        public double Juros { get; set; }
        
        public double ValorAPagar { get; set; }
        
        public virtual Usuario Usuario { get; set; }
    }
}
