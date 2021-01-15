$(function () {
  sessionStorage.setItem("parentPK","");
 
  var guardianId = "";
  $("#viewBtn").click(function () {
      var PK = sessionStorage.getItem("parentPK") + "";
      sessionStorage.setItem("guardianId", "");
      if (PK != "") {
          // var Bus = new QueryString().get("Bus");

          var g_urlPrefix = "http://localhost:59206/";
          var data = {
              nEntityId: parseInt(PK, 10)
                     };
          $.ajax({
              type: "POST",
              dataType: "json",
              url: g_urlPrefix + "TEntity/getModalFormBasicEntity",
              data: data,
              //async: false,
              success: function (resp) {
                  if (resp.apiError.jErrorVal == 0) {
                      var table = document.getElementById("modalParent");
                      //  table.rows[0].cells[1].innerHTML = document.getElementById("Fullname");
                      table.rows[0].cells[1].innerHTML = resp.sFname + " " + resp.sMname + " " + resp.sLname;
                     
                      table.rows[1].cells[1].innerHTML = resp.sContact1+ "";
                      table.rows[2].cells[1].innerHTML = resp.sEmail1 + "";
                  }
                  else {
                      // hide loader
                      alert(resp2.apiError.sErrorMessage);
                  }
              },
              error: function (xhr, ajaxOptions, thrownError) {
                  alert(xhr.status);
                  alert(xhr.responseText);
                  alert(thrownError);
              }
          });

          var data = {
              nEntityFKParent: parseInt(PK, 10)
          };
          
          $.ajax({
              type: "POST",
              dataType: "json",
              url: g_urlPrefix + "TEntity/GetChildren",
              data: data,
              async: false,
              success: function (resp) {
                  if (resp.apiError.jErrorVal == 0) {
                      var table = document.getElementById("wardtable");
                      for (var i = 1; i < table.rows.length; i++)
                      {
                          table.deleteRow(i);
                      }
                      var row = "";
                      for (var i = 0; i < resp.LiChildren.length; i++) {
                          row += "<tr>";
                          row += '<td style="display:none">' + resp.LiChildren[i].nRecordId + "</td>";
                          row += '<td style="display:none">' + resp.LiChildren[i].nRelativeId + "</td>";
                          row += "<td>" + resp.LiChildren[i].sFname + " " + resp.LiChildren[i].sMname + " " + resp.LiChildren[i].sLname + "</td>";
                          row += "<td>" + resp.LiChildren[i].sClass + "</td>" + "<td>" + "<a id='handlerelations'>delete</a>" + "</td>" + "</tr>";
                      }

                      $("#wardtable").append(row);

                      var table = document.getElementById("wardtable");
                      var changes = table.getElementsByTagName("a");
                      for (var i = 0; i < changes.length; i++) {
                          var change = changes[i];
                          change.onclick = function () {
                              var currentRow = this.parentNode.parentNode;
                              guardianId = currentRow.getElementsByTagName("td")[0].innerHTML;
                              var nStudentPK=currentRow.getElementsByTagName("td")[1].innerHTML;
                              var PK = sessionStorage.getItem("parentPK");
                              var data = {
                                  nGuardianId: parseInt(guardianId),
                                  nStudentPK: parseInt(nStudentPK),
                                  nparentPK: parseInt(PK),
                                  bStatus:false
                              };
                              $.ajax({
                                  type: "POST",
                                  dataType: "json",
                                  url: g_urlPrefix + "TEntity/editGuardian",
                                  data: data,
                                  //async: false,
                                  success: function (resp) {
                                      if (resp.apiError.jErrorVal == 0) {
                                          alert(resp.apiError.sErrorMessage);
                                          currentRow.style.display = "none";
                                  } else { alert(resp.apiError.sErrorMessage); }
                      },
                      error: function (xhr, ajaxOptions, thrownError) {
                          alert(xhr.status);
                          alert(xhr.responseText);
                          alert(thrownError); 
                      }
                  });
                          }

                      }
                  }
                  else {
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
          return;
      }
      else alert("select Parent First");
  });

  $("#editBtn").click(function () {
     var PK= sessionStorage.getItem("parentPK") + "";
     
      if (PK == "") {
          alert("student not selected");
          return;
      }
      else {
        
          window.open("UpdateParent.aspx", "_self");
          return;
      }
  });
  $("#AddWards").click(function () {
      var PK = sessionStorage.getItem("parentPK") + "";

      if (PK == "") {
          alert("Parent not selected");
          return;
      }
      else {
          sessionStorage.setItem("guardianId", "");
          window.open("StudentTable.aspx", "_self");
          return;
      }
  });
    });


   
   
              
            

    
       