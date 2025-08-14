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
        public ActionResult Araclar()
        {
            return View();
        }
        public ActionResult Araclar1()
        {
            return View();
        }
        public ActionResult Araclar2()
        {
            return View();
        }
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
        public ActionResult Hakkimizda()
        {
            return View();
        }
        public PartialViewResult Head()
        {
            return PartialView();
        }
    }
}