$(function () {

    $("#mapDtoB").click(function () {
        mapDtoBus();
    });
});
function mapDtoBus()
{
    var g_urlPrefix = "http://localhost:59206/";
    var data = {
        fall: true
    };
    $.ajax({
        type: "GET",
        dataType: "json",
        url: g_urlPrefix + "TEntity/GetEntityById",
        data: data,
        //async: false,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {
            
                alert(resp.apiError.sErrorMessage);
            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage +  error.statusText+ resp.n);         
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    }); 
}  
