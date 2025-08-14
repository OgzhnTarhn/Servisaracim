using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Servisaracim.Controllers
{
    public class HizmetlerimizController : Controller
    {
        public ActionResult Serviskiralama()
        {
            return View();
        }

        public ActionResult OtobüsKiralama()
        {
            return View();
        }

        public ActionResult PersonelTasimaciligi()
        {
            return View();
        }

        public ActionResult MinibusKiralama()
        {
            return View();
        }

        public ActionResult VipTasimacilik()
        {
            return View();
        }
    }
}