using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Servisaracim.Controllers
{
    public class BlogController : Controller
    {
        // GET: Blog
        public ActionResult BlogOzelTurlar()
        {
            return View();
        }
        public ActionResult BlogDugunMisafir()
        {
            return View();
        }
        public ActionResult BlogKurumsalEtkinlik()
        {
            return View();
        }
    }
}