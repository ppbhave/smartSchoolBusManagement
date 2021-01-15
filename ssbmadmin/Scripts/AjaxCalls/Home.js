$(document).ready(function () {

    $('#attendent').click(function () {
        var parentG = document.getElementById("parentG");
        parentG.style.display = "none";
        var attendentG = document.getElementById("attendentG");
        attendentG.style.display = "";
   
    });
    $('#parent').click(function () {
        var attendentG = document.getElementById("attendentG");
        attendentG.style.display = "none";
        var parentG = document.getElementById("parentG");
        parentG.style.display = "";
    });

    var g_urlPrefix = "http://localhost:59206/";
   
    var data = {
        fall: true
    };
    
    $.ajax({
        type: "GET",
        dataType: "json",
        async:false,
        url: g_urlPrefix + "TGrievances/GetAllGrievances",
        data: data,
        success: function (resp) {
            result = resp;
            if (resp.apiError.jErrorVal == 0) {
                var rowparent = "";  
                var rowattendent = "";
                for (var i = 0; i < resp.grievances.length; i++) {
                    var detail = getEntity(resp.grievances[i].nEntityId);
                    if (detail != undefined && detail.jType == 2)                  //parent
                    {
                        rowparent = '<div class="row">';
                        rowparent += '<div class="col-md-8">';
                        rowparent += '<div class="chat">';
                        rowparent += '<h3 style="align:left">' + detail.sFname + ' ' + detail.sMname + ' ' + detail.sLname +'</h3>';
                        rowparent += '<p>' + resp.grievances[i].content + '</p>';
                        rowparent += '<span class="time-left">' + resp.grievances[i].dStamp + '</span>';
                        rowparent += '</div></div></div>';
                        $('#parentGrievances').append(rowparent);
                    }
                    else if (detail != undefined && detail.jType == 1)                  //parent
                    {
                        rowattendent = '<div class="row">';
                        rowattendent += '<div class="col-md-8">';
                        rowattendent += '<div class="chat">';
                        rowattendent += '<h3>' + detail.sFname + ' ' + detail.sMname + ' ' + detail.sLname + '</h3>';
                        rowattendent += '<p>' + resp.grievances[i].content + '</p>';
                        rowattendent += '<span class="time-left">' + resp.grievances[i].dStamp + '</span>';
                        rowattendent += '</div></div></div>';
                        $('#atendentGrievances').append(rowattendent);
                    }
                    
                }


            } else {
                // hide loader
                alert(resp.apiError.sErrorMessage + resp.n);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(xhr.responseText);
            alert(thrownError);
        }
    });
    
});

function getEntity(nEntityId)
{ var result;var g_urlPrefix = "http://localhost:59206/";
var objToPass ={nEntityId: parseInt(nEntityId)};
$.ajax({
    type: "POST",
    dataType: "json",
    url: g_urlPrefix + "TEntity/GetEntityById",
    async:false,
    data: objToPass,
    success: function (resp) {
        if (resp.apiError.jErrorVal == 0) {
            result=resp;
        }else {
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
 return result;
}