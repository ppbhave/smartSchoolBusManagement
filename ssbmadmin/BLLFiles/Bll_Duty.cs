using System.Collections.Generic;
namespace ssbmadmin.BLLfiles
{
    public class Bll_Duty   : ApiProvider
    {
        internal Models.DutyModal.GetDutyResp GetDuty (Models.DutyModal.GetDutyReq req )
        {
            Models.DutyModal.GetDutyResp rsp = new Models.DutyModal.GetDutyResp();
            rsp.apiErrors = new APIErrors();
            rsp.apiErrors = ApiError_defs.err_Invalid_Request;
            List<ITAttendentDuty> iDuty = _storage.GetDuty (req.nEntityId, req.day,req.month,req.year);
            if (iDuty != null && iDuty.Count > 0)
            {
                List<Models.DutyModal.dutyInfo> dutyInfo = new List<Models.DutyModal.dutyInfo>();
                Models.DutyModal.dutyInfo DI;
                foreach (ITAttendentDuty duty in iDuty)
                {
                    DI = new Models.DutyModal.dutyInfo();
                    DI.nDutyId = duty.n;
                    DI.dStampStart = duty.dStampStart;
                    DI.dStampStop = duty.dStampStop;
                    DI.sRegNo = _storage.GetBusById(duty.nBusFK).sRegNo;
                    dutyInfo.Add(DI);
                }
                rsp.apiErrors = ApiError_defs.ok;
                rsp.duties = dutyInfo;
            }
            else
            {
                rsp.apiErrors.sErrorMessage = "Unable to add user";
            }

            return rsp;
        }
        internal Models.DutyModal.SetEndStampResp SetEndStamp(Models.DutyModal.SetEndStampResp req)
        {
            Models.DutyModal.SetEndStampResp rsp = new Models.DutyModal.SetEndStampResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITAttendentDuty iDuty = _storage.SetEndStamp(req.n);
            if (iDuty != null && iDuty.n > 0)
            {
                rsp.n= iDuty.n;
                rsp.dStampStop = iDuty.dStampStop;
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to add Stamp";
            }
            return rsp;
        }
        
        internal Models.DutyModal.AddDutyResp AddDuty(Models.DutyModal.AddDutyReq req)
        {
            Models.DutyModal.AddDutyResp rsp = new Models.DutyModal.AddDutyResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITAttendentDuty iDuty = _storage.AddDuty(req.nBusFK,req.nEntityId);
            if (iDuty != null && iDuty.n > 0)
            {
                rsp.n = iDuty.n;
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to add Duty";
            }

            return rsp;
        }
    }
}