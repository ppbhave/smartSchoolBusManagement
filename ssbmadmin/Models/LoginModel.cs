using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ssbmadmin.Models
{
    public class LoginModel
    {
        public class loginReq
        {
            public string sEmail { get; set; }
            public string sPassword { get; set; }
        }
        
        public class loginResp
        {
            //  public long n { get; set; }   // Use if needed
            public long nEntityId { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class getUserReq
        {
            public long nEntityId { get; set; }
        }
        public class getUserResp
        {
            public long nEntityId { get; set; }
            public string sEmail { get; set; }
            public string sPassword { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class ModifyUserreq
        {
            public ITUser iuser { get; set; }
            public string Email { get; set; }
            public string password { get; set;}
        }
        public class ModifyUserresp
        {
            public ITUser iuser { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class setCredReq
        {
            public string sEmail { get; set; }
            public string sPassword { get; set; }
            public long nEntityFK { get; set; }
        }

        public class setCredResp
        {
            public long nEntityId { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class ModifyuserResp
        {
          public ITUser user { get; set; }
          public APIErrors apiError { get; set; }
        }

        public class ModifyuserReq
        {
            public ITUser user { get; set; }
            public string sEmail { get; set; }
            public string sPassword { get; set; }
        }
    }   
}