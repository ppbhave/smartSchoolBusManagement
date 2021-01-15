

$(function () {
    $("#updateDriver").click(function () {
        if (canSubmit) {
            UpdateEntity();
        } else { alert("Please enter valid Inputs"); }
    });

    var EntityId = sessionStorage.getItem("driverPK");
    var g_urlPrefix = "http://localhost:59206/";

    getEntity();
    getDetails();
    function getEntity()
    {
        var objToPass = {
            nEntityId: parseInt(sessionStorage.getItem("driverPK"))
        }

        $.ajax({
            type: "POST",
            dataType: "json",
            url: g_urlPrefix + "TEntity/GetEntityById",

            data: objToPass,
            async: false,
            success: function (resp) {
                if (resp.apiError.jErrorVal == 0) {
                   
                    alert(resp.apiError.sErrorMessage);
                    
                       
                        document.getElementById("sFname").value = resp.sFname+"";
                        document.getElementById("sMname").value = resp.sMname + "";
                        document.getElementById("sMother").value = resp.sMother + ""
                        document.getElementById("sLname").value = resp.sLname + ""
                        document.getElementById("jAge").value = resp.jAge + "";
                        document.getElementById("sDOB").value = resp.sDOB + "";
                        document.getElementById("sHouse").value = resp.sHouse + "";
                        document.getElementById("sLocality").value = resp.sLocality+"";
                        document.getElementById("sTaluka").value = resp.sTaluka + "";
                        document.getElementById("sDistrict").value = resp.sDistrict + "";
                        document.getElementById("sState").value = resp.sState + "";
                        document.getElementById("sAddressLine").value = resp.sAddressLine + "";
                       document.getElementById("sEmail1").value = resp.sEmail1 + "";

                        document.getElementById("sContact1").value = resp.sContact1 + "";
                      //  document.getElementById("sIdProof").value = resp.sIdProof + "";
                       // document.getElementById("sIdProof").value = "Adhar Card";
                       // document.getElementById("sIdProofPath").value = resp.sIdProofPath + "";
                       
                    

                } else {
                    // hide loader
                    alert(resp.apiError.sErrorMessage);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(xhr.responseText);
                alert(thrownError);
            }
        });

    }
    function getDetails() {
        
        var objToPass = {
            nEntityId: parseInt(sessionStorage.getItem("driverPK"))
        }

        $.ajax({
            type: "POST",
            dataType: "json",
            url: g_urlPrefix + "TDetails/GetDetailById",

            data: objToPass,
            async: false,
            success: function (resp2) {
                if (resp2.apiError.jErrorVal == 0) {

                    alert(resp2.apiError.sErrorMessage);
                    document.getElementById("sContact2").value = resp2.sContact2 + "";
                    document.getElementById("sEmail2").value = resp2.sEmail2 + "";
                   /* var C = resp2.sClass+"".split(" ");
                    document.getElementById("sClass").value = C[0] + "";
                    document.getElementById("sClass").value = C[1] + "";

                    /*  document.getElementById("sPickLat").value = resp2.sPickLat+"";
                     document.getElementById("sPickLong").value = resp2.sPickLong+"";
                      document.getElementById("sDropLat").value = resp2.sDropLat+"";
                       document.getElementById("sDropLong").value = resp2.sDropLong+"";*/
                    document.getElementById("sLiscence").value = resp2.sLiscence + "";
                   //  document.getElementById("sLiscencePath").value = resp2.sLiscencePath+""; 
                 

                } else {
                    // hide loader
                    alert(resp2.apiError.sErrorMessage);
                  
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(xhr.responseText);
                alert(thrownError);
                return { "status": false };
            }
        });
    }
   
   
});

function UpdateEntity() {
    var g_urlPrefix = "http://localhost:59206/";
    var objToPass = {
        sFname: $("#sFname").val(),
        sMname: $("#sMname").val(),
        sMother: $("#sMother").val(),
        sLname: $("#sLname").val(),
        jAge: $("#jAge").val(),
        sDOB: $("#sDOB").val(),
        sEmail1: $("#sEmail1").val(),
        sContact1: $("#sContact1").val(),
        sHouse: $("#sHouse").val(),
        sLocality: $("#sLocality").val(),
        sAddressLine: $("#sAddressLine").val(),
        sTaluka: $("#sTaluka").val(),
        sDistrict: $("#sDistrict").val(),
        sState: $("#sState").val(),
      //  sIdProof: $("#sIdProof").val(),
        sContact2: $("#sContact2").val(),
        sEmail2: $("#sEmail2").val(),
        sLiscence: $("#sLiscence").val(),
      //  sLiscencePath: $("#sLiscencePath").val(),  

        nEntityId: parseInt(sessionStorage.getItem("driverPK"))

    };

    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TEntity/UpdateEntity",

        data: objToPass,
        async: false,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {

                alert(resp.apiError.sErrorMessage+"Updation successsful");
                window.open("ExistingDrivers.aspx", "_self");
            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage + resp.n);
                window.open("ExistingDrivers.aspx", "_self");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
            window.open("ExistingDrivers.aspx", "_self");
        }
    });

   
}