using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TG001.Config
{
    public class ConfiguracoesDB
    {
        public Conexao Conexao { get; set; }
    }

    public class Conexao
    {
        public string Server { get; set; }
        public string Database { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
    }
}
