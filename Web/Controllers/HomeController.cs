using System.Web.Mvc;
using Web.Models;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult SimpleValidation()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SimpleValidation(Provider provider)
        {
            ViewBag.Result = "Result returned from the server";
            return View(provider);
        }
    }
}