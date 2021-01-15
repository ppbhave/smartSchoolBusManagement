
$(function () {

    $("#saveParent").click(function () {
        if (canSubmit) {
            ParentSave();
        } else { alert("Please enter valid Inputs");}
    });
   
});

function ParentSave() {
    var g_urlPrefix = "http://localhost:59206/";
    var objToPass = {
        sFname: $("#sFname").val(),
        sMname: $("#sMname").val(),
        sMother: $("#sMother").val(),
        sLname: $("#sLname").val(),
        sDOB: $("#sDOB").val(),
        jAge: $("#jAge").val(),
        sHouse: $("#sHouse").val(),
        sLocality: $("#sLocality").val(),
        sAddressLine: $("#sAddressLine").val(),
        sTaluka: $("#sTaluka").val(),
        sDistrict: $("#sDistrict").val(),
        sState: $("#sState").val(),
      //  sIdProofPath: $("#sIdProofPath").val(),
        sIdProof: $("#sIdProof").val(),
        jType: 2,
    
        sEmail1: $("#sEmail1").val(),
        sContact1: $("#sContact1").val(),
        sEmail2: $("#sEmail2").val(),
        sContact2: $("#sContact2").val(),
    };

    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TEntity/AddCascadeEntity",

        data: objToPass,
        async: false,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {

                alert(resp.apiError.sErrorMessage);
 if(sessionStorage.getItem("studentPK")!="")
    {
        mapToStudent(resp.nEntityId);
    }
            } else {
                // hide loader
                sessionStorage.setItem("paentPK", resp.nEntityId);
                window.open("StudentTable.aspx", "_self");
            }
        },
        error: function (error) {
            // hide loader
            alert(error.status + " - " + error);
            sessionStorage.clear();
            window.open("ExistingParents.aspx", "_self");
        }
    });
}
function mapToStudent(nEntityId)
{
    var g_urlPrefix = "http://localhost:59206/";
    studentPKList = [];
    studentPKList.push(parseInt(sessionStorage.getItem("studentPK")));
    var objToPass = {
        ListudentPK: studentPKList,
        parentPK: parseInt(nEntityId)
    };

    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TEntity/MapParent",

        data: objToPass,
        async: false,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {

                alert(resp.apiError.sErrorMessage );
                sessionStorage.removeItem("studentPK");
                sessionStorage.clear();
                window.open("ExistingStudents.aspx", "_self");

            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage );
            }
        },
        error: function (error) {
            // hide loader
            alert(error.status + " - "  + error.toString);
        }
    });
}