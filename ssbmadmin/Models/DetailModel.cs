
using System.Collections.Generic;


namespace ssbmadmin.Models
{
    public class DetailModel
    {
        public class AddDetailReq
        {
            public long nEntityId { get; set; }
            public string sContact2 { get; set; }
            public string sEmail2 { get; set; }
            public string sClass { get; set; }
            
            
           
            public string sLiscence { get; set; }
            public string sLiscencePath { get; set; }
            public bool bStatus { get; set; }

            }

        public class AddDetailRsp
        {
            public APIErrors apiError { get; set; }
            public long nEntityId { get; set; }
        }

        public class GetDetailsReq
        {
           
            public long nEntityId { get; set; }
        }

        public class GetDetailsResp
        {
            public long nEntityId { get; set; }
            public string sContact2 { get; set; }
            public string sEmail2 { get; set; }
            public string sClass { get; set; }

           

            public string sLiscence { get; set; }
            public string sLiscencePath { get; set; }
            public APIErrors apiError { get; set; }
        }
    }
}