

$(function () {

    $("#saveAttendent").click(function () {
        if (canSubmit) {
            AttendentSave();
        } else { alert("Please enter valid Inputs"); }
    });
});

function AttendentSave() {
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
        sIdProof: $("#sIdProof").val(),
       // sIdProofPath: $("#sIdProofPath").val(),
        jType: 1,
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

                alert("Registration successfull");
                window.open("ExistingAttendents.aspx", "_self");

            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage  + resp.n);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });
}