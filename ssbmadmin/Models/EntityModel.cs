using System.Collections.Generic;
namespace ssbmadmin.Models
{
    public class EntityModel
    {
        public class GetEntityByIdReq
        {
            public long nEntityId { get; set; }
        }
        public class GetEntityByIdResp
        {
            public string sFname { get; set; }
            public string sMname { get; set; }
            public string sMother { get; set; }
            public string sLname { get; set; }
            public string sDOB { get; set; }
            public string sState { get; set; }
            public int jAge { get; set; }
            public string sEmail1 { get; set; }
            public string sContact1 { get; set; }
            public string sHouse { get; set; }
            public string sLocality { get; set; }
            public string sAddressLine { get; set; }
            public string sTaluka { get; set; }
            public string sDistrict { get; set; }
            public string sIdProof { get; set; }
            public string sIdProofPath { get; set; }
            public int jType { get; set; }
            public APIErrors apiError { get; set; }
        }

        public class FullEntity
        {
            public long nEntityId { get; set; }
            public string sFname { get; set; }
            public string sMname { get; set; }
            public string sMother { get; set; }
            public string sLname { get; set; }
            public string sDOB { get; set; }
            public string sState { get; set; }
            public int jAge { get; set; }
            public string sEmail1 { get; set; }
            public string sContact1 { get; set; }
            public string sHouse { get; set; }
            public string sLocality { get; set; }
            public string sAddressLine { get; set; }
            public string sTaluka { get; set; }
            public string sDistrict { get; set; }
            public string sIdProof { get; set; }
            public string sIdProofPath { get; set; }
            public int jType { get; set; }
            public string sContact2 { get; set; }
            public string sEmail2 { get; set; }
            public string sClass { get; set; }
            public string sLiscence { get; set; }
            public string sLiscencePath { get; set; }
        }

        public class GetEntityListReq
        {
            public int jType { get; set; }
        }
        public class GetEntityListResp
        {
            public List<FullEntity> LiEntity { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class AddEntityReq
        {
            public string sFname { get; set; }
            public string sMname { get; set; }
            public string sMother { get; set; }
            public string sLname { get; set; }
            public string sDOB { get; set; }
            public string sState { get; set; }
            public int jAge { get; set; }
            public string sEmail1 { get; set; }
            public string sContact1 { get; set; }
            public string sHouse { get; set; }
            public string sLocality { get; set; }
            public string sAddressLine { get; set; }
            public string sTaluka { get; set; }
            public string sDistrict { get; set; }
            public string sIdProof { get; set; }
            public string sIdProofPath { get; set; }
            public int jType { get; set; }
        }
        public class AddEntityRsp
        {
            public APIErrors apiError { get; set; }
            public long nEntityId { get; set; }
        }

            public class AddCascadeEntityReq
        {
            public string sFname { get; set; }
            public string sMname { get; set; }
            public string sMother { get; set; }
            public string sLname { get; set; }
            public string sDOB { get; set; }
            public string sState { get; set; }
            public int jAge { get; set; }
            public string sEmail1 { get; set; }
            public string sContact1 { get; set; }
            public string sHouse { get; set; }
            public string sLocality { get; set; }
           
            public string sAddressLine { get; set; }
            public string sTaluka { get; set; }
            public string sDistrict { get; set; }
            public string sIdProof { get; set; }
            public string sIdProofPath { get; set; }
            public int jType { get; set; }
            public string sContact2 { get; set; }
            public string sEmail2 { get; set; }
            public string sClass { get; set; }
          
            public string sLiscence { get; set; }
            public string sLiscencePath { get; set; }   
        }
        public class AddCascadeEntityResp
        {
            public APIErrors apiError { get; set; }
            public long nEntityId { get; set; }
            public long nDetailId { get; set; }
            public long nUserId { get; set; }
        }

        public class UpdateEntityReq
        {           
            public long nEntityId { get; set; }
            public string sFname { get; set; }
            public string sMname { get; set; }
            public string sMother { get; set; }
            public string sLname { get; set; }
            public string sDOB { get; set; }
            public string sState { get; set; }
            public int jAge { get; set; }
            public string sEmail1 { get; set; }
            public string sContact1 { get; set; }
            public string sHouse { get; set; }
            public string sLocality { get; set; }
            public string sAddressLine { get; set; }
            public string sTaluka { get; set; }
            public string sDistrict { get; set; }
            public string sIdProof { get; set; }
            public string sIdProofPath { get; set; }
            public int jType { get; set; }
            public string sContact2 { get; set; }
            public string sEmail2 { get; set; }
            public string sClass { get; set; }
            public string sLiscence { get; set; }
            public string sLiscencePath { get; set; }
        }

        public class UpdateEntityResp
        {
            public APIErrors apiError { get; set; }
            public long nEntityId { get; set; }
            public long nDetailId { get; set; }
        }
        public class getModalFormBasicEntityReq
        {
            public long nEntityId { get; set; }
        }
        public class getModalFormBasicEntityResp
        {
            public long nEntityId { get; set; }
            public string sFname { get; set; }
            public string sMname { get; set; }
            public string sMother { get; set; }
            public string sLname { get; set; }
            public string sDOB { get; set; }
            public string sState { get; set; }
            public int jAge { get; set; }
            public string sEmail1 { get; set; }
            public string sContact1 { get; set; }
            public string sHouse { get; set; }
            public string sLocality { get; set; }
            public string sAddressLine { get; set; }
            public string sTaluka { get; set; }
            public string sDistrict { get; set; }
            public string sClass { get; set; }
            public APIErrors apiError { get; set; }

        }
    }
}