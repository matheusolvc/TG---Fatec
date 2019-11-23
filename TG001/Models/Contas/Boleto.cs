using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TG001.Models
{
    public class Boleto : Conta
    {
        [Required]
        public string LinhaDigitavel { get; set; }

        [ForeignKey("Fornecedor")]
        public int FornecedorID { get; set; }

        public virtual Fornecedor Fornecedor { get; set; }
    }
}
