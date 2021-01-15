using System;
using System.Collections.Generic;
namespace ssbmadmin
{
    public class StorageMgr
    {
        private StorageMgr() { }

        public static IStorageService GetInstance(string sDBConnection)
        {
            return new StorageMgr_DBMSSQL(sDBConnection);
        }
    }
    //Bus interface Starts here
    public interface ITBus
    {
        long n { get; }
        string sRegNo { get; }
        int jCapacity { get; }//default 27
        DateTime dStamp { get; }
        bool bStatus { get; }
    }
    //Bus Interface ends here 
    //Bus Location tracking starts here
    public interface ITBusLocation
    {
        long n { get; }
        long nBusFK { get; }
        float rLat { get; }
        float rLong { get; }
        DateTime dStamp { get; }
        bool bStatus { get; }
    }
    //Route interface starts here
    public interface ITRoute
    {
        long n { get; }
        long nBusFK { get; }
        float rLat1 { get; }
        float rLong1 { get; }
        float rLat2 { get; }
        float rLong2 { get; }
        string sTripDetails { get; }
        DateTime dStamp { get; }
        bool bStatus { get; }
    }
    //Route interface ends here
    public interface ITStops
    {
        long n { get; }
        long nRouteFK { get; }
        float rStopLat { get; }
        float rStopLong { get; }
        DateTime dStamp { get; }
        bool bStatus { get; }
    }
    //Absenty interface Starts here
    public interface ITAbsenty
    {
        long n { get; }
        long nEntityFK { get; }
        long nBusFK { get; }
        DateTime dStamp { get; }
        bool bStatus { get; }
    }
    public interface ITGuardian
    {
        long n { get; }
        long nEntityFKParent { get; }
       long nEntityFKStudent { get;}
        DateTime dStamp { get; }
        bool bStatus { get; }
    }
    public interface ITStud_Bus
    {
        long n { get; }
        long nEntityFKStudent { get; }
        long nBusFKup { get; }
        long nStopUp { get; }
        long nStopDown { get; }
        long nBusFKdown { get; }
        DateTime dStamp { get; }
        bool bStatus { get; }
    }
    public interface ITDriver_Bus
    {
        long n { get; }
        long nEntityFKDrvier { get; }
        long nBusFK { get; }
        DateTime dStamp { get; }
        bool bStatus { get; }
    }

    //Absenty Interface ends here 
    //Attendence interface Starts here
    public interface ITAttendence
    {
        long n { get; }
        long nEntityFK { get; }
        long nBusFK { get; }
        float rInLat { get; }
        float rInLong { get; }
        float rOutLat { get; }
        float rOutLong { get; }
        DateTime dStampIn { get; }
        DateTime dStampOut { get; }
        bool bStatus { get; }
    }
    //Attendence Interface ends here
    public interface ITEntity
    {
        long n { get; }
        string sFname { get; }
        string sMname { get; }
        string sMother { get; }
        string sLname { get; }
        string sDOB { get; }
        int jAge { get; }
        string sEmail1 { get; }
        string sContact1 { get; }
        string sHouse { get; }
        string sLocality { get; }
        string sAddressLine { get; }
        string sTaluka { get; }
        string sDistrict { get; }
        string sState { get; }
        string sIdProof { get; }
        string sIdProofPath { get; }
        DateTime dStamp { get; }
        bool bStatus { get; }
        int jType { get; }
    }
    public interface ITEnityDetails
    {
        long n { get; }
        long nEntityFK { get; }
        string sContact2 { get; }
        string sEmail2 { get; }
        string sClass { get; }        
        string sLiscence { get; }
        string sLiscencePath { get; }
        DateTime dStamp { get; }
        bool bStatus { get; }
    }
    public interface ITUser
    {
        long n { get; }
        string sEmail { get; }
        string sPassword { get; }
        long nEntityFK { get; }
        bool bStatus { get; }
    }
    public interface ITAttendentDuty
    {
        long n { get; }
        long nBusFK { get; }
        long nEntityFK { get; }
        DateTime dStampStop { get; }
        DateTime dStampStart { get; }
        bool bStatus { get; }
    }
    public interface ITGrievances
    {
        long n { get; }
        long nEntityFK { get; }
        string content { get; }
        DateTime dStamp { get; }
        bool bStatus { get; }
    }

