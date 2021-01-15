using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ssbmadmin.Models
{
    public class DutyModal
    {
        public class dutyInfo
        {
            public long nDutyId { get; set; }
            public DateTime dStampStart { get; set; }
            public DateTime dStampStop { get; set; }
            public string sRegNo { get; set; }
        }
        public class GetDutyResp
        {
            public List<dutyInfo> duties { get; set; }
            public APIErrors apiErrors { get; set; }
        }
        public class GetDutyReq
        {
            public long nEntityId { get; set; }
           public int day { get; set; }
            public int month { get; set; }
            public int year { get; set; }

        }
        public class SetEndStampResp
        {
            public long n { get; set; }
            public DateTime dStampStop { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class SetEndStampReq
        {
            public long n { get; set; }
        }
        public class AddDutyReq
        {
            public long nEntityId { get; set; }
            public long nBusFK { get; set; }
            public DateTime dStampStart { get; set; }
            public DateTime dStampStop { get; set; }
        }
        public class AddDutyResp
        {
            public long n { get; set; }
            public APIErrors apiError { get; set; }
        }
    }
}