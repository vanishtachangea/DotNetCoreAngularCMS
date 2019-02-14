using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UCMSAPI.Models;

namespace UCMSAPI.Data
{
    public class UCMSAPIContext: DbContext
    {
        public UCMSAPIContext(DbContextOptions<UCMSAPIContext> options) : base(options)
        {

        }
        public DbSet<Page> Pages { get; set; }
        public DbSet<Sidebar> Sidebar { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
