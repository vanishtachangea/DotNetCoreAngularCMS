using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UCMSAPI.Models;

namespace UCMSAPI.Data
{
    public class InitDb
    {
        public static void Init(UCMSAPIContext context)
        {
            context.Database.EnsureCreated();
            if (context.Pages.Any())
            {
                return;
            }
            var pages = new Page[]
            {
                new Page{Title="Home", Slug ="home", Content="Home Content", HasSideBar="No" },
                new Page{Title="About", Slug ="about", Content="About Content", HasSideBar="No" },
                new Page{Title="Services", Slug ="services", Content="Services Content", HasSideBar="No" },
                new Page{Title="Contact", Slug ="contact", Content="Contact Content", HasSideBar="No" },

            };

            foreach(Page p in pages)
            {
                context.Pages.Add(p);
            }
            context.SaveChanges();


            var sidebar = new Sidebar
            {
                Content="Sidebar Content",
            };
            context.Sidebar.Add(sidebar);
            context.SaveChanges();

            var user = new User
            {
                Username = "admin", Password = "admin", IsAdmin = "yes",
            };
            context.Users.Add(user);
            context.SaveChanges();
        }
    }
}
