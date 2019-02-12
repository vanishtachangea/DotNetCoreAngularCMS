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
    public class PagesController : Controller
    {
        public readonly UCMSAPIContext _context;
        public PagesController(UCMSAPIContext context)
        {
            _context = context;
        }
        /*public IActionResult Index()
        {
            return View();
        }*/

        //Get api/pages
        public IActionResult Get()
        {
            List<Page> pages = _context.Pages.ToList();
            return Json(pages);
        }

        //Get api/pages/slug
        [HttpGet("{slug}")]
        public IActionResult Get(string slug)
        {
            Page page = _context.Pages.SingleOrDefault(x => x.Slug == slug);
            if (page == null)
                return Json("Page is null");
            return Json(page);
        }

        //Post api/pages/create
        [HttpPost("create")]
        public IActionResult Create([FromBody]Page page)
        {
            page.Slug = page.Title.Replace(" ", "-").ToLower();
            page.HasSideBar = page.HasSideBar ?? "no";

            var slug = _context.Pages.FirstOrDefault(x => x.Slug ==  page.Slug);
            if(slug !=null)
            {
                return Json("pageExists");
            }
            else
            {
                _context.Pages.Add(page);
                _context.SaveChanges();

                return Json("ok");
            }
        }

        //Get api/pages/edit/id
        [HttpGet("edit/{id}")]
        public IActionResult Edit(int id)
        {
            Page page = _context.Pages.SingleOrDefault(x => x.ID == id);
            if (page is null)
                return Json("Page is null");
            return Json(page);
        }

        //Put api/pages/edit/id
        [HttpPut("edit/{id}")]
        public IActionResult Edit(int id, [FromBody]Page page)
        {
            page.Slug = page.Title.Replace(" ", "-").ToLower();
            page.HasSideBar = page.HasSideBar ?? "no";

            var p = _context.Pages.FirstOrDefault(x => x.ID != id &&  x.Slug == page.Slug);
            if (p != null)
            {
                return Json("pageExists");
            }
            else
            {
                _context.Update(page);
                _context.SaveChanges();

                return Json("ok");
            }
        }

        //Put api/pages/delete/id
        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            Page page = _context.Pages.SingleOrDefault(x => x.ID == id);
            _context.Remove(page);
            _context.SaveChanges();
                return Json("ok");
 
        }
    }
}
