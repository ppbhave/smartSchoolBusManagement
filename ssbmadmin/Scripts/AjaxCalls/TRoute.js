

$(function () {
    $(document).on("click", "#btnSave", function () {
        SaveRoute();
    });
});

function SaveRoute() {
    var g_urlPrefix = "http://localhost:59206/"
    // Add validations first - if validated all go for below code else return error msg.

    // Start loader

    var objToPass = {
        nBusFK: $("#busno").val(),
        rLatUp: $("#LatUp").val(),
        rLongUp: $("#LongUp").val(),
        rLatDown: $("#LatDown").val(),
        rLongDown: $("#LongDown").val(),
              };

    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TRoute/AddRoute",
        data: objToPass,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {
                // hide loader
                CustomAlertWithCallback("New route has been created successfully.", function () {
                    // Redirect to list or any other function
                });

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