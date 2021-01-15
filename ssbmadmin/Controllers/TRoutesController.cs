using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ssbmadmin.Controllers
{
    public class TRoutesController : ApiController
    {
        [ActionName("AddRoute")]
        [HttpPost]
        public object AddRoute([FromBody]TRouteModal.AddRouteReq req)
        {
            BLL_TRoute bllRoute = new BLL_TRoute();
            TRouteModal.AddRouteRsp resp = bllRoute.AddRoute(req);
            return (resp);
        }
        
        [ActionName("getRoutesForBus")]
        [HttpPost]
        public object getRoutesForBus([FromBody]TRouteModal.GetAllRoutesForBusReq req)
        {
            BLL_TRoute bllRoute = new BLL_TRoute();
            TRouteModal.GetAllRoutesForBusResp resp = bllRoute.GetAllRoutesForBus(req);
            return (resp);
        }

        [ActionName("GetFullRoute")]
        [HttpPost]
        public object GetFullRoute([FromBody]Models.StopsModel.GetFullRouteReq req)
        {
            BLL_TRoute bllRoute = new BLL_TRoute();
            Models.StopsModel.GetFullRouteRsp resp = bllRoute.GetFullRoute(req);
            return (resp);
        }

        [ActionName("AddStop")]
        [HttpPost]
        public object AddStop([FromBody]Models.StopsModel.AddStopReq req)
        {
            BLL_TRoute bllRoute = new BLL_TRoute();
            Models.StopsModel.AddStopResp resp = bllRoute.AddStop(req);
            return (resp);
        }

    }
}
