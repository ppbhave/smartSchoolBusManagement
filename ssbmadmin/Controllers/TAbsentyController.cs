using System.Web.Http;

namespace ssbmadmin
{
    public class TAbsentyController : ApiController
    {

        [ActionName("GetAbsenty")]
        [HttpPost]
        public object GetAbsenty([FromUri]TAbsentyModal.GetAbsentyReq req)
        {
            BLL_Absenty bllAbsenty = new BLL_Absenty();
            TAbsentyModal.GetAbsentyRsp resp = bllAbsenty.GetAbsenty(req);
            return (resp);
        }
        [ActionName("AddAbsenty")]
        [HttpPost]
        public object AddAbsenty([FromUri]TAbsentyModal.AddAbsentyReq req)
        {
            BLL_Absenty bllAbsenty = new BLL_Absenty();
            TAbsentyModal.AddAbsentyRsp resp = bllAbsenty.AddAbsenty(req);
            return (resp);
        }
    }
}