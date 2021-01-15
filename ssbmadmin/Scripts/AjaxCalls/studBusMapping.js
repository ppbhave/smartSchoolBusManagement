$(function () {


    $("#mapBusStudent").click(function () {
        var studentPKList=[];
        var table = document.getElementById('dtablestudent');
        var checkboxes = table.getElementsByTagName("input");
        for (var i = 0; i < checkboxes.length; i++) {
            var checkbox = checkboxes[i];
            if (checkbox.checked) { studentPKList.push(parseInt(checkbox.parentNode.parentNode.getElementsByTagName("td")[1].innerHTML)); }
        }
        sessionStorage.setItem("studentPKList", studentPKList);
        alert(sessionStorage.getItem("studentPKList"));

        var g_urlPrefix = "http://localhost:59206/";
        var data = {
            nEntityFK: studentPKList,
            nBusFKup: parseInt(document.getElementById("nBusFKup").value),
            nBusFKdown: parseInt(document.getElementById("nBusFKdown").value)
        };

        $.ajax({
            type: "POST",
            dataType: "json",
            url: g_urlPrefix + "TEntity/MapStudBus",
            data: data,
            //async: false,
            success: function (response) {
                if (response.apiError.jErrorVal == 0) {
                    alert("Mapping Successful");
                    sessionStorage.removeItem("studentPKList");
                        location.reload();}
                else { alert(response.apiError.sErrorMessage); location.reload(); }
            },error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });

    });
});
   
