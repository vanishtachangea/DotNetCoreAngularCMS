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
    public class UsersController : Controller
    {
        public readonly UCMSAPIContext _context;
        public UsersController(UCMSAPIContext context)
        {
            _context = context;

        }

        //Post api/users/register
        [HttpPost("register")]
        public IActionResult Register([FromBody]User user)
        {

            var userName = _context.Users.FirstOrDefault(x => x.Username == user.Username);
            if (userName != null)
            {
                return Json("userExists");
            }
            else
            {
                _context.Users.Add(user);
                _context.SaveChanges();

                return Json("ok");
            }
        }

        //Post api/users/login
        [HttpPost("login")]
        public IActionResult Login([FromBody]User user)
        {

            var userName = _context.Users.FirstOrDefault(x => x.Username == user.Username && x.Password == user.Password);
            if (userName != null)
            {
                return Json(user.Username);
            }
            else
            {
                _context.Users.Add(user);
                _context.SaveChanges();

                return Json("invalidLogin");
            }
        }
    }
}