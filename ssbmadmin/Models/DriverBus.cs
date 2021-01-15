using System.Collections.Generic;
namespace ssbmadmin.Models
{
    public class DriverBus
    {
        public class MapBustoDriverReq
        {
            public long nBusFK { get; set; }
            public long nEntityId { get; set; }
        }
        public class MapBustoDriverResp
        {
            public long n { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class GetListDriverBusReq
        {
          public bool fall { get; set; }
        }
        public class GetListDriverStructure
        {
            public long nEntityId { get; set; }
            public string sFname { get; set; }
            public string sMname { get; set; }
            public string sLname { get; set; }
            public string sRegNo { get; set; }
        }
        public class GetListDriverBusresp
        {
            public List<ITDriver_Bus> ListDriverBus { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class getDriverReq
            { public long nBusFK { get; set; }
            }
        public class getDriverResp
        {
            public long DriverBusId { get; set; }
            public string sFname { get; set; }
            public string sMname { get; set; }
            public string sLname { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class editBusDriverreq
        {
            public long DriverBusId { get; set; }
            public long nEntityId { get; set; }
            public long nBusFK { get; set; }
            public bool bStatus { get; set; }
        }
        public class editBusDriverresp
        {
            public long nEntityId { get; set; }
            public string sFname { get; set; }
            public string sMname { get; set; }
            public string sLname { get; set; }
            public string sRegNo { get; set; }
            public long nBusId { get; set; }
            public APIErrors apiError {get;set;}
        }

        public class getBusOfDriverReq
        {
            public long nEntityId { get; set; }
        }
        public class getBusOfDriverResp
        {
            public long nDriverBusId { get; set; }
            public string sRegNo { get; set; }
            public APIErrors apiError { get; set; }
        }
    } 
}