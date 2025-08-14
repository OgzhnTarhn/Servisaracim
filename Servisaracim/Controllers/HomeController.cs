using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Servisaracim.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Dugun()
        {
            return View();
        }
        public ActionResult Piknik()
        {
            return View();
        }
        public ActionResult Gezi()
        {
            return View();
        }
        public ActionResult Hakkimizda()
        {
            return View();
        }

        public ActionResult KVKK()
        {
            return View();
        }
        public ActionResult CerezPolitikasi()
        {
            return View();
        }

        public ActionResult Gizlilik()
        {
            return View();
        }
        public PartialViewResult Head()
        {
            return PartialView();
        }


    }
}