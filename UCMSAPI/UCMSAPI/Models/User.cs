using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UCMSAPI.Models
{
    public class User
    {
        public int ID { get; set; }
        public String Username { get; set; }
        public String Password { get; set; }
        public String IsAdmin { get; set; }
    }
}