    public partial interface IStorageService
    {
        void CommitDB();
        //Entity Methods
        ITEntity AddEntity(string sFname, string sMname, string sMother, string sLname,string sDOB, int jAge, string sEmail1, string sContact1, string sHouse,
        string sLocality, string sAddressLine, string sTaluka, string sDistrict,string sState, string sIdProof, string sIdProofPath, int jType, bool bcommit);
        ITEntity GetEntityByID(long n);
        ITEntity UpdateEntity(ITEntity iEntity, string sFname, string sMname, string sMother, string sLname, string sDOB, int jAge, string sEmail1, string sContact1, string sHouse, string sLocality, string sAddressLine, string sTaluka, string sDistrict, string sState, string sIdProof, string sIdProofPath, bool bcommit); 
        List<ITEntity> GetEntityList(int jType);
        //Details
        ITEnityDetails AddDetail(long nEntityFK, string sContact2, string sEmail2, string sClass,string sLiscence, string sLiscencePath, bool bcommit);
        ITEnityDetails GetDetails(long nEntityFK);
        ITEnityDetails UpdateDetail(ITEnityDetails iDetails, string sContact2, string sEmail2, string sClass,string sLiscence, string sLiscencePath, bool bcommit);
        //User
        ITUser login(string Email, string Password);
        ITUser getUser(long nEntity);
        ITUser ModifyUser(ITUser user,string Email,string password);
        ITUser setCred(string sEmail, string sPassword, long nEntityFK);
        //Duty
        List<ITAttendentDuty> GetDuty(long nEntityId, int day, int month, int year);
        ITAttendentDuty AddDuty(long nBusFK, long nentityFK);
        ITAttendentDuty SetEndStamp(long nDuty);
        //Bus Methods
        ITBus AddBus(string sRegNo, int jcapacity, bool fCommitNow);
        ITBus GetBusById(long n);
        List<ITBus> GetAllBus();
        ITBus getBusbyReg(string regNo);
        ITBus ModifyBus(ITBus iBus, string sRegNo, int jOccupied, bool fCommitNow);
        //Guardian
        ITGuardian MapParent(long nPaentFK,long nStudentFK);

        ITGuardian GetParent(long nStudentFK);
        ITGuardian GetGuardian(long nGuardian);
        ITGuardian editGuardian(ITGuardian guardian, long nstudentPK, long nParentPK, bool bStatus);
        List<ITGuardian> GetParentStudentList();
        List<ITGuardian> GetChildren(long nParentFK);

        //Stud_bus
        List<ITStud_Bus> GetAllPassenger(long nBusFK, bool up);
        ITStud_Bus MapStudent2Bus(long nStudentFK, long nBusFKup, long nBUSFKdown, long nStopUp,long nStopDown);
        ITStud_Bus updateStudBus(ITStud_Bus stuBus, long nStudentFK, long nBusFKup, long nBUSFKdown, long nStopUp, long nStopDown);
        ITStud_Bus GetBus2stud(long nStudentFK);
        //driver bus
        ITDriver_Bus MapDriver(long nDriverFK, long nBusFK);
        ITDriver_Bus GetDriver(long nBusFK);
        ITDriver_Bus GetDriverBusbyId(long nDriverBus);
        List<ITDriver_Bus> GetListDriverBus();
        List<ITDriver_Bus> GetBusesByDriver(long nDriverFK);
        ITDriver_Bus getBusOfDriver(long nDriverId);
        ITDriver_Bus editBusDriver(ITDriver_Bus DriverBus, long nEntityId, long nBusFK, bool bStatus);
        //Route
        ITRoute AddRoute(long nBusFK, float rLat1, float rLong1, float rLat2, float rLong2,string stripDetails,bool fCommitNow);
        ITRoute GetRouteByID(long nRouteID);
        List<ITRoute> getRouteByBus(long nBusId);
        ITRoute ModifyRoute(ITRoute iRoute, long nBusFK, float rLat1, float rLong1, float rLat2, float rLong2, string stripDetails,bool fCommitNow);
        //Stops
        List<ITStops> GetFullRoute(long nRouteFK);
        ITStops getStopById(long nStopId);
        ITStops modifyEndpoints(long nRouteFk,float rlatOld,float rlongOld,float rlatNew,float rlongNew);
        ITStops AddStop(long nRouteFK,float rLat,float rLong);
        //Absenty
        ITAbsenty GetAbsentyByID(long nBusFk);
        List<ITAbsenty> GetAllAbsenty(int day,int month,int year);
        ITAbsenty AddAbsenty(long nEntityId,long nBusFk);
        //Attendence
        ITAttendence AddAttendence(long nEntityFK, long nBusFK, float rInLat, float rInLong);
        List<ITAttendence> GetAllAttendence(long nBusFK, int day, int month, int year);
        List<ITAttendence> GetAttendenceById(long nEntityFK, int day, int month, int year);
        ITAttendence AddOutStamps(ITAttendence attendence, float rOutLat, float rOutLong);
        //Grievances
        ITGrievances AddGrievance(long nEntityFK,string content);
        List<ITGrievances> viewAllGrievances();

        //bus location
        ITBusLocation AddBusLocation(long nBusFK,float rLat,float rLong2);
        ITBusLocation UpdateBusLocation(ITBusLocation Bus, float rLat, float rLong2,bool bStatus);
        ITBusLocation getLocationByBus(long nBusFK);
        List<ITBusLocation> getLocationArrayByBus(long nBusFK);
    }
}