using System.Collections.Generic;
namespace ssbmadmin.Bllfiles
{
    
    public class BLL_Mapping : ApiProvider
    {  //Guardian models
          internal Models.GuardianModel.MapGuardianResp MapParent(Models.GuardianModel.MapGuardianReq req)
            {
                Models.GuardianModel.MapGuardianResp rsp = new Models.GuardianModel.MapGuardianResp();
                rsp.apiError = new APIErrors();
            bool success = true;
            foreach (long student in req.ListudentPK)
            {
                rsp.apiError.sErrorMessage = "Mapping Successful";
                ITGuardian iGuard = _storage.MapParent(student, req.parentPK);
                //Added Entity
                if (iGuard != null && iGuard.n > 0)
                {
                    //nothing

                }
                else
                {
                    success = false;
                }if(!success)rsp.apiError.sErrorMessage = "Unable to add Relation. Maybe this relation is pre-existing.";else rsp.apiError.jErrorVal = 0;
            
            }
                return rsp;
            }

        internal Models.GuardianModel.editGuardianResp editGuardian(Models.GuardianModel.editGuardianReq req)
        {
            Models.GuardianModel.editGuardianResp rsp = new Models.GuardianModel.editGuardianResp();
            rsp.apiError = new APIErrors();
            ITGuardian iGuard = _storage.editGuardian(_storage.GetGuardian(req.nGuardianId), req.nStudentPK, req.nparentPK, req.bStatus);
            //Added Entity
            if (iGuard != null && iGuard.n > 0)
            {
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to delete Relation";
            }
            return rsp;
        }


        internal Models.GuardianModel.GetGuardianResp GetParent(Models.GuardianModel.GetGuardianReq req)
        {
            Models.GuardianModel.GetGuardianResp rsp = new Models.GuardianModel.GetGuardianResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Nesting_Faliled;
            ITGuardian IGuard = _storage.GetParent(req.studentPK);
            //Added Entity
            if (IGuard != null && IGuard.n > 0)
            {
                rsp.parent = new Models.GuardianModel.Relative();
                rsp.apiError = ApiError_defs.ok;
                ITEntity parent= _storage.GetEntityByID(IGuard.nEntityFKParent);
                rsp.parent.sFname = parent.sFname;
                rsp.parent.sMname = parent.sMname;
                rsp.parent.sLname = parent.sLname;
                rsp.parent.nRelativeId = parent.n;
                rsp.parent.nRecordId = IGuard.n;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to get parent";
            }
            return rsp;
        }
  /*     internal Models.GuardianModel.GetParentStudentListResp GetParentStudentList(Models.GuardianModel.GetParentStudentListReq req)
        {
            Models.GuardianModel.GetParentStudentListResp rsp = new Models.GuardianModel.GetParentStudentListResp();
            
            List<ITGuardian> IGuard = _storage.GetParentStudentList();
            List<Models.GuardianModel.LiGuardianRelation> Relation = new List<Models.GuardianModel.LiGuardianRelation>();
            Models.GuardianModel.LiGuardianRelation PS;
            if (IGuard!=null)
            {
                foreach(ITGuardian ig in IGuard)
                {
                    PS = new Models.GuardianModel.LiGuardianRelation();
                    ITEntity e = _storage.GetEntityByID(ig.nEntityFKParent);
                    PS.sPName = e.sFname + " " + e.sMname + " " + e.sLname;
                    e = _storage.GetEntityByID(ig.nEntityFKStudent);
                    PS.sSName= e.sFname + " " + e.sMname + " " + e.sLname;
                    PS.sClass = _storage.GetDetails(ig.nEntityFKStudent).sClass;
                    PS.nGuardianId = ig.n;
                    Relation.Add(PS);
                }
            }
            if (Relation.Count > 0)
            { rsp.LiGuardian = Relation; rsp.apiEror.jErrorVal = 0; }else { rsp.apiEror.sErrorMessage = "Cant retrieve the list"; }
            return rsp;
        }       */

