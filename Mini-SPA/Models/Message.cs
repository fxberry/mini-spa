namespace Mini_SPA.Models
{
	public class Message
	{
		public int Id { get; set; }

		public string Subject { get; set; }

		public string Body { get; set; }

		public bool IsRead { get; set; }
	}
}