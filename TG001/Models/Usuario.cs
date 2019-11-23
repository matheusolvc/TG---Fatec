using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace TG001.Models
{
    public class Usuario : IdentityUser
    {
        [Required]
        public string Matricula { get; set; }
    }
}
