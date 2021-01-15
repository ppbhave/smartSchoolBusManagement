
$(function () {
    $("#AddNew").click(function () { sessionStorage.removeItem("guardianPK");
        window.open("GuardianMap.aspx", "_self");
    });

    var g_urlPrefix = "http://localhost:59206/";
   
    var data = {
       fall:true
    };
    
    $.ajax({
        type: "GET",
        dataType: "json",
        url: g_urlPrefix + "TEntity/GetParentStudentList",
        //async: false,
        data: data,
        success: function (resp) {
            result = resp;
            if (resp.apiError.jErrorVal == 0) {
                var row = "";  
              
                for (var i = 0; i < resp.LiEntity.length; i++) {
                    row += '<tr>'; 
                    row += '<td></td>';
                    row += '<td>' + resp.LiEntity[i].n + '</td>';
                    row += '<td>' + resp.LiEntity[i].sParentName + '</td>';
                    row += '<td>' + resp.LiEntity[i].sStudentName+'</td>';
                    row += '<td>' + resp.LiEntity[i].sClass + '</td>';
                  
                }
              
                $('#dtable').append(row);
                var table = $('#dtable').DataTable({
                   "columnDefs": [{
                        "targets": 0,
                       "data":null,
                       "defaultContent": "<input type='checkbox'>"
                    }
                   ]                   
                });
                //view onclick
                $("#deleteBtn").click(function () {
                    if(document.getElementById("n").innerHTML == ""){alert("no record selected");return;}
                    else{var data = {
                        nGuardianId: paresInt(document.getElementById("n").innerHTML,10),
                        bStatus:false
                    };
                        document.getElementById("n").innerHTML = "";document.getElementById("pFullname").innerHTML = "";document.getElementById("sFullname").innerHTML = "";
                        $.ajax({
                            type: "POST",
                            dataType: "json",
                            url: g_urlPrefix + "TEntity/editGuardian",
                            //async: false,
                            data: data,
                            success: function (resp) {
                                if (resp.apiError.jErrorVal == 0) { alert("Record deleted!!"); location.reload(); }
                                else { alert("resp.apiError.jErrorVal"); }
                            },
                                function (xhr, ajaxOptions, thrownError) {
                                    alert(xhr.status);
                                    alert(xhr.responseText);
                                    alert(thrownError);
                                }
                            });
                    }
                    });
              
                //row selection    
                var selcted=null;
                var table = document.getElementById('dtable'), row1;
                for( var i=1; i< table.rows.length; i++)
                {
                    table.rows[i].cells[0].onclick = function()
                    {
                       // getBus(this.parentElement.cells[1].innerHTML);
                        if (selcted == null) { selcted = this; } else { selcted.parentElement.style.backgroundColor = "white"; selcted.style.backgroundColor = "white";  selcted = this; }
                                this.parentElement.style.backgroundColor = "yellow";
                                this.style.backgroundColor = "yellow";
                                document.getElementById("n").innerHTML = this.parentElement.cells[1].innerHTML;
                                document.getElementById("PFullname").innerHTML = this.parentElement.cells[2].innerHTML;
                                document.getElementById("SFullname").innerHTML = this.parentElement.cells[3].innerHTML;
                                sessionStorage.setItem("guardianPK", document.getElementById("n").innerHTML);
                    }
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
});

 

function seEDriverDetails(result) {
    var obj = {
        id: document.getElementById("n").innerHTML
    };
    for (var k = 0; k < result.LiEntity.length; k++) {
        if (obj.id == result.LiEntity[k].n) {
            alert(result.LiEntity[k]); break;
        }
    }
}