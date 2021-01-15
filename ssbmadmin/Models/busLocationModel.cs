using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ssbmadmin.Models
{
    public class busLocationModel
    {
        public class AddBusLocationReq
        {
            public long nBusFK { get; set; }
            public float rLat { get; set; }
            public float rLong { get; set; }
        }
        public class AddBusLocationResp
        {
            public long n { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class UpdateBusLocationReq
        {
            public long nBusFK { get; set; }
            public float rLat { get; set; }
            public float rLong { get; set; }
            public bool bStatus { get; set; }
        }
        public class UpdateBusLocationResp
        {
            public long n { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class getBusLocationReq
        {
            public long nBusFK { get; set; }
        }
        public class getBusLocationResp
        {
            public long n { get; set; }
            public long nBusFK { get; set; }
            public float rLat { get; set; }
            public float rLong { get; set; }
            public APIErrors apiError { get; set; }
        }

        public class getBusLocationArrayReq
        {
            public long nBusFK { get; set; }
        }
        public class getBusLocationArrayResp
        {
            public long n { get; set; }
            public long nBusFK { get; set; }
            public List<float> rLat { get; set; }
            public List<float> rLong { get; set; }
            public APIErrors apiError { get; set; }
        }
    }
}