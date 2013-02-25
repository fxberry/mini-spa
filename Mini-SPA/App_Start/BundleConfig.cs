using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Mini_SPA
{
	public class BundleConfig
    {
		public static void RegisterBundles(BundleCollection bundles)
		{
			bundles.UseCdn = false;


			bundles.IgnoreList.Clear();
			bundles.IgnoreList.Ignore("*-vsdoc.js");
			bundles.IgnoreList.Ignore("*intellisense.js");

			// jQuery
			bundles.Add(new ScriptBundle("~/bundles/jquery")
				.Include("~/Scripts/lib/jquery-{version}.js"));

			// 3rd Party JavaScript files
			bundles.Add(new ScriptBundle("~/bundles/jsextlibs")
				            .Include(
					            "~/Scripts/lib/knockout-{version}.js",
					            "~/Scripts/lib/sammy-{version}.js"
				            ));

			// All application Javascript
			bundles.Add(new ScriptBundle("~/bundles/jsapplibs")
				.IncludeDirectory("~/Scripts/app/", "*.js", searchSubdirectories: false));

			// CSS
			bundles.Add(new StyleBundle("~/Content/css").Include(
				"~/Content/app.css",
				"~/Content/toastr.css"));
		}
    }
}