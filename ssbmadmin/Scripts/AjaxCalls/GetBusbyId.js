$(function () {

    $("#GetBus").click(function () {
        getBusbyId();
    });
});
function getBusbyId() {
    var g_urlPrefix = "http://localhost:59206/";

    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TBus/GetBusById",
        data:{busId: $("#busId").val()},
        async: false,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {

                alert(resp.apiError.sErrorMessage );


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
