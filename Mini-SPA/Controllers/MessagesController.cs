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
					//new Message { FirstName = "Martin", LastName = "Frictus", Mobile = string.Empty, Email = string.Empty},
					//new Message { FirstName = "Peter", LastName = "Müller", Mobile = "+41764274522", Email = string.Empty},
					new Message { Subject = "My Testsubject", Body = "my Body text", IsRead = false },
					new Message { Subject = "My 2nd Message" , Body = "My Body of the second message", IsRead = false}
				};

		}

    }
}
