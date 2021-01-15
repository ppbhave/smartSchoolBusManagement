using System;
using System.Collections.Generic;
using ssbmadmin.Models;

namespace ssbmadmin.Bllfiles
{
    public class Bll_entity : ApiProvider  
    {
        internal EntityModel.UpdateEntityResp UpdateEntity(EntityModel.UpdateEntityReq req)
            EntityModel.UpdateEntityResp rsp = new EntityModel.UpdateEntityResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITEntity tentity = _storage.GetEntityByID(req.nEntityId);
            ITEnityDetails tDetails = _storage.GetDetails(req.nEntityId);
            ITEntity Entity= _storage.UpdateEntity(tentity,req.sFname, req.sMname, req.sMother, req.sLname,req.sDOB, req.jAge, req.sEmail1, req.sContact1, req.sHouse, req.sLocality, req.sAddressLine, req.sTaluka, req.sDistrict,req.sState, req.sIdProof, req.sIdProofPath, true);
            ITEnityDetails Details = _storage.UpdateDetail(tDetails, req.sContact2, req.sEmail2, req.sClass, req.sLiscence, req.sLiscencePath, true);
            //Added Entity
            if (Entity != null && Details!=null)
            {
                if (Entity.sEmail1 != req.sEmail1)//check whether email is changed
                {
                    ITUser modUser = _storage.getUser(tentity.n);
                    modUser = _storage.ModifyUser(modUser, req.sEmail1, null);
                    if (modUser != null)
                    {
                        rsp.apiError = ApiError_defs.ok;
                        rsp.nEntityId = Entity.n;
                        rsp.nDetailId = Details.n;
                    }
                }else { rsp.apiError = ApiError_defs.ok;
                    rsp.nEntityId = Entity.n;
                    rsp.nDetailId = Details.n;
                }
            }
           else
            {
                rsp.apiError.sErrorMessage = "Unable to update user";
            }
            return rsp;
        }

        internal Models.EntityModel.AddCascadeEntityResp AddCascadeEntity(Models.EntityModel.AddCascadeEntityReq req)
        {
            Models.EntityModel.AddCascadeEntityResp rsp = new Models.EntityModel.AddCascadeEntityResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITEntity iEntity = _storage.AddEntity(req.sFname, req.sMname, req.sMother, req.sLname,req.sDOB, req.jAge, req.sEmail1, req.sContact1, req.sHouse, req.sLocality, req.sAddressLine, req.sTaluka, req.sDistrict,req.sState, req.sIdProof, req.sIdProofPath, req.jType, true);
            //Added Entity
            if (iEntity != null && iEntity.n > 0)
            {
                rsp.apiError = ApiError_defs.err_Nesting_Faliled;
                ITEnityDetails iEntityD = _storage.AddDetail(iEntity.n, req.sContact2, req.sEmail2, req.sClass,req.sLiscence, req.sLiscencePath, true);
                //Added Detail
                if (iEntityD != null && iEntityD.n > 0)
                {
                    rsp.nEntityId = iEntity.n;
                    rsp.nDetailId = iEntityD.n;
                    rsp.apiError = ApiError_defs.ok;

                    if (req.jType <= 2 && req.jType>=0)  //EntityType check
                    {
                        rsp.apiError = ApiError_defs.err_Nesting_Faliled;
                        ITUser iuser = _storage.setCred(req.sEmail1, SupportCodes.CreateRandomPassword(8), iEntity.n);
                        //User added
                        if (iuser.n > 0 && iuser != null)
                        {
                            rsp.nUserId = iuser.n;
                            rsp.apiError = ApiError_defs.ok;
                        }
                        else
                        {
                            rsp.apiError.sErrorMessage = "Login redentials not set";
                        }
                    }

                }
                else
                {
                    rsp.apiError.sErrorMessage = "Incomplete profle formation";
                }
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to add user";
            }
            return rsp;
        }

