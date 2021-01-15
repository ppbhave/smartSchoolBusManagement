using System.Collections.Generic;
namespace ssbmadmin
{
    public class BLL_Attendence : ApiProvider
    {
        internal TAttendenceModal.AddAttendenceRecordResp AddAttendenceRecord(TAttendenceModal.AddAttendenceRecordReq req)
        {
            TAttendenceModal.AddAttendenceRecordResp rsp = new TAttendenceModal.AddAttendenceRecordResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITAttendence ia = _storage.AddAttendence(req.nEntityId, req.nBusFK, req.rInLat, req.rInLong);
            if(ia!=null && ia.n>0)
            { rsp.apiError = ApiError_defs.ok;
            rsp.nAttendenceId = ia.n;
            }
            return rsp;
        }

        internal TAttendenceModal.AddOutStampsRsp AddOutStamps(TAttendenceModal.AddOutStampsReq req)
        {
            TAttendenceModal.AddOutStampsRsp rsp = new TAttendenceModal.AddOutStampsRsp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            List<ITAttendence> ia = _storage.GetAttendenceById(req.nEntityId, req.day, req.month, req.year);
            if (ia != null && ia.Count > 0)
            {
                foreach (ITAttendence attendence in ia)
                {
                    if (attendence.rOutLat <= 0)
                    {
                        ITAttendence att = _storage.AddOutStamps(attendence, req.rOutLat, req.rOutLong);
                        rsp.apiError = ApiError_defs.ok;
                    }
                }
            }
            return rsp;
        }


        internal TAttendenceModal.GetAttendenceRsp GetAttendence(TAttendenceModal.GetAttendenceReq req)
        {
            TAttendenceModal.GetAttendenceRsp rsp = new TAttendenceModal.GetAttendenceRsp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            List<ITAttendence> liAttendence = _storage.GetAllAttendence(req.nBusId,req.day,req.month,req.year);
            List<TAttendenceModal.AttendenceInfo> liAttendenceInfo = new List<TAttendenceModal.AttendenceInfo>();
            ITEntity entity;
            ITBus bus;
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            if (liAttendence != null && liAttendence.Count > 0)
            {
                foreach (ITAttendence iAtt in liAttendence)
                {
                    TAttendenceModal.AttendenceInfo objAttendence = new TAttendenceModal.AttendenceInfo();
                    entity = _storage.GetEntityByID(iAtt.nEntityFK);
                    bus = _storage.GetBusById(iAtt.nBusFK);
                    objAttendence.n = iAtt.n;
                    objAttendence.nEntityId = iAtt.nEntityFK;
                    objAttendence.sFname = entity.sFname;
                    objAttendence.sMname = entity.sMname;
                    objAttendence.sLname = entity.sLname;
                    objAttendence.nBusFK = iAtt.nBusFK;
                    objAttendence.sRegNo = bus.sRegNo;
                    objAttendence.rInLat = iAtt.rInLat;
                    objAttendence.rInLong = iAtt.rInLong;
                    objAttendence.rOutLat = iAtt.rOutLat;
                    objAttendence.rOutLong = iAtt.rOutLong;
                    objAttendence.dStampIn = iAtt.dStampIn;
                    objAttendence.dStampOut = iAtt.dStampOut;
                    liAttendenceInfo.Add(objAttendence);
                }
                rsp.liAttendence = liAttendenceInfo;
                rsp.apiError = ApiError_defs.ok;
            }
            else { rsp.apiError.sErrorMessage = "NO record found"; }
            return rsp;
        }

        internal TAttendenceModal.GetAttendenceByIdResp GetAttendenceById(TAttendenceModal.GetAttendenceByIdReq req)
        {
            TAttendenceModal.GetAttendenceByIdResp rsp = new TAttendenceModal.GetAttendenceByIdResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            List<ITAttendence> liAttendence = _storage.GetAttendenceById(req.nEntityId, req.day,req.month,req.year);
            List<TAttendenceModal.AttendenceInfo> liAttendenceInfo = new List<TAttendenceModal.AttendenceInfo>();
            ITEntity entity;
            ITBus bus;

            if (liAttendence != null && liAttendence.Count>0)
            {
                foreach (ITAttendence iAtt in liAttendence)
                {
                    TAttendenceModal.AttendenceInfo objAttendence = new TAttendenceModal.AttendenceInfo();
                    entity = _storage.GetEntityByID(iAtt.nEntityFK);
                    bus = _storage.GetBusById(iAtt.nBusFK);
                    objAttendence.n = iAtt.n;
                    objAttendence.nEntityId = iAtt.nEntityFK;
                    objAttendence.sFname = entity.sFname;
                    objAttendence.sMname = entity.sMname;
                    objAttendence.sLname = entity.sLname;
                    objAttendence.nBusFK = iAtt.nBusFK;
                    objAttendence.sRegNo = bus.sRegNo;
                    objAttendence.rInLat = iAtt.rInLat;
                    objAttendence.rInLong = iAtt.rInLong;
                    objAttendence.rOutLat = iAtt.rOutLat;
                    objAttendence.rOutLong = iAtt.rOutLong;
                    objAttendence.dStampIn = iAtt.dStampIn;
                    objAttendence.dStampOut = iAtt.dStampOut;
                    liAttendenceInfo.Add(objAttendence);
                }
                rsp.liAttendence = liAttendenceInfo;
                rsp.apiError = ApiError_defs.ok;
            }
            return rsp;
        }            
        }

    }
