$(function () {

    var g_urlPrefix = "http://localhost:59206/";
    var data = {
        fAll: true
    };
    $.ajax({
        type: "GET",
        dataType: "json",
        url: g_urlPrefix + "TBus/GetBus",
        //async: false,
        data: data,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {
                var row = "";
                //alert(resp.apiError.sErrorMessage );
                //     $.each(resp, function (key, value) {
                var upBus = document.getElementById("nBusFkup");
                var downBus = document.getElementById("nBusFkdown");
                var opt="",opt2="";
                for (var i = 0; i < resp.liBus.length; i++)
                {
                    
                    opt = opt + '<option value=' + resp.liBus[i].nBusId + '>' + resp.liBus[i].sRegNo + '</option>';
                    opt2 = opt2 + '<option value=' + resp.liBus[i].nBusId + '>' + resp.liBus[i].sRegNo + '</option>';
                }
                $("#nBusFkup").append(opt);
                $("#nBusFkdown").append(opt);
            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage );

            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });
  
});

   
