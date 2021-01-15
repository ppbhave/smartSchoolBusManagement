
namespace ssbmadmin
{
    public class APIErrors
    {
        public int jErrorVal { get; set; }
        public string sErrorMessage { get; set; }
    }

    public interface IValidatable
    {
        bool isValid();
    }

    public class ApiError_defs
    {

        public static APIErrors ok = new APIErrors
        {
            jErrorVal = 0,
            sErrorMessage = "Ok"
        };

        public static APIErrors err_Invalid_Request = new APIErrors
        {
            jErrorVal = 1000,
            sErrorMessage = "Invalid request"
        };

        public static APIErrors err_Login_Wrong_Credentials = new APIErrors
        {
            jErrorVal = 1001,
            sErrorMessage = "Invalid Username / Password"
        };

        public static APIErrors err_Invalid_Session = new APIErrors
        {
            jErrorVal = 1002,
            sErrorMessage = "Session no longer valid"
        };

        public static APIErrors err_Unknown_Device = new APIErrors
        {
            jErrorVal = 1003,
            sErrorMessage = "Unknown device"
        };

        public static APIErrors err_Unknown_App = new APIErrors
        {
            jErrorVal = 1004,
            sErrorMessage = "Unknown app"
        };

        // Tanvi: Added new.
        public static APIErrors err_Insufficient_Data = new APIErrors
        {
            jErrorVal = 1005,
            sErrorMessage = "Insufficient data provided. Cannot proceed further."
        };
        public static APIErrors err_Nesting_Faliled = new APIErrors
        {
            jErrorVal = 1006,
            sErrorMessage = "Nested calls failed"
        };
    }
}