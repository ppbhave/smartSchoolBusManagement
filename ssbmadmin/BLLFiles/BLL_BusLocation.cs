
using System.Collections.Generic;
namespace ssbmadmin.Bllfiles
{
    public class BLL_BusLocation : ApiProvider  
    {
        internal Models.busLocationModel.AddBusLocationResp AddBusLocation(Models.busLocationModel.AddBusLocationReq req)
        {
            Models.busLocationModel.AddBusLocationResp rsp = new Models.busLocationModel.AddBusLocationResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITBusLocation busL = _storage.AddBusLocation(req.nBusFK, req.rLat,req.rLong);
            if (busL != null && busL.n > 0)
            {
               // rsp.n = iUser.n;   //Use if needed
                rsp.n = busL.n;
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Couldent report the bus for the location. ";
            }

            return rsp;
        }

        internal Models.busLocationModel.getBusLocationResp getBusLocation(Models.busLocationModel.getBusLocationReq req)
        {
            Models.busLocationModel.getBusLocationResp rsp = new Models.busLocationModel.getBusLocationResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITBusLocation busL = _storage.getLocationByBus(req.nBusFK);
            if (busL != null && busL.n > 0)
            {
                rsp.n = busL.n;
                rsp.nBusFK = busL.nBusFK;
                rsp.rLat = busL.rLat;
                rsp.rLong = busL.rLong;
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Couldent found the current location of the bus";
            }

            return rsp;
        }

        internal Models.busLocationModel.getBusLocationArrayResp getBusLocationArray(Models.busLocationModel.getBusLocationArrayReq req)
        {
            Models.busLocationModel.getBusLocationArrayResp rsp = new Models.busLocationModel.getBusLocationArrayResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            rsp.rLat = new List<float>();
            rsp.rLong = new List<float>();
            List<ITBusLocation> busL = _storage.getLocationArrayByBus(req.nBusFK);
            if (busL != null && busL.Count > 0)
            {
                foreach (ITBusLocation bl in busL)
                {     rsp.n = bl.n;
                rsp.nBusFK = bl.nBusFK;
                rsp.rLat.Add( bl.rLat);
                rsp.rLong.Add(bl.rLong);
                rsp.apiError = ApiError_defs.ok;
                }
            }
            else
            {
                rsp.apiError.sErrorMessage = "Couldent found the current location of the bus";
            }

            return rsp;
        }

        internal Models.busLocationModel.UpdateBusLocationResp UpdateBusLocation(Models.busLocationModel.UpdateBusLocationReq req)
        {
            Models.busLocationModel.UpdateBusLocationResp rsp = new Models.busLocationModel.UpdateBusLocationResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITBusLocation prevLocn = _storage.getLocationByBus(req.nBusFK);
            if (prevLocn != null && prevLocn.n > 0)
            {
                ITBusLocation busL = _storage.UpdateBusLocation(prevLocn, req.rLat, req.rLong, req.bStatus);
                if (busL != null && busL.n > 0)
                {
                    // rsp.n = iUser.n;   //Use if needed
                    rsp.n = busL.n;
                    rsp.apiError = ApiError_defs.ok;
                }
            else
            {
                rsp.apiError.sErrorMessage = "Couldent update the current location of the bus";
            }
            }
            else
            {
                rsp.apiError.sErrorMessage = "Couldent found the previous location of the bus";
            }
            return rsp;
        } 
    }
}