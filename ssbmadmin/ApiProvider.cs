using System.Configuration;

namespace ssbmadmin
{
    public class ApiProvider
    {
        public static string __sDBConnection;

        public IStorageService _storage;

        public ApiProvider()
        {
            __sDBConnection = ConfigurationManager.ConnectionStrings["ssbmConnectionString"].ConnectionString;
            _storage = StorageMgr.GetInstance(__sDBConnection);
        }
    }
}