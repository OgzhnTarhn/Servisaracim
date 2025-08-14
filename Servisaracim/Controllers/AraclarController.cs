using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Servisaracim.Controllers
{
    public class AraclarController : Controller
    {
        // GET: Araclar
        public ActionResult MercedesSprinter()
        {
            return View();
        }

        public ActionResult OtokarSultan()
        {
            return View();
        }
        public ActionResult FiatDucato()
        {
            return View();
        }
    }
}