        internal Models.EntityModel.GetEntityByIdResp GetEntityByID(Models.EntityModel.GetEntityByIdReq req)
           {
               Models.EntityModel.GetEntityByIdResp rsp = new Models.EntityModel.GetEntityByIdResp();
               rsp.apiError = new APIErrors();
               rsp.apiError = ApiError_defs.err_Invalid_Request;

            ITEntity iEntity = _storage.GetEntityByID(req.nEntityId);
          
               if (iEntity != null && iEntity.n==req.nEntityId )
               {
                rsp.sMname = iEntity.sMname;
                rsp.sFname = iEntity.sFname;
                rsp.sLname = iEntity.sLname;
                rsp.sMother = iEntity.sMother;
                rsp.sEmail1 = iEntity.sEmail1;
                rsp.sContact1 = iEntity.sContact1;
                rsp.jType = iEntity.jType;
                rsp.jAge = iEntity.jAge;
                rsp.sState = iEntity.sState;
                rsp.sDOB = iEntity.sDOB;
                rsp.sHouse = iEntity.sHouse;
                rsp.sLocality = iEntity.sLocality;
                rsp.sAddressLine = iEntity.sAddressLine;
                rsp.sTaluka = iEntity.sTaluka;
                rsp.sDistrict = iEntity.sDistrict;
                rsp.sIdProof = iEntity.sIdProof;
                rsp.sIdProofPath = iEntity.sIdProofPath;
                rsp.apiError = ApiError_defs.ok;
               }
               else
               {
                   rsp.apiError.sErrorMessage = "Unable to get user";
               }

               return rsp;
           }

        internal Models.EntityModel.GetEntityListResp GetEntityList(Models.EntityModel.GetEntityListReq req)
        {
            Models.EntityModel.GetEntityListResp rsp = new Models.EntityModel.GetEntityListResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            int jtype = req.jType;
            List<ITEntity> eList = _storage.GetEntityList(jtype);
            ITEnityDetails detail;
            List<Models.EntityModel.FullEntity> Libasic = new List<Models.EntityModel.FullEntity>();
            if (eList != null)
            {
                EntityModel.FullEntity Ebasic;
                foreach (ITEntity entity in eList)
                {
                    detail = _storage.GetDetails(entity.n);
                    Ebasic = new EntityModel.FullEntity();
                    Ebasic.nEntityId = entity.n;
                    Ebasic.sFname = entity.sFname;
                    Ebasic.sLname = entity.sLname;
                    Ebasic.sMother = entity.sMother;
                    Ebasic.sMname = entity.sMname;
                    Ebasic.sState = entity.sState;
                    Ebasic.sDOB = entity.sDOB;
                    Ebasic.sLocality = entity.sLocality;
                    Ebasic.sTaluka = entity.sTaluka;
                    Ebasic.sDistrict = entity.sDistrict;
                    Ebasic.sAddressLine = entity.sAddressLine;
                    Ebasic.sHouse = entity.sHouse;
                    if ( detail!=null && detail.n > 0 ) { Ebasic.sClass = detail.sClass; }
                    Libasic.Add(Ebasic);
                    }
                rsp.LiEntity = Libasic;
                rsp.apiError = ApiError_defs.ok;
            }
            else
            {
                rsp.apiError.sErrorMessage = "Unable to request";
            }
            return rsp;
        }
        
        internal Models.EntityModel.getModalFormBasicEntityResp getModalFormBasicEntity(Models.EntityModel.getModalFormBasicEntityReq req)
        {
            Models.EntityModel.getModalFormBasicEntityResp rsp = new Models.EntityModel.getModalFormBasicEntityResp();
            rsp.apiError = new APIErrors();
            rsp.apiError = ApiError_defs.err_Invalid_Request;
            ITEntity entity = _storage.GetEntityByID(req.nEntityId);
            ITEnityDetails detail = _storage.GetDetails(req.nEntityId);

            if (detail!=null && entity!=null) {
                rsp.nEntityId = entity.n;
                rsp.sFname = entity.sFname;
                rsp.sLname = entity.sLname;
                rsp.sMname = entity.sMname;
                rsp.jAge = entity.jAge;
                rsp.sLocality = entity.sLocality;
                rsp.sTaluka = entity.sTaluka;
                rsp.sDistrict = entity.sDistrict;
                if (entity.sEmail1 != null && entity.sEmail1 != "")
                    rsp.sEmail1 = entity.sEmail1;
                if (entity.sContact1 != null && entity.sContact1 != "")
                    rsp.sContact1 = entity.sContact1;
                if(detail.sClass!=null && detail.sClass!="")
                rsp.sClass = detail.sClass;
                
                rsp.apiError = ApiError_defs.ok;
            }
            else { rsp.apiError.sErrorMessage = "Unable to fetch user Details"; }
                    return rsp;
        }
    }
    
}