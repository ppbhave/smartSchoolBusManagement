using System.Collections.Generic;


namespace ssbmadmin.Models
{
    public class grievanceModel
    {
        public class AdGrievancereq
        {
            public long nEntityId { get; set; }
            public string content { get; set; }
        }
        public class AdGrievanceResp
        {
            public long nEntityId { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class getAllGreivancesReq
        {
            public bool fall { get; set; }
        }
        public class grievances
        {
            public long nEntityId { get; set; }
            public string content { get; set; }
            public System.DateTime dStamp{ get; set; }
        }
        public class getAllGreivancesResp
        {
            public List<grievances> grievances { get; set; }
            public APIErrors apiError { get; set; }
        }
    }
}