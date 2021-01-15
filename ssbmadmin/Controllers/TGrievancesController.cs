using System;

using System.Web.Http;

namespace ssbmadmin.Controllers
{
    public class TGrievancesController : ApiController
    {
        [ActionName("AddGrievance")]
        [HttpPost]
        public object AddGrievance([FromBody]Models.grievanceModel.AdGrievancereq req)
        {
            BLLFiles.BLL_Grievances bgrv = new BLLFiles.BLL_Grievances();
            Models.grievanceModel.AdGrievanceResp resp = bgrv.AddGrievance(req);
            return (resp);
        }
        [ActionName("GetAllGrievances")]
        [HttpGet]
        public object GetAllGrievances([FromUri]Models.grievanceModel.getAllGreivancesReq req)
        {
            BLLFiles.BLL_Grievances bgrv = new BLLFiles.BLL_Grievances();
            Models.grievanceModel.getAllGreivancesResp resp = bgrv.GetAllGrievances(req);
            return (resp);
        }

    }
}
    

