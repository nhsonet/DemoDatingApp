using System;

namespace DatingApp.API.DTOs
{
    public class PhotoForReturnDTO
    {
        public string PublicId { get; set; }
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool IsMain { get; set; }
    }
}