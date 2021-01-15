$(function () {
  sessionStorage.setItem("driverPK","");
 

  $("#viewBtn").click(function () {
      var PK = sessionStorage.getItem("driverPK") + "";
      if (PK != "") {
         

          var g_urlPrefix = "http://localhost:59206/";
          var data = {
              jType: 3, 
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
                      var table = document.getElementById("ModalTable");
                      table.rows[0].cells[1].innerHTML = resp.sFname + " " + resp.sMname + " " + resp.sLname;
                      table.rows[1].cells[1].innerHTML = resp.sLocality + " " + resp.sTaluka + " " + resp.sDistrict;
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
    
           var data = {
              jType: 3, 
              nEntityId: parseInt(PK, 10)
           };
           $.ajax({
               type: "POST",
               dataType: "json",
               url: g_urlPrefix + "TEntity/getBusOfDriver",
               data: data,
               //async: false,
               success: function (resp) {
                   if (resp.apiError.jErrorVal == 0) {
                       var table = document.getElementById("ModalTable");
                       if (resp.nDriverBusId != null || resp.nDriverBusId != 0) {
                           table.rows[2].cells[1].innerHTML = resp.nDriverBusId;
                           table.rows[2].cells[2].innerHTML = resp.sRegNo;
                       } else {
                           table.rows[2].cells[1].innerHTML ="";
                           table.rows[2].cells[2].innerHTML = "";
                       }
                       sessionStorage.setItem("DriverBusId", resp.nDriverBusId);
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
      else { return; }
  });

  $("#editBtn").click(function () {
     var PK= sessionStorage.getItem("driverPK");
     
      if (PK == "" || PK==null) {
          alert("driver not selected");
          return;
      }
      else {
          window.open("UpdateDriver.aspx","_self");
          return;
      }
  });
  $("#chaneMap").click(function () {
      var PK = sessionStorage.getItem("driverPK") + "";

      if (PK == "" || PK==null) {
          alert("student not selected");
          return;
      }
      else {
          window.open("BusesTable.aspx", "_self");
          return;
      }
  });
    });


   
   
              
            

    
       