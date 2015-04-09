using System.Web.Mvc;
using Web.Models;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        #region simple validation
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
        #endregion

        #region validation with custom messages
        public ActionResult ValidationWithCustomMessages()
        {
            return View();
        }
        #endregion

        public ActionResult DependentRule()
        {
            return View();
        }

        public ActionResult InvalidHandler()
        {
            return View();
        }

        public ActionResult CustomRules()
        {
            return View();
        }
    }
}