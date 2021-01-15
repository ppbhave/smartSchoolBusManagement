
using System.Collections.Generic;
namespace ssbmadmin
{
    public class TRouteModal
    {
        public class AddRouteReq
        {
            public long nBusFk { get; set; }
            public float rLat1 { get; set; }
            public float rLong1 { get; set; }
            public float rLat2 { get; set; }
            public float rLong2 { get; set; }
            public List<float> stopaLats { get; set; }
            public List<float> stopaLongs { get; set; }
            public string sTripDetail { get; set; }
        }

        public class AddRouteRsp
        {
            public APIErrors apiError { get; set; }
            public long n { get; set; }
        }

        public class GetAllRoutesForBusReq
        {
            public long nBusId { get; set; }
        }
        public class stops
        {
            public long nStopId { get; set; }
            public float rStoplat { get; set; }
            public float rStopLong { get; set; } 
        }

        public class RouteInfo
        {
            public long n { get; set; }
            public long nBusFk { get; set; }
            public float rLat1 { get; set; }
            public float rLong1 { get; set; }
            public float rLat2 { get; set; }
            public float rLong2 { get; set; }
            public List<stops> stopages { get; set; }
            public string sTripDetail { get; set; }
        }

        public class GetAllRoutesForBusResp
        {
            public List<RouteInfo> liRoute { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class GetAllRouteByIdReq
        {
            public long n { get; set; }
        }
        public class GetAllRouteByIdResp
        {
            public long n { get; set; }
            public long nBusFk { get; set; }
            public float rLat1 { get; set; }
            public float rLong1 { get; set; }
            public float rLat2 { get; set; }
            public float rLong2 { get; set; }
            public string sTripDetails { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class ModifyRouteReq
        {
            public long routeId { get; set;}
            public long nBusFk { get; set; }
            public float rLat1 { get; set; }
            public float rLong1 { get; set; }
            public float rLat2 { get; set; }
            public float rLong2 { get; set; }
            public string sTripDetail { get; set; }
        }
        public class ModifyRouteResp
        {
            public ITRoute route { get; set; }
            public long nBusFk { get; set; }
            public float rLat1 { get; set; }
            public float rLong1 { get; set; }
            public float rLat2 { get; set; }
            public float rLong2 { get; set; }
            public string sTripDetail { get; set; }
            public APIErrors apiError { get; set; }
        }

    }
}