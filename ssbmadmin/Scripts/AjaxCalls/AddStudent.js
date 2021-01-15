
$(function () {

    $("#saveStudent").click(function () {
        saveStud();
    });
});

function saveStud() {
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
        sIdProofPath: "",
        jType: 4,
        sClass: $("#sClass").val()+" "+$("#sDiv").val(), 
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
                if (sessionStorage.getItem("parentPK") != "" || sessionStorage.getItem("parentPK")==null) {
                    
                    sessionStorage.setItem("studentPK",resp.nEntityId);
                    sessionStorage.setItem("uplatlng","");
                    sessionStorage.setItem("downlatlng","");
                    sessionStorage.setItem("studBusPK","");
                    window.open("busesAndStops.aspx");
                    mapToParent(resp.nEntityId);
                    window.open("ExistingStudents.aspx", "_self");
                }
                else {
                  sessionStorage.setItem("studentPK", resp.nEntityId);
                    sessionStorage.setItem("uplatlng", "");
                    sessionStorage.setItem("downlatlng", "");
                    sessionStorage.setItem("studBusPK", "");
                    window.open("busesAndStops.aspx");
                    window.open("fromStudtoParent.aspx", "_self");
                }

            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage  );
                window.open("ExistingStudents.aspx", "_self");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
            redirection();
        }
    });

function mapToParent(nEntityId) {
    var ListudentPK = []; ListudentPK.push(nEntityId);
    var g_urlPrefix = "http://localhost:59206/";
    var objToPass = {
        ListudentPK: parseInt(ListudentPK),
        parentPK: parseInt(sessionStorage.getItem("parentPK"))
    };

    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TEntity/MapParent",

        data: objToPass,
        async: false,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {

                alert(resp.apiError.sErrorMessage + "(Successful)");
                sessionStorage.setItem("parentPK", "");


            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage );
                window.open("StudentTable.aspx", "_self");
            }
        },
        error: function (error) {
            // hide loader
            alert(error.status + " - "  + error.toString);
            window.open("existingParent.aspx", "_self");
        }
    });
}
    }