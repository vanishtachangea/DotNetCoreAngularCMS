using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UCMSAPI.Models
{
    public class Page
    {
        public int ID { get; set; }
        public String Title { get; set; }
        public String Slug { get; set; }
        public String Content { get; set; }
        public String HasSideBar { get; set; }
    }
}
