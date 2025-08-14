using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Servisaracim.Controllers
{
    public class PartialController : Controller
    {
        // GET: Partial
        public PartialViewResult Header()
        {
            return PartialView();
        }
        public PartialViewResult Footer()
        {
            return PartialView();
        }
        public PartialViewResult Head()
        {
            return PartialView();
        }
        public PartialViewResult FooterHizmetlerimiz()
        {
            return PartialView();
        }
    }
}