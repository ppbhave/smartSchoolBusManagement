
using System.Collections.Generic;
namespace ssbmadmin
{
    public class TAttendenceModal
    {
        public class GetAttendenceReq
        {
            public long nBusId {get;set;}
            public int day{ get; set; }
            public int month { get; set; }
            public int year { get; set; }
        }
        public class AttendenceInfo
        {
            public long n { get; set; }
            public long nEntityId { get; set; }
            public string sFname { get; set; }
            public string sMname { get; set; }
            public string sLname { get; set; }
            public long nBusFK { get; set; }
            public string sRegNo { get; set; }
            public float rInLat { get; set; }
            public float rInLong { get; set; }
            public float rOutLat { get; set; }
            public float rOutLong { get; set; } 
            public  System.DateTime dStampIn { get; set; } 
            public System.DateTime dStampOut { get; set; }         
        }

        public class AddAttendenceRecordReq
        {        
            public long nEntityId { get; set; }
            public long nBusFK { get; set; }
            public float rInLat { get; set; }
            public float rInLong { get; set; }
           
        }
        public class AddOutStampsReq
        {
            public long nEntityId { get; set; }
            public int day { get; set; }
            public int month { get; set; }
            public int year { get; set; }
            public float rOutLat { get; set; }
            public float rOutLong { get; set; }
        }
        public class AddOutStampsRsp
        {
            public APIErrors apiError { get; set; }
        }
        public class AddAttendenceRecordResp
        {
            public long nAttendenceId { get; set; }
            public APIErrors apiError { get; set; }
        }

        public class GetAttendenceRsp
        {
            public List<AttendenceInfo> liAttendence { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class GetAttendenceByIdReq
        { 
          public long nEntityId { get; set; }
            public int day { get; set; }
            public int month { get; set; }
            public int year { get; set; }
        }
        public class GetAttendenceByIdResp
        {
            public List<AttendenceInfo> liAttendence { get; set; }
            public APIErrors apiError { get; set; }
        }

    }
}