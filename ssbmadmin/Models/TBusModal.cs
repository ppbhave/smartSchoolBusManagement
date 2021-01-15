
using System.Collections.Generic;
namespace ssbmadmin
{
    public class TBusModal
    {
        public class AddBusReq
        {
            public string sRegNo { get; set; }
            public int jCapacity { get; set; }
            public bool bStatus { get; set; }
        }
       
        public class AddBusRsp
        {
            public APIErrors apiError { get; set; }
            public long nBusId { get; set; }
        }
        public class getBusbyRegReq
        {
            public string sRegNo { get; set; }
        }
        public class getBusbyRegResp
        {
            public long nBusId { get; set; }
            public int jCapacity { get; set; }
            public string sRegNo { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class GetBusReq
        {
            public bool fAll { get; set; }
        }

        public class BusInfo
        {
            public long nBusId { get; set; }
            public int jCapacity { get; set; }
            public string sRegNo { get; set; }

        }
  
             public class ModifyBusResp
        {
            public long nBusId { get; set; }
            public string sRegNo { get; set; }
            public int jCapacity { get; set; }
            public bool bStatus { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class ModifyBusReq
        {
            public long nBusId { get; set; }
            public string sRegNo { get; set; }
            public int jCapacity { get; set; }
        }
        public class GetBusRsp
        {
            public List<BusInfo> liBus { get; set; }
            public APIErrors apiError { get; set; }
        }
      
        public class GetBusByIdResp
     {
        public long n { get; set; }
        public string sRegNo { get; set; }
        public int jCapacity { get; set; }
        public APIErrors apiError { get; set; }
    }
    public class GetBusByIdReq
        {
          public long nBusId { get; set; }
        }

    }
}