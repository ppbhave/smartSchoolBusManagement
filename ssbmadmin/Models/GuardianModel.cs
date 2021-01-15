using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ssbmadmin.Models
{
    public class GuardianModel
    {
        public class MapGuardianReq
        {
            public long parentPK { get; set; }
            public List<long> ListudentPK { get; set; }
        }
        public class MapGuardianResp
        {
            public APIErrors apiError { get; set; }
        }
        public class GetGuardianReq
        {
            public long studentPK { get; set; }
        }
        public class GetGuardianResp
        {
            public APIErrors apiError { get; set; }
            public Relative parent { get; set; }
        }
        public class Relative
        {
            public long nRecordId { get; set; }
            public long nRelativeId { get; set; }
            public string sMname { get; set; }
            public string sFname { get; set; }
            public string sLname { get; set; }
            public string sClass { get; set; }
        }
        public class editGuardianReq
        {
            public long nGuardianId { get; set; }
            public long nStudentPK { get; set; }
            public long nparentPK { get; set; }
            public bool bStatus { get; set; }
        }
        public class editGuardianResp
        {
            public   APIErrors apiError { get; set; }
        }
        public class GetChildrenReq111111
        {
            public long nEntityFKParent { get; set; }
        }
        public class GetChildrenResp
        {
            public List<Relative> LiChildren { get; set; }
            public APIErrors apiError { get; set; }            
        }
    }
}