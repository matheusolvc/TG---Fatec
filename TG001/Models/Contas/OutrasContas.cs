using System.ComponentModel.DataAnnotations.Schema;

namespace TG001.Models
{
    public class OutraConta : Conta
    {
        [ForeignKey("Fornecedor")]
        public int FornecedorID { get; set; }

        public virtual Fornecedor Fornecedor { get; set; }
    }
}
