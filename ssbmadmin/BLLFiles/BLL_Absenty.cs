using System.Collections.Generic;
namespace ssbmadmin
{
    public class BLL_Absenty : ApiProvider
    {
        internal TAbsentyModal.GetAbsentyRsp GetAbsenty(TAbsentyModal.GetAbsentyReq req)
        {
            TAbsentyModal.GetAbsentyRsp rsp = new TAbsentyModal.GetAbsentyRsp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;

            List<ITAbsenty> liAbsenty = _storage.GetAllAbsenty(req.day,req.month,req.year);
            List<TAbsentyModal.AbsentyInfo> liAbsentyInfo = new List<TAbsentyModal.AbsentyInfo>();

            if (liAbsenty != null)
            {
                foreach (ITAbsenty iAb in liAbsenty)
                {
                    TAbsentyModal.AbsentyInfo objAbsenty = new TAbsentyModal.AbsentyInfo();
                    objAbsenty.n = iAb.n;
                    objAbsenty.nEntityFk = iAb.nEntityFK;
                    objAbsenty.nBusFk = iAb.nBusFK;
                    objAbsenty.bStatus = iAb.bStatus;

                    liAbsentyInfo.Add(objAbsenty);
                }

                rsp.liAbsenty = liAbsentyInfo;
                rsp.apiError = ApiError_defs.ok;
            }
            return rsp;
        }

        internal TAbsentyModal.AddAbsentyRsp AddAbsenty(TAbsentyModal.AddAbsentyReq req)
        {
            TAbsentyModal.AddAbsentyRsp rsp = new TAbsentyModal.AddAbsentyRsp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;

            ITAbsenty absenty = _storage.AddAbsenty(req.nEntityFk, req.nBusFk);

            if (absenty != null && absenty.n>0)
            {
                rsp.nAbsenty = absenty.n;
                rsp.apiError = ApiError_defs.ok;
            }
            return rsp;
        }
    }
}