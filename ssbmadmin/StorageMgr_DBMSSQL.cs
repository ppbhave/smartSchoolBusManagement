using System;
using System.Collections.Generic;
using System.Data.Linq;
using System.Linq;

namespace ssbmadmin
{
    public class OMoniker<T>
    {
        public T _oMoniker;
    }
    //For Bus table start-->
    public class OTEntity : OMoniker<TEntity>, ITEntity
    {
        public OTEntity(TEntity tEntity) //constructor
        {
            _oMoniker = tEntity;
        }
        long ITEntity.n
        {
            get { return _oMoniker.n; }
        }
        string ITEntity.sDOB
        {
            get { return _oMoniker.sDOB; }
        }
        string ITEntity.sState
        {
            get { return _oMoniker.sState; }
        }
        string ITEntity.sFname
        {
            get { return _oMoniker.sFname; }
        }
        string ITEntity.sMname
        {
            get { return _oMoniker.sMname; }
        }
        string ITEntity.sMother
        {
            get { return _oMoniker.sMother; }
        }
        string ITEntity.sLname
        {
            get { return _oMoniker.sLname; }
        }
        int ITEntity.jAge
        {
            get { return (int)_oMoniker.jAge; }
        }
        string ITEntity.sEmail1
        {
            get { return _oMoniker.sEmail1; }
        }
        string ITEntity.sContact1
        {
            get { return _oMoniker.sContact1; }
        }
        string ITEntity.sHouse
        {
            get { return _oMoniker.sHouse; }
        }
        string ITEntity.sLocality
        {
            get { return _oMoniker.sLocality; }
        }
        string ITEntity.sAddressLine
        {
            get { return _oMoniker.sAddressLine; }
        }
        string ITEntity.sTaluka
        {
            get { return _oMoniker.sTaluka; }
        }
        string ITEntity.sDistrict
        {
            get { return _oMoniker.sDistrict; }
        }
        string ITEntity.sIdProof
        {
            get { return _oMoniker.sIdProof; }
        }
        string ITEntity.sIdProofPath
        {
            get { return _oMoniker.sIdProofPath; }
        }
        int ITEntity.jType
        {
            get { return (int)_oMoniker.jType; }
        }
        DateTime ITEntity.dStamp
        {
            get { return (DateTime)_oMoniker.dStamp; }
        }
        bool ITEntity.bStatus
        {
            get { return (bool)_oMoniker.bStatus; }
        }
    }
    public class OTDetail : OMoniker<TEntityDetail>, ITEnityDetails
    {
        public OTDetail(TEntityDetail tDetail) //constructor
        {
            _oMoniker = tDetail;
        }
        long ITEnityDetails.n
        {
            get { return _oMoniker.n; }
        }
        long ITEnityDetails.nEntityFK
        {
            get { return (long)_oMoniker.nEntityFK; }
        }
        string ITEnityDetails.sContact2
        {
            get { return _oMoniker.sContact2; }
        }
        string ITEnityDetails.sEmail2
        {
            get { return _oMoniker.sEmail2; }
        }
        string ITEnityDetails.sClass
        {
            get { return _oMoniker.sClass; }
        }
        string ITEnityDetails.sLiscence
        {
            get { return _oMoniker.sLiscence; }
        }
        string ITEnityDetails.sLiscencePath
        {
            get { return _oMoniker.sLiscencePath; }
        }
        DateTime ITEnityDetails.dStamp
        {
            get { return (DateTime)_oMoniker.dStamp; }
        }
        bool ITEnityDetails.bStatus
        {
            get { return (bool)_oMoniker.bStatus; }
        }
    }
    public class OTUser : OMoniker<TUser>, ITUser
    {
        public OTUser(TUser tUser) //constructor
        {
            _oMoniker = tUser;
        }
        long ITUser.n
        {
            get { return _oMoniker.n; }
        }
        string ITUser.sEmail
        {
            get { return _oMoniker.sEmail; }
        }
        string ITUser.sPassword
        {
            get { return _oMoniker.sPassword; }
        }
        long ITUser.nEntityFK
        {
            get { return (long)_oMoniker.nEntityFK; }
        }
        bool ITUser.bStatus
        {
            get { return (bool)_oMoniker.bStatus; }
        }
    }
    public class OTAttendentDuty : OMoniker<TAttendentDuty>, ITAttendentDuty
    {
        public OTAttendentDuty(TAttendentDuty tduty) //constructor
        {
            _oMoniker = tduty;
        }
        long ITAttendentDuty.n
        {
            get { return _oMoniker.n; }
        }
        long ITAttendentDuty.nEntityFK
        {
            get { return (long)_oMoniker.nEntityFK; }
        }
        long ITAttendentDuty.nBusFK
        {
            get { return (long)_oMoniker.nBusFK; }
        }
        DateTime ITAttendentDuty.dStampStart
        {
            get { return (DateTime)_oMoniker.dStampStart; }
        }
        DateTime ITAttendentDuty.dStampStop
        {
            get { return (DateTime)_oMoniker.dtampStop; }
        }
        bool ITAttendentDuty.bStatus
        {
            get { return (bool)_oMoniker.bStatus; }
        }

    }
    public class OTGuardian : OMoniker<TGuardian>, ITGuardian
    {
        public OTGuardian(TGuardian tg) //constructor
        {
            _oMoniker = tg;
        }
        long ITGuardian.n
        {
            get { return _oMoniker.n; }
        }
        long ITGuardian.nEntityFKStudent
        {
            get { return (long)_oMoniker.nEntityFKStudent; }
        }
        long ITGuardian.nEntityFKParent
        {
            get { return (long)_oMoniker.nEntityFKParent; }
        }
        DateTime ITGuardian.dStamp
        {
            get { return (DateTime)_oMoniker.dStamp; }
        }
        bool ITGuardian.bStatus
        {
            get { return (bool)_oMoniker.bStatus; }
        }

    }
    public class OTDriver_Bus : OMoniker<TDriver_Bus>, ITDriver_Bus
    {
        public OTDriver_Bus(TDriver_Bus tb) //constructor
        {
            _oMoniker = tb;
        }
        long ITDriver_Bus.n
        {
            get { return (long)_oMoniker.n; }
        }
        long ITDriver_Bus.nEntityFKDrvier
        {
            get { return (long)_oMoniker.nEntityFKDriver; }
        }
        long ITDriver_Bus.nBusFK
        {
            get { return (long)_oMoniker.nBusFk; }
        }
        DateTime ITDriver_Bus.dStamp
        {
            get { return (DateTime)_oMoniker.dStamp; }
        }
        bool ITDriver_Bus.bStatus
        {
            get { return (bool)_oMoniker.bStatus; }
        }

    }
    public class OTStops : OMoniker<TStop>, ITStops
    {
        public OTStops(TStop tb) //constructor
        {
            _oMoniker = tb;
        }
        long ITStops.n
        {
            get { return (long)_oMoniker.n; }
        }
        long ITStops.nRouteFK
        {
            get { return (long)_oMoniker.nRouteFK; }
        }
        float ITStops.rStopLat
        {
            get { return (float)_oMoniker.rStopLat; }
        }
        float ITStops.rStopLong
        {
            get { return (float)_oMoniker.rStopLong; }
        }
        DateTime ITStops.dStamp
        {
            get { return (DateTime)_oMoniker.dStamp; }
        }
        bool ITStops.bStatus
        {
            get { return (bool)_oMoniker.bStaus; }
        }

    }
    public class OTBus : OMoniker<TBus>, ITBus
    {
        public OTBus(TBus tBus)
        {
            _oMoniker = tBus;
        }
        int ITBus.jCapacity
        {
            get { return (int)_oMoniker.jCapacity; }
        }
        long ITBus.n
        {
            get { return _oMoniker.n; }
        }

