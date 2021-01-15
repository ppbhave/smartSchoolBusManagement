$(function () {
    $("#MapstudToParent").click(function () {
        if (sessionStorage.getItem("parentPK") != "") {
            var g_urlPrefix = "http://localhost:59206/";
            var studentPK = [];
            studentPK.push(parseInt(sessionStorage.getItem("studentPK")));
            var parentPK = sessionStorage.getItem("parentPK");
            var guardianId = sessionStorage.getItem("guardianId");
            if (guardianId == "" || guardianId==null)
            {
                var data = {
                    ListudentPK: studentPK,
                    parentPK: parseInt(parentPK)
                };
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: g_urlPrefix + "TEntity/MapParent",
                    data: data,
                    //async: false,
                    success: function (resp) {
                        if (resp.apiError.jErrorVal == 0) {
                            alert(resp.apiError.sErrorMessage);
                            sessionStorage.removeItem("studentPK");
                            window.open("ExistingStudents.aspx", "_self");
                        } else { alert(resp.apiError.sErrorMessage); window.open("ExistingStudents.aspx", "_self"); }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.status);
                        alert(xhr.responseText);
                        alert(thrownError);
                        window.open("ExistingStudents.aspx", "_self");
                    }
                });
            }
            else {
                var data = {
                    nGuardianId: parseInt(guardianId),
                    nStudentPK: parseInt(sessionStorage.getItem("studentPK")),
                    nparentPK: parseInt(parentPK),
                    bStatus:true
                };
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: g_urlPrefix + "TEntity/editGuardian",
                    data: data,
                    //async: false,
                    success: function (resp) {
                        if (resp.apiError.jErrorVal == 0) {
                            alert(resp.apiError.sErrorMessage);
                            window.open("ExistingStudents.aspx", "_self");
                        } else { alert(resp.apiError.sErrorMessage); window.open("ExistingStudents.aspx", "_self"); }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.status);
                        alert(xhr.responseText);
                        alert(thrownError);
                        window.open("ExistingStudents.aspx", "_self");
                    }
                });

            }
        }
    });
   

    $("#AddNew").click(function () { window.open("ParentReg.aspx", "_self"); });
});