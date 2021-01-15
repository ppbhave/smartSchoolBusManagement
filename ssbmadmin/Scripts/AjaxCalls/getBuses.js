$(function () {

    $("#GetBus").click(function () {
        GetBuses();
    });
});
function GetBuses() {
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
                for (var i = 0; i < resp.liBus.length;i++)
                {
                    row += '<tr>';
                    row += '<td>' + resp.liBus[i].sRegNo.toString() + '</td>';
                    row += '<td>' + resp.liBus[i].jCapacity.toString() + '</td>';
                    row += '<td>' + resp.liBus[i].jCapacity.toString() + '</td>';
                }
                   
                 
             //   });
                $('#dtable').append(row);
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

    /*  $.ajax({
           type: "GET",
          dataType: "application/json",
          url: g_urlPrefix + "TEntity/GetEntityById",
          data: objToPass,
          async: false,
          success: function (resp) {
              if (resp.apiError.jErrorVal == 0) {
                    alert(resp.data+"");
                  alert(resp.apiError.sErrorMessage);
                
  
              } else {
                  // hide loader
                  alert(resp.apiError.sErrorMessage +  error.statusText+ resp.n);
                  alert(resp.data+"");
              }
          },
          error: function (error) {
              // hide loader
              alert(error.status + " - " +error.toString());
              
          }
      }); */
}
