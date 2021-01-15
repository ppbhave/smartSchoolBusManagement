using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ssbmadmin.Controllers
{
    public class TAttendentDutyController : ApiController
    {
        [ActionName("AddDuty")]
        [HttpPost]
        public object AddDuty([FromBody]Models.DutyModal.AddDutyReq req)
        {
            BLLfiles.Bll_Duty bllRoute = new BLLfiles.Bll_Duty();
            Models.DutyModal.AddDutyResp resp = bllRoute.AddDuty(req);
            return (resp);
        }

        [ActionName("GetDuty")]
        [HttpPost]
        public object GetDuty([FromBody]Models.DutyModal.GetDutyReq req)
        {
            BLLfiles.Bll_Duty bllRoute = new BLLfiles.Bll_Duty();
            Models.DutyModal.GetDutyResp resp = bllRoute.GetDuty(req);
            return (resp);
        }
    }
}
