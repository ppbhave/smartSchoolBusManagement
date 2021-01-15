 
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ssbmadmin.Controllers
{
    public class TEntityController : ApiController
    {
       
        [ActionName("AddCascadeEntity")]
        [HttpPost]
        public object AddCascadeTriple([FromBody]Models.EntityModel.AddCascadeEntityReq req)
        {
            Bllfiles.Bll_entity bllentity = new Bllfiles.Bll_entity();
            Models.EntityModel.AddCascadeEntityResp resp = bllentity.AddCascadeEntity(req);
            return (resp);
        }

        [ActionName("GetEntityById")]
        [HttpPost]
        public object GetEntityById([FromBody]Models.EntityModel.GetEntityByIdReq req)
        {
            Bllfiles.Bll_entity bllentity = new Bllfiles.Bll_entity();
            Models.EntityModel.GetEntityByIdResp resp = bllentity.GetEntityByID(req);
             return (resp);
        }

        [ActionName("getModalFormBasicEntity")]
        [HttpPost]
        public object getModalFormBasicEntity([FromBody]Models.EntityModel.getModalFormBasicEntityReq req)
        {
            Bllfiles.Bll_entity bllentity = new Bllfiles.Bll_entity();
            Models.EntityModel.getModalFormBasicEntityResp resp = bllentity.getModalFormBasicEntity(req);
            return (resp);
        }

        [ActionName("GetEntityList")]
        [HttpPost]
        public object GetEntityList([FromBody]Models.EntityModel.GetEntityListReq req)
        {
            Bllfiles.Bll_entity bllentity = new Bllfiles.Bll_entity();
            Models.EntityModel.GetEntityListResp resp = bllentity.GetEntityList(req);
            return (resp);
        }

        [ActionName("UpdateEntity")]
        [HttpPost]
        public object UpdateEntity([FromBody]Models.EntityModel.UpdateEntityReq req)
        {
            Bllfiles.Bll_entity bllentity = new Bllfiles.Bll_entity();
            Models.EntityModel.UpdateEntityResp resp = bllentity.UpdateEntity(req);
            return (resp);

        }


        //Parent student relationship
        [ActionName("MapParent")]
        [HttpPost]
        public object MapParent([FromBody]Models.GuardianModel.MapGuardianReq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.GuardianModel.MapGuardianResp resp = bllentity.MapParent(req);
            return (resp);

        }
        [ActionName("GetParent")]
        [HttpPost]
        public object GetParent([FromBody]Models.GuardianModel.GetGuardianReq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.GuardianModel.GetGuardianResp resp = bllentity.GetParent(req);
            return (resp);
        }

        [ActionName("GetChildren")]
        [HttpPost]
        public object GetChildren([FromBody]Models.GuardianModel.GetChildrenReq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.GuardianModel.GetChildrenResp resp = bllentity.GetChildren(req);
            return (resp);
        }

        [ActionName("editGuardian")]
        [HttpPost]
        public object editGuardian([FromBody]Models.GuardianModel.editGuardianReq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.GuardianModel.editGuardianResp resp = bllentity.editGuardian(req);
            return (resp);
        }
        
        //Driver Bus
       [ActionName("MapDriver")]
        [HttpPost]
        public object MapDriver([FromBody]Models.DriverBus.MapBustoDriverReq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.DriverBus.MapBustoDriverResp resp = bllentity.MapDriver(req);
            return (resp);
        }

        [ActionName("GetDriver")]
        [HttpPost]
        public object GetDriver([FromBody]Models.DriverBus.getDriverReq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.DriverBus.getDriverResp resp = bllentity.GetDriver(req);
            return (resp);
        }

        [ActionName("getBusOfDriver")]
        [HttpPost]
        public object getBusOfDriver([FromBody]Models.DriverBus.getBusOfDriverReq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.DriverBus.getBusOfDriverResp resp = bllentity.getBusOfDriver(req);
            return (resp);
        }

        [ActionName("GetListDriverBus")]
        [HttpGet]
        public object GetListDriverBus([FromUri]Models.DriverBus.GetListDriverBusReq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.DriverBus.GetListDriverBusresp resp = bllentity.GetListDriver(req);
            return (resp);
        }

        [ActionName("editBusDriver")]
        [HttpPost]
        public object editBusDriver([FromBody]Models.DriverBus.editBusDriverreq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.DriverBus.editBusDriverresp resp = bllentity.editBusDriver(req);
            return (resp);
        }

        //studnet bus
        [ActionName("MapStudBus")]
        [HttpPost]
        public object MapBustoStuent([FromBody]Models.Stud_BusModel.MapStudBusReq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.Stud_BusModel.MapStudBusResp resp = bllentity.MapStudent2Bus(req);
            return (resp);
        }

        [ActionName("GetBusStud")]
        [HttpPost]
        public object GetBusStud([FromBody]Models.Stud_BusModel.GetBusStudReq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.Stud_BusModel.GetBusStudResp resp = bllentity.GetBus2stud(req);
            return (resp);
        }
        [ActionName("MapStudent2Bus")]
        [HttpPost]
        public object MapStudent2Bus([FromBody]Models.Stud_BusModel.MapStudBusReq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.Stud_BusModel.MapStudBusResp resp = bllentity.MapStudent2Bus(req);
            return (resp);
        }
        [ActionName("updateStudBus")]
        [HttpPost]
        public object updateStudBus([FromBody]Models.Stud_BusModel.updateStudBusreq req)
        {
            Bllfiles.BLL_Mapping bllentity = new Bllfiles.BLL_Mapping();
            Models.Stud_BusModel.updateStudBusResp resp = bllentity.updateStudBus(req);
            return (resp);
        }
    }
}
