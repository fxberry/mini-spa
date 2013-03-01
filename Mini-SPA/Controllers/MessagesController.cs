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
					new Message { Id = 1, Subject = "My Testsubject", Body = "my Body text which serves as a test", IsRead = false },
					new Message { Id = 2, Subject = "(No Subject)" , Body = "Have time for a meeting today?", IsRead = false},
                    new Message { Id = 3, Subject = "Its a wonderful day", Body = "The birds are singing Michael Jackson!", IsRead = false}
				};

		}

    }
}
