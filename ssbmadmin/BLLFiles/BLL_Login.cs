

namespace ssbmadmin.Bllfiles
{
    public class BLL_Login : ApiProvider  
    {
        internal Models.LoginModel.loginResp GetCred(Models.LoginModel.loginReq req)
        {
            Models.LoginModel.loginResp rsp = new Models.LoginModel.loginResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITUser iUser = _storage.login(req.sEmail, req.sPassword);
            if (iUser != null && iUser.n > 0)
            {
               // rsp.n = iUser.n;   //Use if needed
                rsp.nEntityId = iUser.nEntityFK;
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Invalid Username or Password";
            }

            return rsp;
        }

        internal Models.LoginModel.setCredResp setCred(Models.LoginModel.setCredReq req)
        {
            Models.LoginModel.setCredResp rsp = new Models.LoginModel.setCredResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITUser iUser = _storage.setCred(req.sEmail, req.sPassword,req.nEntityFK);
            if (iUser != null && iUser.n > 0)
            {
                // rsp.n = iUser.n;   //Use if needed
                rsp.nEntityId = iUser.n;
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Invalid Username or Password";
            }

            return rsp;
        }
        internal Models.LoginModel.ModifyUserresp ModifyUser(Models.LoginModel.ModifyUserreq req)
        {
            Models.LoginModel.ModifyUserresp rsp = new Models.LoginModel.ModifyUserresp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            if (req.iuser.sEmail != req.Email)
            {
                ITEntity ie = _storage.GetEntityByID(req.iuser.nEntityFK);
                ITEntity entity = _storage.UpdateEntity(ie,ie.sFname, ie.sMname, ie.sMother, ie.sLname,ie.sDOB, ie.jAge, ie.sEmail1, ie.sContact1, ie.sHouse, ie.sLocality, ie.sAddressLine, ie.sTaluka, ie.sDistrict,ie.sState, ie.sIdProof, ie.sIdProofPath, true);
                if(entity.sEmail1!=req.Email)
                {
                    rsp.apiError = ApiError_defs.err_Nesting_Faliled;
                    return null;
                }
            }
            ITUser User = _storage.ModifyUser(req.iuser,req.Email, req.password);
            if (User != null )
            {
                // rsp.n = iUser.n;   //Use if needed
                rsp.iuser = User;
                rsp.apiError = ApiError_defs.ok;
                

            }
            else
            {
                rsp.apiError.sErrorMessage = "Invalid Username or Password";
            }

            return rsp;
        }
    }
}