        internal Models.GuardianModel.GetChildrenResp GetChildren(Models.GuardianModel.GetChildrenReq req)
        {
            Models.GuardianModel.GetChildrenResp rsp = new Models.GuardianModel.GetChildrenResp();
            rsp.apiError = new APIErrors();
            rsp.apiError.jErrorVal = 0;
            List<ITGuardian> LiChildren = _storage.GetChildren(req.nEntityFKParent);
            ITEnityDetails detail;
            ITEntity entity;
            rsp.LiChildren = new List<Models.GuardianModel.Relative>(); 
            Models.GuardianModel.Relative ward;
            //Added Entity
            if (LiChildren.Count>0)
            {  foreach (ITGuardian child in LiChildren)
                {
                    entity = _storage.GetEntityByID(child.nEntityFKStudent);
                    detail = detail = _storage.GetDetails(child.nEntityFKStudent);
                    ward = new Models.GuardianModel.Relative();
                    ward.nRecordId = child.n;
                    ward.nRelativeId = child.nEntityFKStudent; ward.sFname = entity.sFname; ward.sMname = entity.sMname; ward.sLname = entity.sLname; ward.sClass = detail.sClass;
                    rsp.LiChildren.Add(ward);
                }
                rsp.apiError.jErrorVal = 0;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to get Children";
            }
            return rsp;
        }

        //DriverBus models

        internal Models.DriverBus.MapBustoDriverResp MapDriver(Models.DriverBus.MapBustoDriverReq req)
        {
            Models.DriverBus.MapBustoDriverResp rsp = new Models.DriverBus.MapBustoDriverResp();
            ITDriver_Bus driverBus = _storage.MapDriver(req.nEntityId, req.nBusFK);
            rsp.apiError = new APIErrors();
            //Added Entity
            if (driverBus != null && driverBus.n > 0)
            {
                rsp.apiError = ApiError_defs.ok;
                rsp.n = driverBus.n;
            }
            else
            {
                //rsp.apiError = ApiError_defs.err_Invalid_Request;
                driverBus = _storage.editBusDriver(_storage.getBusOfDriver(req.nEntityId), req.nEntityId, req.nBusFK,true);
                if (driverBus != null && driverBus.n > 0)
                {
                    rsp.apiError = ApiError_defs.ok;
                    rsp.apiError.sErrorMessage = "Another driver to Bus allocation needed to manipulate. Mapping Successful";
                    rsp.n = driverBus.n;
                }
                rsp.apiError.sErrorMessage = "Unable to map driver. Bus may be already assigned";
            }
            return rsp;
        }

        internal Models.DriverBus.getDriverResp GetDriver(Models.DriverBus.getDriverReq req)
        {
            Models.DriverBus.getDriverResp rsp = new Models.DriverBus.getDriverResp();
            ITDriver_Bus driverBus = _storage.GetDriver(req.nBusFK);
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            //Added Entity
            if (driverBus!=null && driverBus.n > 0)
            {
                rsp.apiError = ApiError_defs.ok;
                ITEntity driver = _storage.GetEntityByID(driverBus.nEntityFKDrvier);
                rsp.DriverBusId = driverBus.n;
                rsp.sFname = driver.sFname;
                rsp.sMname = driver.sMname;
                rsp.sLname = driver.sLname;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to get driver";
            }
            return rsp;
        }

        internal Models.DriverBus.editBusDriverresp editBusDriver(Models.DriverBus.editBusDriverreq req)
        {
            Models.DriverBus.editBusDriverresp rsp = new Models.DriverBus.editBusDriverresp();
            ITDriver_Bus driverBus = _storage.GetDriverBusbyId(req.DriverBusId);
            rsp.apiError = new APIErrors();
            ITDriver_Bus driverBus1 = _storage.editBusDriver(driverBus,req.nEntityId,req.nBusFK,req.bStatus);
            //Added Entity
            if (driverBus1 != null && driverBus1.n > 0 && driverBus1.nBusFK== req.nBusFK&&driverBus1.nEntityFKDrvier==req.nEntityId)
            {
                rsp.apiError = ApiError_defs.ok;
                rsp.nEntityId = driverBus1.nEntityFKDrvier; 
                ITEntity driver = _storage.GetEntityByID(driverBus1.nEntityFKDrvier);
                rsp.sFname = driver.sFname;
                rsp.sMname = driver.sMname;
                rsp.sLname = driver.sLname;
                ITBus bus = _storage.GetBusById(driverBus1.nBusFK);
                rsp.sRegNo = bus.sRegNo;
                rsp.nBusId = bus.n;
            }
            else
            {
                rsp.apiError = ApiError_defs.err_Invalid_Request;
                rsp.apiError.sErrorMessage = "Unable to Update";
            }
            return rsp;
        }

