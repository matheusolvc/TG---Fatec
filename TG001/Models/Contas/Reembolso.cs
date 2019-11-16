using System;

namespace TG001.Models
{
    public class Reembolso : Conta
    {
        public DateTime DataRecibo { get; set; }

        public string Descricao { get; set; }

        public virtual Colaborador Colaborador { get; set; }
    }
}
