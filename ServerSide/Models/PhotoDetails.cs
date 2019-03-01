namespace WebApplication1.Models
{
    public class PhotoDetails
    {
        public PhotoDetails() { }
        public PhotoDetails(string username, string description, string uploaddate, string filters, int manualgps, double popularity, double relevance)
        {
            this.username = username;
            this.description = description;
            this.uploaddate = uploaddate;
            this.filters = filters;
            this.manualgps = manualgps;
            this.popularity = popularity;
            this.relevance = relevance;
        }

        public string username { get; set; }
        public string description { get; set; }
        public string uploaddate { get; set; }
        public string filters { get; set; }
        public int manualgps { get; set; }
        public double popularity { get; set; }
        public double relevance { get; set; }
    }
}