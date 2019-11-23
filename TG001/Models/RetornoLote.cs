using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TG001.Models
{
    public class RetornoLote
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string StatusTransmissao { get; set; }

        public string Mensagem { get; set; }

        [ForeignKey("Lote")]
        public int LoteID { get; set; }

        public Lote Lote { get; set; }
    }
}
