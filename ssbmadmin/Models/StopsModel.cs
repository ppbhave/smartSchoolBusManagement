using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ssbmadmin.Models
{
    public class StopsModel
    {
        public class AddStopReq
        {
            public long nRouteFK { get; set; }
            public List<float> longs { get; set; }
            public List<float> lats { get; set; }
        }

        public class AddStopResp
        {
            public long n { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class FullRoute
        {
            public float rstopLat { get; set; }
            public float rstopLong { get; set; }

        }
        public class GetFullRouteReq
        {
            public long nroute { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class GetFullRouteRsp
        {
            public List<FullRoute> RouteStops { get; set; }
            public float rLat1 { get; set; }
            public float rLong1 { get; set; }
            public float rLat2 { get; set; }
            public float rLong2 { get; set; }
            public string sTripDetails { get; set; }
            public APIErrors apiError { get; set; }
        }
    }
}