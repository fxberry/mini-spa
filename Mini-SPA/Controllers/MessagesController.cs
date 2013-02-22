using System.Collections.Generic;
using System.Web.Http;
using Mini_SPA.Models;

namespace Mini_SPA.Controllers
{
    public class MessagesController : ApiController
    {

		public IEnumerable<Message> Get()
		{

			return new List<Message>
				{
					new Message { Id = 1, Subject = "My Testsubject", Body = "my Body text", IsRead = false },
					new Message { Id = 2, Subject = "My 2nd Message" , Body = "My Body of the second message", IsRead = false}
				};

		}

    }
}