        string ITBus.sRegNo
        {
            get { return _oMoniker.sRegNo; }
        }
        DateTime ITBus.dStamp
        {
            get { return (DateTime)_oMoniker.dStamp; }
        }
        bool ITBus.bStatus
        {
            get { return (bool)_oMoniker.bStatus; }
        }
    }
    //bus ends here -->

    //Route starts here
    public class OTRoute : OMoniker<TRoute>, ITRoute
    {
        public OTRoute(TRoute tRoute)
        {
            _oMoniker = tRoute;
        }
        String ITRoute.sTripDetails
        {
            get { return _oMoniker.sTripDetails; }
        }
        long ITRoute.n
        {
            get { return _oMoniker.n; }
        }
        long ITRoute.nBusFK
        {
            get { return (long)_oMoniker.nBusFK; }
        }
        float ITRoute.rLat1
        {
            get { return (float)_oMoniker.rLat1; }
        }
        float ITRoute.rLong1
        {
            get { return (float)_oMoniker.rLong1; }
        }
        float ITRoute.rLat2
        {
            get { return (float)_oMoniker.rLat2; }
        }
        float ITRoute.rLong2
        {
            get { return (float)_oMoniker.rLong2; }
        }
        DateTime ITRoute.dStamp
        {
            get { return (DateTime)_oMoniker.dStamp; }
        }
        bool ITRoute.bStatus
        { get { return (bool)_oMoniker.bStatus; } }
    }

