using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace Mini_SPA
{
	public class GlobalConfig
	{
		public static void CustomizeConfiguration(HttpConfiguration configuration)
		{
			// camel JSON
			var json = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
			json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
		}
	}
}