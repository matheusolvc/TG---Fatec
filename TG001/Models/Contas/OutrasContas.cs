namespace TG001.Models
{
    public class OutraConta : Conta
    {
        public virtual Fornecedor Fornecedor { get; set; }
    }
}