    //Route ends here

    //Absenty marking Starts here

    public class OTAbsenty : OMoniker<TAbsentyMarking>, ITAbsenty
    {
        public OTAbsenty(TAbsentyMarking tAbsenty)
        {
            _oMoniker = tAbsenty;
        }

        long ITAbsenty.n
        {
            get { return _oMoniker.n; }
        }

        long ITAbsenty.nEntityFK
        {
            get { return (long)_oMoniker.nEntityFK; }
        }
        long ITAbsenty.nBusFK
        {
            get { return (long)_oMoniker.nBusFK; }
        }
        DateTime ITAbsenty.dStamp
        {
            get { return (DateTime)_oMoniker.dStamp; }
        }
        bool ITAbsenty.bStatus
        {
            get { return (bool)_oMoniker.bStatus; }
        }
    }
    //AbsentyMarking ends here
    public class OTStud_Bus : OMoniker<TStud_Bus>, ITStud_Bus
    {
        public OTStud_Bus(TStud_Bus tG)
        {
            _oMoniker = tG;
        }
        long ITStud_Bus.nStopUp
        {
            get { return (long)_oMoniker.nStopUp; }
        }
        long ITStud_Bus.nStopDown
        {
            get { return (long)_oMoniker.nStopDown; }
        }
        long ITStud_Bus.n
        {
            get { return (long)_oMoniker.n; }
        }

        long ITStud_Bus.nEntityFKStudent
        {
            get { return (long)_oMoniker.nEntityFKStudent; }
        }
        long ITStud_Bus.nBusFKup
        {
            get { return (long)_oMoniker.nBusFKup; }
        }
        long ITStud_Bus.nBusFKdown
        {
            get { return (long)_oMoniker.nBusFKdown; }
        }
        DateTime ITStud_Bus.dStamp
        {
            get { return (DateTime)_oMoniker.dStamp; }
        }
        bool ITStud_Bus.bStatus
        {
            get { return (bool)_oMoniker.bStatus; }
        }
    }
    //Route starts here
    public class OTAttendence : OMoniker<TAttendence>, ITAttendence
    {
        public OTAttendence(TAttendence tAttendence)
        {
            _oMoniker = tAttendence;
        }

        long ITAttendence.n
        {
            get { return _oMoniker.n; }
        }
        long ITAttendence.nEntityFK
        {
            get { return (long)_oMoniker.nEntityFk; }
        }
        long ITAttendence.nBusFK
        {
            get { return (long)_oMoniker.nBusFk; }
        }
        float ITAttendence.rInLat
        {
            get { return (float)_oMoniker.rInLat; }
        }
        float ITAttendence.rInLong
        {
            get { return (float)_oMoniker.rInLong; }
        }
        float ITAttendence.rOutLat
        {
            get { return (float)_oMoniker.rOutLat; }
        }
        float ITAttendence.rOutLong
        {
            get { return (float)_oMoniker.rOutLong; }
        }
        DateTime ITAttendence.dStampIn
        {
            get { return (DateTime)_oMoniker.dStampIn; }
        }
        DateTime ITAttendence.dStampOut
        {
            get { return (DateTime)_oMoniker.dStampOut; }
        }
        bool ITAttendence.bStatus
        {
            get { return (bool)_oMoniker.bStatus; }
        }
    }


