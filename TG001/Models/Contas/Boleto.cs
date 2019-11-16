namespace TG001.Models
{
    public class Boleto : Conta
    {
        public string LinhaDigitavel { get; set; }

        public virtual Fornecedor Fornecedor { get; set; }
    }
}
