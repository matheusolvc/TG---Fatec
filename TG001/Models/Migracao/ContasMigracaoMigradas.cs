using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TG001.Models.Migracao
{
    public class ContasMigracaoMigradas
    {
        [Key]
        public int ID { get; set; }

        [ForeignKey("ContasMigracao")]
        public int ContasMigracaoID { get; set; }

        [Required]
        public int LoteID { get; set; }

        [Required]
        public DateTime DataMigracao { get; set; }

        public virtual ContasMigracao ContasMigracao { get; set; }
    }
}
