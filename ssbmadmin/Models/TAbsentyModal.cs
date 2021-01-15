
using System.Collections.Generic;
namespace ssbmadmin
{
    public class TAbsentyModal
    {
        public class GetAbsentyReq
        {
            public int day { get; set; }
            public int month { get; set; }
            public int year { get; set; }
        }

        public class AbsentyInfo
        {
            public long n { get; set; }
            public long nEntityFk { get; set; }
            public long nBusFk { get; set; }
            public bool bStatus { get; set; }
        }

        public class GetAbsentyRsp
        {
            public List<AbsentyInfo> liAbsenty { get; set; }
            public APIErrors apiError { get; set; }
        }
        public class AddAbsentyReq
        {
            public long nEntityFk { get; set; }
            
            public long nBusFk { get; set; }
          
        }
        public class AddAbsentyRsp
        {
            public long nAbsenty { get; set; }
            public APIErrors apiError { get; set; }
        }
    }
}