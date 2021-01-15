using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ssbmadmin.BLLFiles 
{
    public class BLL_Grievances: ApiProvider
    {
        internal Models.grievanceModel.AdGrievanceResp AddGrievance(Models.grievanceModel.AdGrievancereq req)
        {
            Models.grievanceModel.AdGrievanceResp rsp = new Models.grievanceModel.AdGrievanceResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;

            ITGrievances itg = _storage.AddGrievance(req.nEntityId, req.content);
            if (itg != null && itg.n > 0)
            {
                rsp.nEntityId = itg.n;
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to post grievance";
            }
            return rsp;
        }

        internal Models.grievanceModel.getAllGreivancesResp GetAllGrievances(Models.grievanceModel.getAllGreivancesReq req)
        {
            Models.grievanceModel.getAllGreivancesResp rsp = new Models.grievanceModel.getAllGreivancesResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            Models.grievanceModel.grievances g;
            List<ITGrievances> itg = _storage.viewAllGrievances();
            rsp.grievances= new List<Models.grievanceModel.grievances>();
            if (itg != null && itg.Count > 0)
            {
                itg=itg.OrderByDescending(x => x.dStamp).ToList();
                foreach (ITGrievances gr in itg)
                {
                    g = new Models.grievanceModel.grievances();
                    g.nEntityId = gr.nEntityFK;
                    g.content = gr.content;
                    g.dStamp = gr.dStamp;
                    rsp.grievances.Add(g);
                }
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to get some or all grievances";
            }
            return rsp;
        }

    }
}