    //Route ends here
    // What about this code

    public partial class StorageMgr_DBMSSQL : IStorageService
    {
        public static bool FStrnCmp(string s1, string s2)
        {
            return String.Compare(s1, s2, StringComparison.InvariantCultureIgnoreCase) == 0;
        }
        public static bool FStrCmp(string s1, string s2)
        {
            return String.Compare(s1, s2, StringComparison.InvariantCulture) == 0;
        }

        ssbmDataContext _Sb;

        public string _sDBConnection;
        public DateTime DATETIME_MIN = new DateTime(1800, 1, 1);

        public StorageMgr_DBMSSQL(string sDBConnection)
        {
            _sDBConnection = sDBConnection;
            _Sb = new ssbmDataContext(_sDBConnection);
        }

        private static object _objCommitLock = new object();
        private void CommitToDB()
        {

            ChangeSet changeSet = _Sb.GetChangeSet();
            try
            {
                _Sb.SubmitChanges();
            }

            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex);
                //goto L_Return;
            }
            //L_Return:
            // return fRet;
        }

        void IStorageService.CommitDB()
        {
            CommitToDB();
        }

        ITEntity IStorageService.AddEntity(string sFname, string sMname, string sMother, string sLname, string sDOB, int jAge, string sEmail1, string sContact1, string sHouse,
        string sLocality, string sAddressLine, string sTaluka, string sDistrict, string sState, string sIdProof, string sIdProofPath, int jType, bool bcommit)
        {
            TEntity tEntity = new TEntity()
            {
                sFname = sFname,
                sMname = sMname,
                sMother = sMother,
                sLname = sLname,
                sDOB = sDOB,
                jAge = jAge,
                sEmail1 = sEmail1,
                sContact1 = sContact1,
                sHouse = sHouse,
                sLocality = sLocality,
                sAddressLine = sAddressLine,
                sTaluka = sTaluka,
                sDistrict = sDistrict,
                sState=sState,
                sIdProof = sIdProof,
                sIdProofPath = sIdProofPath,
                jType = jType,
                bStatus = true,
                dStamp = DateTime.UtcNow
            };

            _Sb.TEntities.InsertOnSubmit(tEntity);
            if (bcommit)
            {
                CommitToDB();
            }
            return new OTEntity(tEntity);
        }
        ITEntity IStorageService.GetEntityByID(long n)
        {
            ITEntity iEntity = null;

            TEntity tEntity = _Sb.TEntities.FirstOrDefault(obj => obj.n == n);
            //    TEntity tentity = _Sb.TEntities.Where(obj => obj.n == n).FirstOrDefault();
            //   var tEntity = (TEntity)from te in _Sb.TEntities where te.n == n select te;
            if (tEntity != null)
            {
                iEntity = new OTEntity(tEntity);
            }
            return (iEntity);
        }
        ITEnityDetails IStorageService.AddDetail(long nEntityFK, string sContact2, string sEmail2, string sClass, string sLiscence, string sLiscencePath, bool bcommit)
        {
            TEntityDetail tentitydetails = new TEntityDetail()
            {
                nEntityFK = nEntityFK,
                sContact2 = sContact2,
                sEmail2 = sEmail2,
                sClass = sClass,
                sLiscence = sLiscence,
                sLiscencePath = sLiscencePath,
                dStamp = DateTime.UtcNow,
                bStatus = true
            };
            _Sb.TEntityDetails.InsertOnSubmit(tentitydetails);
            if (bcommit)
            {
                CommitToDB();
            }
            return new OTDetail(tentitydetails);
        }
        ITEnityDetails IStorageService.GetDetails(long nEntityFK)
        {
            ITEnityDetails iDetail = null;
            TEntityDetail tDetail = _Sb.TEntityDetails.FirstOrDefault(obj => obj.n == nEntityFK);
            if (tDetail != null)
            {
                iDetail = new OTDetail(tDetail) as ITEnityDetails;
            }
            return iDetail;
        }
        ITEntity IStorageService.UpdateEntity(ITEntity iEntity, string sFname, string sMname, string sMother, string sLname, string sDOB, int jAge, string sEmail1, string sContact1, string sHouse, string sLocality, string sAddressLine, string sTaluka, string sDistrict, string sState, string sIdProof, string sIdProofPath, bool bcommit)

        {
            TEntity tEntity = (iEntity as OTEntity)._oMoniker;
            tEntity.sFname = sFname;
            tEntity.sMname = sMname;
            tEntity.sMother = sMother;
            tEntity.sLname = sLname;
            tEntity.sDOB = sDOB;
            tEntity.sState = sState;
            tEntity.jAge = jAge;
            tEntity.sEmail1 = sEmail1;
            tEntity.sContact1 = sContact1;
            tEntity.sHouse = sHouse;
            tEntity.sLocality = sLocality;
            tEntity.sAddressLine = sAddressLine;
            tEntity.sTaluka = sTaluka;
            tEntity.sDistrict = sDistrict;
            tEntity.sIdProof = sIdProof;
            tEntity.sIdProofPath = sIdProofPath;
            tEntity.dStamp = DateTime.UtcNow;
            if (bcommit)
            {
                CommitToDB();
            }
            return new OTEntity(tEntity);
        }

        ITEnityDetails IStorageService.UpdateDetail(ITEnityDetails iDetails, string sContact2, string sEmail2, string sClass, string sLiscence, string sLiscencePath, bool bcommit)
        {
            TEntityDetail tEnityDetails = (iDetails as OTDetail)._oMoniker;

            tEnityDetails.sContact2 = sContact2;
            tEnityDetails.sEmail2 = sEmail2;
            tEnityDetails.sClass = sClass;
            tEnityDetails.sLiscence = sLiscence;
            tEnityDetails.sLiscencePath = sLiscencePath;
            tEnityDetails.dStamp = DateTime.UtcNow;

            if (bcommit)
            {
                CommitToDB();
            }
            return new OTDetail(tEnityDetails);
        }
        List<ITEntity> IStorageService.GetEntityList(int jType)
        {
            List < ITEntity > lEntity = new List<ITEntity>();
            IEnumerable<TEntity> data = this._Sb.TEntities.AsEnumerable().Where(obj => obj.bStatus == false).Where(obj => obj.jType == jType);//added to avoid test iec no's
            if (data != null)
            {
                lEntity = data.Select(obj => new OTEntity(obj) as ITEntity).ToList();
            }
            return lEntity;
        }
        ITUser IStorageService.login(string Email, string Password)
        {
            ITUser iuser = null;
            TUser user = (TUser)from tuser in _Sb.TUsers
                                where tuser.sEmail == Email
                                where tuser.sPassword == Password
                                where tuser.bStatus == true
                                select tuser;
            if (user != null)
            {
                iuser = new OTUser(user) as ITUser;
            }
            return iuser;
        }
        ITUser IStorageService.setCred(string sEmail, string sPassword, long nEntityFK)
        {
            TUser user = new TUser()
            {
                nEntityFK = nEntityFK,
                sEmail = sEmail,
                sPassword = sPassword,
                bStatus = true,
            };
            _Sb.TUsers.InsertOnSubmit(user);
            if (true)
            {
                CommitToDB();
            }
            return new OTUser(user);
        }
        ITUser IStorageService.getUser(long nEntity)
        {
            ITUser iUser = null; 
            TUser tUser = _Sb.TUsers.FirstOrDefault(obj => obj.nEntityFK == nEntity);
            if (tUser != null)
            {
                iUser = new OTUser(tUser) as ITUser;
            }
            return iUser;
        }
        ITUser IStorageService.ModifyUser(ITUser user, string Email, string password)
        {
            TUser tUser = (user as OTUser)._oMoniker;

            tUser.sEmail = Email;
            tUser.sPassword = password;

            if (true)
            {
                CommitToDB();
            }
            return new OTUser(tUser);
        }
        ITDriver_Bus IStorageService.MapDriver(long nDriverFK, long nBusFK)
        {
            TDriver_Bus drierB = new TDriver_Bus()
            {
                nEntityFKDriver = nDriverFK,
                nBusFk = nBusFK,
                dStamp = DateTime.UtcNow,
                bStatus = true,
            };
            _Sb.TDriver_Bus.InsertOnSubmit(drierB);
            if (true)
            {
                CommitToDB();
            }
            return new OTDriver_Bus(drierB);
        }
        ITGuardian IStorageService.MapParent(long nStudent, long nParent)
        {
            TGuardian ps = new TGuardian()
            {
                nEntityFKParent = nParent,
                nEntityFKStudent = nStudent,
                dStamp = DateTime.UtcNow,
                bStatus = true,
            };
            _Sb.TGuardians.InsertOnSubmit(ps);
            if (true)
            {
                CommitToDB();
            }
            return new OTGuardian(ps);
        }
        ITGuardian IStorageService.GetParent(long nStudentFK)
        {
            TGuardian iD = null;
            iD = _Sb.TGuardians.FirstOrDefault(obj => obj.nEntityFKStudent == nStudentFK);
            return new OTGuardian(iD);
        }
        List<ITGuardian> IStorageService.GetChildren(long nParentFK)
        {
            List<ITGuardian> lichildren = new List<ITGuardian>();
            IEnumerable<TGuardian> data = this._Sb.TGuardians.AsEnumerable().Where(obj => obj.bStatus == true && obj.nEntityFKParent == nParentFK);//added to avoid test iec no's

            if (data != null)
            {
                lichildren = data.Select(obj => new OTGuardian(obj) as ITGuardian).ToList();
            }

            return lichildren;
        }
        ITGuardian IStorageService.GetGuardian(long nGuardian)
        {
            TGuardian iD = null;
            iD = _Sb.TGuardians.FirstOrDefault(obj => obj.n == nGuardian);
            return new OTGuardian(iD);
        }
        ITStud_Bus IStorageService.MapStudent2Bus(long nStudentFK, long nBusFKup, long nBUSFKdown, long nStopUp, long nStopDown)
        {
            TStud_Bus sB = new TStud_Bus()
            {
                nEntityFKStudent = nStudentFK,
                nBusFKup = nBusFKup,
                nBusFKdown = nBUSFKdown,
                nStopUp= nStopUp,
                nStopDown= nStopDown
            };
            _Sb.TStud_Bus.InsertOnSubmit(sB);
            if (true)
                CommitToDB();
            return new OTStud_Bus(sB);
        }
        ITStud_Bus IStorageService.GetBus2stud(long nStudentFK)
        {
            TStud_Bus iD = null;
            iD = _Sb.TStud_Bus.FirstOrDefault(obj => obj.nEntityFKStudent == nStudentFK);
            return new OTStud_Bus(iD);
        }

        List<ITAttendentDuty> IStorageService.GetDuty(long nEntityId,int day,int month,int year)
        {
            DateTime dStart = new DateTime(year,month,day);
            DateTime dStop = new DateTime(year, month, day+1);
            List<ITAttendentDuty> iDuty = new List<ITAttendentDuty>();
            IEnumerable<TAttendentDuty> data = this._Sb.TAttendentDuties.AsEnumerable().Where(obj => obj.bStatus == true).Where(obj => obj.nEntityFK==nEntityId)
                .Where(obj => obj.dStampStart==dStart).Where(obj => obj.dtampStop == dStop);//added to avoid test iec no's

            if (data != null)
            {
                iDuty = data.Select(obj => new OTAttendentDuty(obj) as ITAttendentDuty).ToList();
            }
            return iDuty;
        }

        // Istorageservice for bus starts here --> 
        ITBus IStorageService.AddBus(string sRegNo, int jOccupied,bool fCommitNow)
        {
            TBus tBus = new TBus()
            {
                sRegNo = sRegNo,
                jCapacity = jOccupied,
                dStamp = DateTime.UtcNow,
                bStatus = true
            };

            _Sb.TBus.InsertOnSubmit(tBus);
            if (fCommitNow)
            {
                CommitToDB();
            }
            return new OTBus(tBus);
        }

        ITBus IStorageService.GetBusById(long n)
        {
            ITBus iBus = null;

            TBus tBus = _Sb.TBus.FirstOrDefault(obj => obj.n == n);
            if (tBus != null)
            {
                iBus = new OTBus(tBus) as ITBus;
            }
            return iBus;
        }

        ITBus IStorageService.ModifyBus(ITBus iBus, string sRegNo, int jOccupied, bool fCommitNow)
        {
            TBus tBus = (iBus as OTBus)._oMoniker;
            tBus.sRegNo = sRegNo;
            tBus.jCapacity=jOccupied;
            OTBus objBus = new OTBus(tBus);
            if (fCommitNow)
            {
                _Sb.SubmitChanges();
            }

            return objBus;
        }
        ITBus IStorageService.getBusbyReg(string regNo)
        {
            ITBus iBus = null;

            TBus tBus = _Sb.TBus.FirstOrDefault(obj => obj.sRegNo == regNo);
            if (tBus != null)
            {
                iBus = new OTBus(tBus) as ITBus;
            }
            return iBus;
        }
        List<ITBus> IStorageService.GetAllBus()
        {
            List<ITBus> liBuses = new List<ITBus>();
            IEnumerable<TBus> data = this._Sb.TBus.AsEnumerable().Where(obj => obj.bStatus == true);//added to avoid test iec no's

            if (data != null)
            {
                liBuses = data.Select(obj => new OTBus(obj) as ITBus).ToList();
            }

            return liBuses;
        }
        //Istorage Service for bus ends here-->
        ITAttendentDuty IStorageService.AddDuty(long nBusFK, long nentityFK)
        {
            TAttendentDuty tD = new TAttendentDuty()
            {
                nBusFK = nBusFK,
                nEntityFK = nentityFK,
                dStampStart = DateTime.UtcNow,
                bStatus = true
            };
            _Sb.TAttendentDuties.InsertOnSubmit(tD);
            if (true)
            {
                CommitToDB();
            }
            return new OTAttendentDuty(tD);
        }
        ITAttendentDuty SetEndStamp(long nDuty)
        {
            TAttendentDuty tAD = _Sb.TAttendentDuties.FirstOrDefault(obj => obj.n == nDuty);
            tAD.dtampStop = DateTime.UtcNow;
            OTAttendentDuty otd = new OTAttendentDuty(tAD);
            if (true)
            {
                _Sb.SubmitChanges();
            }

            return new OTAttendentDuty(tAD);
        }
        //IStortage Service for Route Starts here-->
        ITRoute IStorageService.AddRoute(long nBusFK, float rLat1, float rLong1, float rLat2, float rLong2, string stripDetails, bool fCommitNow)
        {
            TRoute tRoute = new TRoute()
            {
                nBusFK = nBusFK,
                rLat1 = rLat1,
                rLong1 = rLong1,
                rLat2 = rLat2,
                rLong2 = rLong2,
                dStamp = DateTime.UtcNow,
                bStatus = true
            };

            _Sb.TRoutes.InsertOnSubmit(tRoute);
            if (fCommitNow)
            {
                CommitToDB();
            }
            return new OTRoute(tRoute);
        }
        ITRoute IStorageService.GetRouteByID(long n)
        {
            ITRoute iRoute = null;

            TRoute tRoute = _Sb.TRoutes.FirstOrDefault(obj => obj.n == n);
            if (tRoute != null)
            {
                iRoute = new OTRoute(tRoute) as ITRoute;
            }
            return iRoute;
        }

        ITRoute IStorageService.ModifyRoute(ITRoute iRoute, long nBusFK, float rLat1, float rLong1, float rLat2, float rLong2, string stripDetails, bool fCommitNow)
        {
            TRoute tRoute = (iRoute as OTRoute)._oMoniker;
            tRoute.nBusFK = nBusFK;
            tRoute.rLat1 = rLat1;
            tRoute.rLong1 = rLong1;
            tRoute.rLat2 = rLat2;
            tRoute.rLong2 = rLong2;
            tRoute.bStatus = true;

            OTRoute objRoute = new OTRoute(tRoute);
            if (fCommitNow)
            {
                _Sb.SubmitChanges();
            }

            return objRoute;
        }

        //Error Code

  /*      List<ITRoute> IStorageService.GetAllRoute()
        {
            List<ITRoute> liRoutes = new List<ITRoute>();
            IEnumerable<TRoute> data = this._Sb.TRoutes.AsEnumerable().Where(obj => obj.bStatus == false);//added to avoid test iec no's

            if (data != null)
            {
                liRoutes = data.Select(obj => new OTRoute(obj) as ITRoute).ToList();
            }

            return liRoutes;
        }   */
        // IStorageService Service for route ends here

        //Istorage Service for Absenty Starts here

        ITAbsenty IStorageService.GetAbsentyByID(long n)
        {
            ITAbsenty iAbsenty = null;

            TAbsentyMarking tAbsenty = _Sb.TAbsentyMarkings.FirstOrDefault(obj => obj.n == n);
            if (tAbsenty != null)
            {
                iAbsenty = new OTAbsenty(tAbsenty) as ITAbsenty;
            }
            return iAbsenty;
        }


        List<ITAbsenty> IStorageService.GetAllAbsenty(int day, int month, int year)
        {
            List<ITAbsenty> liAbsent = new List<ITAbsenty>();
            DateTime startStamp = new DateTime(year,month,day);
            DateTime endStamp = new DateTime(year, month, day+1);
            IEnumerable<TAbsentyMarking> data = this._Sb.TAbsentyMarkings.AsEnumerable().Where(obj => obj.bStatus == false).Where(obj=>obj.dStamp >startStamp).Where(obj=>obj.dStamp < endStamp);//added to avoid test iec no's

            if (data != null)
            {
                liAbsent = data.Select(obj => new OTAbsenty(obj) as ITAbsenty).ToList();
            }

            return liAbsent;
        }

        //IStorageService for Absenty Ends here 


        //Istorage Service for Attendence Starts here

       List<ITAttendence> IStorageService.GetAttendenceById(long nEntityFK, int day, int month, int year)
        {
            List<ITAttendence> iAttendence = null;
            DateTime startStamp = new DateTime(year, month, day);
            DateTime endStamp = new DateTime(year, month, day + 1);
            IEnumerable<TAttendence> data = this._Sb.TAttendences.AsEnumerable().Where(obj => obj.bStatus == false).Where(obj=> obj.nEntityFk==nEntityFK).Where(obj => obj.dStampIn >= startStamp).Where(obj => obj.dStampOut < endStamp);//added to avoid test iec no's
            //TAttendence tAttendence = _Sb.TAttendences.FirstOrDefault( obj => obj == nEntityFK && obj.dStampIn > startStamp && obj.dStampOut < endStamp && obj.1);
            if (iAttendence != null)
            {
                iAttendence = data.Select(obj => new OTAttendence(obj) as ITAttendence).ToList();
            }
            return iAttendence;
        }


        List<ITAttendence> IStorageService.GetAllAttendence(long nBusFK, int day, int month, int year)
        {
            List<ITAttendence> liAttendence = new List<ITAttendence>();
            DateTime startStamp = new DateTime(year, month, day);
            DateTime endStamp = new DateTime(year, month, day + 1);
            IEnumerable<TAttendence> data = this._Sb.TAttendences.AsEnumerable().Where(obj => obj.bStatus == false).Where(obj => obj.nBusFk == nBusFK).Where(obj => obj.dStampIn >= startStamp).Where(obj => obj.dStampOut < endStamp);//added to avoid test iec no's

            if (data != null)
            {
                liAttendence = data.Select(obj => new OTAttendence(obj) as ITAttendence).ToList();
            }

            return liAttendence;
        }

        //IStorageService for Absenty Ends here 

    }
}