using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ssbmadmin
{
    public class Bll_Details : ApiProvider
    {
        internal Models.DetailModel.AddDetailRsp AddDetail(Models.DetailModel.AddDetailReq req)
        {
            Models.DetailModel.AddDetailRsp rsp = new Models.DetailModel.AddDetailRsp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;

            ITEnityDetails iEntityD =_storage.AddDetail(req.nEntityId, req.sContact2, req.sEmail2, req.sClass,req.sLiscence,req.sLiscencePath,true);
            if (iEntityD != null && iEntityD.n > 0)
            {
                rsp.nEntityId = iEntityD.n;
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to add some or all Detail";
            }

            return rsp;
        }

        internal Models.DetailModel.GetDetailsResp GetDetails(Models.DetailModel.GetDetailsReq req)
        {
            Models.DetailModel.GetDetailsResp rsp = new Models.DetailModel.GetDetailsResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;

            ITEnityDetails iEntityD = _storage.GetDetails(req.nEntityId);
            if (iEntityD != null && iEntityD.n > 0)
            {
                rsp.sEmail2 = iEntityD.sEmail2;
                rsp.sClass = iEntityD.sClass;
                rsp.sContact2 = iEntityD.sContact2;
                rsp.sLiscence = iEntityD.sLiscence;
                rsp.sLiscencePath = iEntityD.sLiscencePath;
               
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to get some or all Detail";
            }

            return rsp;
        }
    }
}