        internal Models.DriverBus.getBusOfDriverResp getBusOfDriver(Models.DriverBus.getBusOfDriverReq req)
        {
            Models.DriverBus.getBusOfDriverResp rsp = new Models.DriverBus.getBusOfDriverResp();
            ITDriver_Bus driverBus = _storage.getBusOfDriver(req.nEntityId);
            rsp.apiError = new APIErrors();
            //Added Entity
            if (driverBus != null && driverBus.n > 0)
            {
                rsp.apiError = ApiError_defs.ok;
                ITBus bus = _storage.GetBusById(driverBus.nBusFK);
                rsp.nDriverBusId = driverBus.n;
                rsp.sRegNo = bus.sRegNo;
            }
            else
            {
                rsp.apiError = ApiError_defs.err_Invalid_Request;
                rsp.apiError.sErrorMessage = "Unable to get bus";
            }
            return rsp;
        }

        internal Models.DriverBus.GetListDriverBusresp GetListDriver(Models.DriverBus.GetListDriverBusReq req)
        {
            Models.DriverBus.GetListDriverBusresp rsp = new Models.DriverBus.GetListDriverBusresp();
            List<ITDriver_Bus> db= _storage.GetListDriverBus();
            rsp.apiError = new APIErrors();
            //Added Entity
            if (rsp.ListDriverBus != null)
            {
                rsp.apiError = ApiError_defs.ok;
            }            
            else            {
                rsp.apiError.sErrorMessage = "Unable to get Bus Driver allocations";
            }
            return rsp;
        }

        //studentBus model
        internal Models.Stud_BusModel.MapStudBusResp MapStudent2Bus(Models.Stud_BusModel.MapStudBusReq req)
        {
            Models.Stud_BusModel.MapStudBusResp rsp = new Models.Stud_BusModel.MapStudBusResp();
            ITStud_Bus studBus;bool sall=true;
            APIErrors apiError = new APIErrors();
            foreach (long entity in req.nEntityId)
            {
                studBus = _storage.MapStudent2Bus(req.nBusFKup, req.nBusFKdown,entity,req.nStopUp,req.nStopDown );
                if (studBus.n > 0)
                {

                }
                else
                {
                    sall = false;
                }
            }
            if (!sall)
            { apiError.sErrorMessage = "Not all Mappings successful"; apiError.jErrorVal = 1000; }
            else { apiError.jErrorVal = 0; apiError.sErrorMessage = "Mappings successful"; }
                //Added Entity
                rsp.apiError = apiError;
            return rsp;
        }
        internal Models.Stud_BusModel.GetBusStudResp GetBus2stud(Models.Stud_BusModel.GetBusStudReq req)
        {
            Models.Stud_BusModel.GetBusStudResp rsp = new Models.Stud_BusModel.GetBusStudResp();
            ITStud_Bus studBus = _storage.GetBus2stud(req.nEntityId);
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITStops stop;
            //Added Entity
            if (studBus!=null&&studBus.n > 0)
            {
                rsp.apiError = ApiError_defs.ok;
                rsp.nBusFKdown = studBus.nBusFKdown;
                rsp.nBusFKup = studBus.nBusFKup;
                rsp.nRecordId = studBus.n; 
                rsp.nStopUp = studBus.nStopUp;
                 stop = _storage.getStopById(studBus.nStopUp);
                rsp.upLatLong = stop.rStopLat + "|" + stop.rStopLong;
                 stop = _storage.getStopById(studBus.nStopDown);
                rsp.downLatLong = stop.rStopLat + "|" + stop.rStopLong;
                rsp.nStopDown = studBus.nStopDown;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to map bus to student";
            }
            return rsp;
        }

        internal Models.Stud_BusModel.updateStudBusResp updateStudBus(Models.Stud_BusModel.updateStudBusreq req)
        {
            Models.Stud_BusModel.updateStudBusResp rsp = new Models.Stud_BusModel.updateStudBusResp();
            
            APIErrors apiError = new APIErrors();
            ITStud_Bus studBus = _storage.GetBus2stud(req.nEntityId);

            if (studBus != null || studBus.n > 0)
            {
                studBus = _storage.updateStudBus(studBus, req.nEntityId, req.nBusFKup, req.nBusFKdown, req.nStopUp, req.nStopDown);
            }
                if (studBus.nBusFKup== req.nBusFKup&& studBus.nBusFKdown==req.nBusFKdown && studBus.nStopUp==req.nStopUp && studBus.nStopDown==req.nStopDown)
            { apiError.jErrorVal = 0; apiError.sErrorMessage = "Mappings successful"; }
            else {  apiError.sErrorMessage = "Not all Mappings successful"; apiError.jErrorVal = 1000;}

            rsp.apiError = apiError;
            return rsp;
        }


    }
}