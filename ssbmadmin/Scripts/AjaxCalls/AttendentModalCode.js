$(function () {
  sessionStorage.setItem("attendentPK","");
 

  $("#viewBtn").click(function () {
      var PK = sessionStorage.getItem("attendentPK") + "";
      if (PK != "") {
          // var Bus = new QueryString().get("Bus");

          var g_urlPrefix = "http://localhost:59206/";
          var data = {
              jType: 3, /*************************************/
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
                      var table = document.getElementById("modelTable");
                      //  table.rows[0].cells[1].innerHTML = document.getElementById("Fullname");
                      table.rows[0].cells[1].innerHTML = resp.sFname + " " + resp.sMname + " " + resp.sLname;
                      table.rows[1].cells[1].innerHTML = resp.sEmail1+"";
                      table.rows[2].cells[1].innerHTML = resp.sContact1 + "";
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
          return;
      }
      else { return; }
  });

  $("#editBtn").click(function () {
      var PK = sessionStorage.getItem("attendentPK") + "";
     
      if (PK == "") {
          alert("attendent not selected");
          return;
      }
      else {
          window.open("UpdateAttendent.aspx","_self")
          return;
      }
  });
  $("#toDutyList").click(function () {
      var PK = sessionStorage.getItem("attendentPK") + "";

      if (PK == "") {
          alert("attendent not selected");
          return;
      }
      else {
          window.open("attendentDuty.aspx", "_self")
          return;
      }
  });
    });


   
   
              
            

    
       