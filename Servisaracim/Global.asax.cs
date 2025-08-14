using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace Servisaracim
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            
            // Türkçe karakter desteği için encoding ayarları
            System.Web.Mvc.ViewEngines.Engines.Clear();
            System.Web.Mvc.ViewEngines.Engines.Add(new RazorViewEngine());
        }
        
        protected void Application_BeginRequest()
        {
            // Her request'te UTF-8 encoding kullan
            if (Response != null)
            {
                Response.ContentEncoding = Encoding.UTF8;
                Response.HeaderEncoding = Encoding.UTF8;
                Response.Charset = "utf-8";
            }
            
            // Request encoding'i de UTF-8 yap
            if (Request != null)
            {
                Request.ContentEncoding = Encoding.UTF8;
            }
        }
    }
}
