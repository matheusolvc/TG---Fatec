using System;
using System.Collections.Generic;
using System.Text;

namespace TG001.Models
{
    public class Renegociacao : Conta
    {
        public DateTime DataSolicitacao { get; set; }

        public string TipoRenegociacao { get; set; }

        public int QuantidadeParcelas { get; set; }

        public DateTime NovaDataVencimento { get; set; }

        public double NovoValor { get; set; }

        public string Observacao { get; set; }

    }
}
