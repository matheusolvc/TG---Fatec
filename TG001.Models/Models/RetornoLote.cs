namespace TG001.Models
{
    public class RetornoLote
    {
        public int ID { get; set; }

        public string StatusTransmissao { get; set; }

        public string Mensagem { get; set; }

        public Lote Lote { get; set; }
    }
}
