
$(function () {

    $("#GetMapclick").click(function () {
        MapParent();
    });
 });

function MapParent() {
    var g_urlPrefix = "http://localhost:59206/";
    var objToPass = {
        ParentId:null ,
        StudentId: null,      
    };

    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TEntity/MapParent",
     
        data: objToPass,
        async: false,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {

                alert(resp.apiError.sErrorMessage);

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
}