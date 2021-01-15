using System.Web.Http;

namespace ssbmadmin
{
    public class TAttendenceController : ApiController
    {
        [ActionName("GetAttendence")]
        [HttpPost]
        public object GetAttendence([FromBody]TAttendenceModal.GetAttendenceReq req)
        {
            BLL_Attendence bllAttendence = new BLL_Attendence();
            TAttendenceModal.GetAttendenceRsp resp = bllAttendence.GetAttendence(req);
            return (resp);
        }
       [ActionName("GetAttendenceByID")]
        [HttpPost]
        public object GetAttendenceByID([FromBody]TAttendenceModal.GetAttendenceByIdReq req)
        {
            BLL_Attendence bllAttendence = new BLL_Attendence();
            TAttendenceModal.GetAttendenceByIdResp resp = bllAttendence.GetAttendenceById(req);
            return (resp);
        }
        [ActionName("AddAttendencerecoord")]
        [HttpPost]
        public object AddAttendencerecoord([FromUri]TAttendenceModal.AddAttendenceRecordReq req)
        {
            BLL_Attendence bllAttendence = new BLL_Attendence();
            TAttendenceModal.AddAttendenceRecordResp resp = bllAttendence.AddAttendenceRecord(req);
            return (resp);
        }

        [ActionName("AddOutStamps")]
        [HttpPost]
        public object AddOutStamps([FromUri]TAttendenceModal.AddOutStampsReq req)
        {
            BLL_Attendence bllAttendence = new BLL_Attendence();
            TAttendenceModal.AddOutStampsRsp resp = bllAttendence.AddOutStamps(req);
            return (resp);
        }

    }
}