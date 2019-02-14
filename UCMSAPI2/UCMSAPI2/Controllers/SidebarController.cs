using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UCMSAPI.Data;
using UCMSAPI.Models;

namespace UCMSAPI.Controllers
{
    [Route("api/[controller]")]
    public class SidebarController : Controller
    {

        public readonly UCMSAPIContext _context;
        public SidebarController(UCMSAPIContext context)
        {
            _context = context;

        }

        //Get api/sidebar
        public IActionResult Get()
        {
            Sidebar sidebar = _context.Sidebar.FirstOrDefault();
            return Json(sidebar);
        }

        //Put api/sidebar/edit
        [HttpPut("edit")]
        public IActionResult Edit([FromBody] Sidebar sidebar)
        {
            _context.Update(sidebar);
            _context.SaveChanges();

            return Json("Sidebar-ok");
        }
    }
}