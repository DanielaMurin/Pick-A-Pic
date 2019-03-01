namespace WebApplication1.Models
{
    public class QuickPhoto
    {
        public QuickPhoto() { }
        public QuickPhoto(string id, string username, string thumbnailpath, double lat, double lng, double popularity, int manualgps, string filters)
        {
            this.id = id;
            this.username = username;
            this.thumbnailpath = thumbnailpath;
            this.lat = lat;
            this.lng = lng;
            this.popularity = popularity;
            this.manualgps = manualgps;
            this.filters = filters;
        }

        public string id { get; set; }
        public string username { get; set; }
        public string thumbnailpath { get; set; }
        public double lat { get; set; }
        public double lng { get; set; }
        public double popularity { get; set; }
        public int manualgps { get; set; }
        public string filters { get; set; }
    }
}