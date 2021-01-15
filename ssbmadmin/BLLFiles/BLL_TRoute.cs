using System.Collections.Generic;
namespace ssbmadmin
{
    public class BLL_TRoute : ApiProvider
    {
        internal TRouteModal.AddRouteRsp AddRoute(TRouteModal.AddRouteReq req)
        {
            TRouteModal.AddRouteRsp rsp = new TRouteModal.AddRouteRsp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITRoute iRoute = _storage.AddRoute(req.nBusFk, req.rLat1, req.rLong1, req.rLat2, req.rLong2,req.sTripDetail, true);
            if (iRoute != null && iRoute.n > 0)
            {
                bool success = true;
                rsp.n = iRoute.n;
                if (_storage.AddStop(rsp.n, req.rLat1, req.rLong1).n < 0) { success = false; }
                if (_storage.AddStop(rsp.n, req.rLat2, req.rLong2).n < 0) { success = false; }
                for (var i=0;i<req.stopaLats.Count;i++)
                { 
                    if (_storage.AddStop(rsp.n, req.stopaLats[i], req.stopaLongs[i]).n <= 0) { success = false; }
                }
                if (success)
                { rsp.apiError = ApiError_defs.ok; }
                else { rsp.apiError.sErrorMessage = "Unable to add some or all stops."; }
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to add route";
            }

            return rsp;
        }

        internal Models.StopsModel.AddStopResp AddStop(Models.StopsModel.AddStopReq req)
        {
            Models.StopsModel.AddStopResp rsp = new Models.StopsModel.AddStopResp();
            rsp.apiError = new APIErrors();
           rsp.apiError=ApiError_defs.ok;
            for(int i=0; i<req.lats.Count;i++)
            {
                ITStops iS = _storage.AddStop(req.nRouteFK, req.lats[i], req.longs[i]);
                if (iS == null || iS.n <= 0)
                {
                    rsp.apiError = ApiError_defs.err_Invalid_Request;
                    rsp.apiError.sErrorMessage = "Some or all stops could not be added"; 
                }
                else { rsp.n=iS.n; }
            }
            return rsp;
        }

        internal TRouteModal.GetAllRoutesForBusResp GetAllRoutesForBus(TRouteModal.GetAllRoutesForBusReq req)
        {
            TRouteModal.GetAllRoutesForBusResp rsp = new TRouteModal.GetAllRoutesForBusResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;

            List<ITRoute> liRoutes = _storage.getRouteByBus(req.nBusId);
            List<TRouteModal.RouteInfo> liRouteInfo = new List<TRouteModal.RouteInfo>();

            if (liRoutes != null || liRoutes.Count>0)
            {
                foreach (ITRoute iRt in liRoutes)
                {
                    TRouteModal.RouteInfo objRoute = new TRouteModal.RouteInfo();
                    objRoute.n = iRt.n;
                    objRoute.nBusFk = iRt.nBusFK;
                    objRoute.rLat1 = iRt.rLat1;
                    objRoute.rLong1 = iRt.rLong1;
                    objRoute.rLat2 = iRt.rLat2;
                    objRoute.rLong2 = iRt.rLong2;
                    objRoute.sTripDetail = iRt.sTripDetails;
                    List<ITStops> stops = _storage.GetFullRoute(iRt.n);
                    if(stops!=null && stops.Count>0)
                    {
                        objRoute.stopages = new List<TRouteModal.stops>();
                        foreach(ITStops stop in stops)
                        {
                            TRouteModal.stops s = new TRouteModal.stops();
                            s.nStopId = stop.n;
                            s.rStoplat = stop.rStopLat;
                            s.rStopLong = stop.rStopLong;
                            objRoute.stopages.Add(s);
                        }
                    }
                    liRouteInfo.Add(objRoute);
                }
                rsp.liRoute = liRouteInfo;
                rsp.apiError = ApiError_defs.ok;
            }
            return rsp;
        }

        internal Models.StopsModel.GetFullRouteRsp GetFullRoute(Models.StopsModel.GetFullRouteReq req)
        {
            Models.StopsModel.GetFullRouteRsp rsp = new Models.StopsModel.GetFullRouteRsp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;

            List<ITStops> liRouteStops = _storage.GetFullRoute(req.nroute);
            List<Models.StopsModel.FullRoute> fullR = new List<Models.StopsModel.FullRoute>();
            if (liRouteStops != null && liRouteStops.Count>0)
            {
                foreach (ITStops iRt in liRouteStops)
                {
                    Models.StopsModel.FullRoute objRoute = new Models.StopsModel.FullRoute();
                    objRoute.rstopLong = iRt.rStopLong;
                    objRoute.rstopLat = iRt.rStopLat;
                    fullR.Add(objRoute);
                }
                rsp.RouteStops = fullR;
                ITRoute route = _storage.GetRouteByID(req.nroute);
                rsp.rLat1 = route.rLat1;
                rsp.rLat2 = route.rLat2;
                rsp.rLong1 = route.rLong1;
                rsp.rLong2 = route.rLong2;
                rsp.sTripDetails = route.sTripDetails;
                rsp.apiError = ApiError_defs.ok;
            }
            return rsp;
        }
        internal TRouteModal.GetAllRouteByIdResp GetRouteById(TRouteModal.GetAllRouteByIdReq req)
        {
            TRouteModal.GetAllRouteByIdResp rsp = new TRouteModal.GetAllRouteByIdResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;

            ITRoute Routes = _storage.GetRouteByID(req.n);          
            if (Routes != null)
            {
                rsp.n = Routes.n;
                rsp.nBusFk = Routes.nBusFK;
                rsp.rLat1 = Routes.rLat1;
                rsp.rLong1 = Routes.rLat2;
                rsp.rLat2 = Routes.rLong1;
                rsp.rLong2 = Routes.rLong2;
                rsp.sTripDetails = Routes.sTripDetails;
                rsp.apiError = ApiError_defs.ok;
            }
            return rsp;
        }
        internal TRouteModal.ModifyRouteResp ModifyRoute(TRouteModal.ModifyRouteReq req)
        {
            TRouteModal.ModifyRouteResp rsp = new TRouteModal.ModifyRouteResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITRoute route = _storage.GetRouteByID(req.routeId);
            if (_storage.modifyEndpoints(req.routeId, route.rLat1, route.rLong1, req.rLat1, req.rLong1) != null && _storage.modifyEndpoints(req.routeId, route.rLat2, route.rLong2, req.rLat2, req.rLong2) != null)
            {
                ITRoute Routes = _storage.ModifyRoute(route, req.nBusFk, req.rLat1, req.rLat2, req.rLong1, req.rLong2, req.sTripDetail, true);
                if (Routes != null)
                {
                    // rsp.n = Routes.n;
                    rsp.nBusFk = Routes.nBusFK;
                    rsp.rLat1 = Routes.rLat1;
                    rsp.rLong1 = Routes.rLat2;
                    rsp.rLat2 = Routes.rLong1;
                    rsp.rLong2 = Routes.rLong2;
                    rsp.apiError = ApiError_defs.ok;
                }
            }
            return rsp;
        }
    }
}