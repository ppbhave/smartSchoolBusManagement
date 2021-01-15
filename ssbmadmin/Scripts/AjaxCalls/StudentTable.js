$(function () {

    $("#addNew").click(function () { window.open("Studentadd.aspx", "_self"); })
    var result;
    var g_urlPrefix = "http://localhost:59206/";
    var data = {
        jType: 4
    };
    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TEntity/GetEntityList",
        data: data,
        //async: false,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {
                
                var row = "";
                for (var i = 0; i < resp.LiEntity.length; i++) {
                    row += '<tr>';
                    row += '<td></td>';
                    row += '<td style="display:none;">' + resp.LiEntity[i].nEntityId + '</td>';
                    row += '<td>' + resp.LiEntity[i].sFname + " " + resp.LiEntity[i].sMname + " " + resp.LiEntity[i].sLname + '</td>';
                    row += '<td>' + resp.LiEntity[i].sLocality + "," + resp.LiEntity[i].sTaluka + "," + resp.LiEntity[i].sDistrict + '</td>';
                    row += '<td>' + resp.LiEntity[i].sClass + '</td>';
                }
                $('#dtable').append(row);
                var table = $('#dtable').DataTable({
                    "columnDefs": [{
                        "targets": 0,
                        "data": null,
                        "defaultContent": "<input type='checkBox'>"
                    }]
                });
                var table = document.getElementById("dtable");
                var checkboxes = table.getElementsByTagName("input");
                var count = 0;
                document.getElementById("scount").innerHTML = count;
                for (var i = 0; i < checkboxes.length; i++) {
                    var checkbox = checkboxes[i];
                    checkbox.onclick = function () {
                        var currentRow = this.parentNode.parentNode;
                        var thisColumn = currentRow.getElementsByTagName("td")[0];
                        if (this.checked) { count = count + 1; thisColumn.style.backgroundColor = "yellow"; currentRow.style.backgroundColor = "yellow"; document.getElementById("scount").innerHTML = count; }
                        else { count = count - 1; thisColumn.style.backgroundColor = "white"; currentRow.style.backgroundColor = "white"; document.getElementById("scount").innerHTML = count; }
                    };
                }

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
    $("#mapToParent").click(function () {
        var parentPK = sessionStorage.getItem("parentPK");
        var table = document.getElementById("dtable");
        var studentPKlist=[];
        var checkboxes = table.getElementsByTagName("input");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked == true) {
                studentPKlist.push(checkboxes[i].parentNode.parentNode.getElementsByTagName("td")[1].innerHTML);
            }
        }
            if(studentPKlist.length>0)
            {
                var g_urlPrefix = "http://localhost:59206/";
                var data = {
                    ListudentPK: parseInt(studentPKlist),
                    parentPK:parentPK
                };
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: g_urlPrefix + "TEntity/MapParent",
                    data: data,
                    //async: false,
                    success: function (resp) {
                        if (resp.apiError.jErrorVal == 0) {
                            alert(resp.apiError.sErrorMessage+" try again!!");
                            window.open("ExistingParents.aspx", "_self");
                        }
                        else {
                            // hide loader
                            alert(resp.apiError.sErrorMessage  );
                            window.open("ExistingParents.aspx", "_self");
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.status);
                        alert(xhr.responseText);
                        alert(thrownError);
                        window.open("ExistingParents.aspx", "_self");
                    }
                });
            }
    })
});





