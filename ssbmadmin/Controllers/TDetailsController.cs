using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ssbmadmin.Controllers
{
    public class TDetailsController : ApiController
    {
        [ActionName("AddDetails")]
        [HttpPost]
        public object AddDetails([FromBody]Models.DetailModel.AddDetailReq req)
        {
            Bll_Details bllentity = new Bll_Details();
            Models.DetailModel.AddDetailRsp resp = bllentity.AddDetail(req);
            return (resp);
        }

        [ActionName("GetDetailById")]
        [HttpPost]
        public object GetDetailById([FromBody]Models.DetailModel.GetDetailsReq req)
        {
            Bll_Details bllentity = new Bll_Details();
            Models.DetailModel.GetDetailsResp resp = bllentity.GetDetails(req);
            return (resp);
        }

    }
}
