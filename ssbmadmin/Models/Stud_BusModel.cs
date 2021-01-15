using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ssbmadmin.Models
{
    public class Stud_BusModel
    {
        public class MapStudBusReq
        {
            public List<long> nEntityId { get; set; }
            public long nBusFKup { get; set; }
            public long nBusFKdown { get; set; }
            public long nStopUp { get; set; }
            public long nStopDown { get; set; }
        }
        public class MapStudBusResp
        {
            public APIErrors apiError { get; set; }
        }
        public class updateStudBusreq
        {
            public long nEntityId { get; set; }
            public long nBusFKup { get; set; }
            public long nBusFKdown { get; set; }
            public long nStopUp { get; set; }
            public long nStopDown { get; set; }
        }
        public class updateStudBusResp
        {
            public APIErrors apiError { get; set; }
        }
        public class GetAllPassengerReq
        {
            public long nBusFK { get; set; }
            public DateTime dateTime { get; set; }
        }
        public class passenger
        {
            public long nEntityId { get; set; }
            public string sFname { get; set; }
            public string sMname { get; set; }
            public string sLname { get; set; }
            public string sLocality { get; set; }
            public string sAddressLine1 { get; set; }
            public string sCity { get; set; }
            public long nStopUp { get; set; }
            public long nStopDown { get; set; }
        }
        public class GetAllPassengerResp
        {
            public List<passenger> LiStudents { get; set; }
            public APIErrors error { get; set; }
        }
       
        public class GetBusStudReq
        {
            public long nEntityId { get; set; }
        }
        public class GetBusStudResp
        {
            public long nBusFKup { get; set; }
            public long nBusFKdown { get; set; }
            public long nStopUp { get; set; }
            public long nStopDown { get; set; }
            public string upLatLong { get;set;  }
            public string downLatLong { get; set; }
            public long nRecordId { get; set; }
            public APIErrors apiError { get; set; }
        }
    }
}