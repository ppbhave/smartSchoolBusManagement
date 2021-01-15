using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ssbmadmin.Controller
{
    public class TBusController : ApiController
    {
        [ActionName("AddBus")]
        [HttpPost]
        public object AddBus([FromBody]TBusModal.AddBusReq req)
        {
            BLL_TBus bllTBus = new BLL_TBus();
             TBusModal.AddBusRsp resp = bllTBus.AddBus(req);
            return (resp);
        }
        
        [ActionName("GetBus")]
        [HttpGet]
        public object GetBus([FromUri]TBusModal.GetBusReq req)
        {
            BLL_TBus bllTBus = new BLL_TBus();
            TBusModal.GetBusRsp resp = bllTBus.GetBus(req);
            return (resp);
        }

        [ActionName("GetBusById")]
        [HttpPost]
        public object GetBusById([FromBody]TBusModal.GetBusByIdReq req)
        {
            BLL_TBus bllTBus = new BLL_TBus();
            TBusModal.GetBusByIdResp resp = bllTBus.GetBusById(req);
            return (resp);
        }


        [ActionName("GetBus2stud")]
        [HttpPost]
        public object GetBus2stud([FromBody]Models.Stud_BusModel.GetBusStudReq req)
        {
            Models.Stud_BusModel.GetBusStudResp resp = new Bllfiles.BLL_Mapping().GetBus2stud(req);
            return (resp);
        }

        [ActionName("ModifyBus")]
        [HttpPost]
        public object ModifyBus([FromBody]TBusModal.ModifyBusReq req)
        {
            BLL_TBus bllTBus = new BLL_TBus();
            TBusModal.ModifyBusResp resp = bllTBus.ModifyBus(req);
            return (resp);
        }

        [ActionName("AddBusLocation")]
        [HttpPost]
        public object AddBusLocation([FromBody]Models.busLocationModel.AddBusLocationReq req)
        {
            Bllfiles.BLL_BusLocation bgrv = new Bllfiles.BLL_BusLocation();
            Models.busLocationModel.AddBusLocationResp resp = bgrv.AddBusLocation(req);
            return (resp);
        }

        [ActionName("UpdateBusLocation")]
        [HttpPost]
        public object UpdateBusLocation([FromBody]Models.busLocationModel.UpdateBusLocationReq req)
        {
            Bllfiles.BLL_BusLocation bgrv = new Bllfiles.BLL_BusLocation();
            Models.busLocationModel.UpdateBusLocationResp resp = bgrv.UpdateBusLocation(req);
            return (resp);
        }

        [ActionName("getBusLocation")]
        [HttpPost]
        public object getBusLocation([FromBody]Models.busLocationModel.getBusLocationReq req)
        {
            Bllfiles.BLL_BusLocation bgrv = new Bllfiles.BLL_BusLocation();
            Models.busLocationModel.getBusLocationResp resp = bgrv.getBusLocation(req);
            return (resp);
        }

        [ActionName("getBusLocationArray")]
        [HttpPost]
        public object getBusLocationArray([FromBody]Models.busLocationModel.getBusLocationArrayReq req)
        {
            Bllfiles.BLL_BusLocation bgrv = new Bllfiles.BLL_BusLocation();
            Models.busLocationModel.getBusLocationArrayResp resp = bgrv.getBusLocationArray(req);
            return (resp);
        }
    }
}
