using System.Web;
using System.Web.Optimization;

namespace Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*",
                        "~/Scripts/valDefaults.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/simpleValidation").Include("~/Scripts/simpleValidation.js"));
            bundles.Add(new ScriptBundle("~/bundles/valWithMessages").Include("~/Scripts/valWithMessages.js"));
            bundles.Add(new ScriptBundle("~/bundles/dependRule").Include("~/Scripts/dependRule.js"));
            bundles.Add(new ScriptBundle("~/bundles/invalidHandler").Include("~/Scripts/invalidHandler.js"));
            bundles.Add(new ScriptBundle("~/bundles/customRules").Include("~/Scripts/customRules.js"));
        }
    }
}
