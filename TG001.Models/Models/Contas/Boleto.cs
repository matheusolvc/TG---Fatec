using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Text;

namespace TG001.Models
{
    public class Boleto : Conta
    {
        public string LinhaDigitavel { get; set; }

        public virtual Fornecedor Fornecedor{ get; set; } 
    }
}
