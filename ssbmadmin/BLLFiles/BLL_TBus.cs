using System.Collections.Generic;
namespace ssbmadmin
{
    public class BLL_TBus : ApiProvider
    {
        internal TBusModal.AddBusRsp AddBus(TBusModal.AddBusReq req)
        {
            TBusModal.AddBusRsp rsp = new TBusModal.AddBusRsp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITBus ibus = _storage.AddBus(req.sRegNo, req.jCapacity, true);

            if (ibus != null && ibus.n > 0)
            {
                rsp.nBusId = ibus.n;
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to add bus";
            }

            return rsp;
        }
        internal TBusModal.ModifyBusResp ModifyBus(TBusModal.ModifyBusReq req)
        {
            TBusModal.ModifyBusResp rsp = new TBusModal.ModifyBusResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITBus bus = _storage.GetBusById(req.nBusId);
            ITBus ibus = _storage.ModifyBus(bus,req.sRegNo, req.jCapacity, true);

            if (ibus != null )
            {
                rsp.nBusId = ibus.n;
                rsp.jCapacity = ibus.jCapacity;
                rsp.sRegNo = ibus.sRegNo;
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to add bus";
            }

            return rsp;
        }

        internal TBusModal.GetBusRsp GetBus(TBusModal.GetBusReq req)
        {
            TBusModal.GetBusRsp rsp = new TBusModal.GetBusRsp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            List<ITBus> liBuses = _storage.GetAllBus();
            List<TBusModal.BusInfo> liBusInfo = new List<TBusModal.BusInfo>();

            if (liBuses != null)
            {
                foreach (ITBus iBs in liBuses)
                {
                    TBusModal.BusInfo objBus = new TBusModal.BusInfo();
                    objBus.nBusId = iBs.n;
                    objBus.sRegNo = iBs.sRegNo;
                    objBus.jCapacity = iBs.jCapacity;
                    liBusInfo.Add(objBus);
                }

                rsp.liBus = liBusInfo;
                rsp.apiError = ApiError_defs.ok;
            }
            return rsp;
        }

        internal TBusModal.GetBusByIdResp GetBusById(TBusModal.GetBusByIdReq req)
        {
            TBusModal.GetBusByIdResp rsp = new TBusModal.GetBusByIdResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITBus iBus = _storage.GetBusById(req.nBusId);
            if (iBus != null)
            {
                rsp.sRegNo = iBus.sRegNo;
                rsp.jCapacity = iBus.jCapacity;
                rsp.apiError = ApiError_defs.ok;
            }
            return rsp;
        }
    }
}