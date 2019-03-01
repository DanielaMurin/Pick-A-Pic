using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class MySession
    {
        public MySession() { }
        public MySession(string token)
        {
            this.AccessToken = token;
        }

        public string AccessToken { get; set; }
    }
}