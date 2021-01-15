$(function () {
    sessionStorage.setItem("studentPK", "");
    sessionStorage.setItem("guardianId", "");
    sessionStorage.setItem("studBusPK", "");
    sessionStorage.setItem("uplatlng", "");
    sessionStorage.setItem("downlatlng", "");
    sessionStorage.setItem("upStopId", "");
    sessionStorage.setItem("downStopId", "");
    var table = document.getElementById("generalModal");
    table.rows[1].cells[1].innerHTML = "";
    table.rows[2].cells[1].innerHTML = "";
    table.rows[2].cells[3].innerHTML = "";
    document.getElementById("upBus").innerHTML = "";
    document.getElementById("downBus").innerHTML = "";
    var studBusId;
    var guardianId="",markerup,markerdown;
    var studBusId;
    $("#manageParent").click(function () {
        var PK = sessionStorage.getItem("studentPK");
        if (PK == "") {
            alert("student not selected");
            return;
        }
        else {
            if (guardianId != "")
            {
                sessionStorage.setItem("guardianId", guardianId);
            }
            window.open("fromStudtoParent.aspx", "_self");
            return;
        }
    });
  $("#editBtn").click(function () {
      var PK=sessionStorage.getItem("studentPK");

      if (PK == "") {
          alert("student not selected");
          return;
      }
      else {
          window.open("UpdateStudent.aspx", "_self");
          return;
      }
  });
  $("#busAndStops").click(function () {
      document.getElementById("upBus").innerHTML = "";
      document.getElementById("downBus").innerHTML = "";
      sessionStorage.setItem("studBusPK", "");
      if (sessionStorage.getItem("studentPK") != "") {
          
          var g_urlPrefix = "http://localhost:59206/";
          var mapOptions = {
              center: new google.maps.LatLng(17.0117, 73.3363),
              zoom: 13,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = new google.maps.Map(document.getElementById("map"), mapOptions);
          studentPK = parseInt(sessionStorage.getItem("studentPK"));
          var data = {
              nEntityId: studentPK
          };
          $.ajax({
              type: "POST",
              dataType: "json",
              url: g_urlPrefix + "TEntity/GetBusStud",
              //async: false,
              data: data,
              success: function (resp) {
                  if (resp.apiError.jErrorVal == 0) {
                       
                       document.getElementById("upBus").innerHTML = getBusReg(resp.nBusFKup);
                       document.getElementById("downBus").innerHTML = getBusReg(resp.nBusFKdown);
                       var latln = resp.upLatLong.split("|");
                       var location = new google.maps.LatLng(parseFloat(latln[0]), parseFloat(latln[1]));
                       markerup = new google.maps.Marker({
                           position: location,

                           map: map,
                           icon: {
                               url: "http://maps.google.com/mapfiles/kml/paddle/P.png"
                           }
                       });
                       markerup.nStopId = resp.nStopUp;
                       google.maps.event.addListener(markerup, "click", function (e) {
                           var content = "Pick-stop for bus: " + markerup.position.lat() + "|" + markerup.position.lng();
                           var infoWindow = new google.maps.InfoWindow({
                               content: content
                           });
                           infoWindow.open(map, markerup);
                       });
                       
                       var latln = resp.downLatLong.split("|");
                       location = new google.maps.LatLng(parseFloat(latln[0]), parseFloat(latln[1]));
                       markerdown = new google.maps.Marker({
                           position: location,
                           map: map,

                           icon: {
                               url: "http://maps.google.com/mapfiles/kml/paddle/D.png"
                           }
                       });
                       markerdown.nStopId = resp.nStopDown;
                       google.maps.event.addListener(markerdown, "click", function (e) {
                           var content = "Drop-stop for bus: " + markerdown.position.lat() + "|" + markerdown.position.lng();
                           var infoWindow = new google.maps.InfoWindow({
                               content: content
                           });
                           
                           infoWindow.open(map, markerdown);
                       });

                       sessionStorage.setItem("studBusPK", resp.nRecordId);
                       sessionStorage.setItem("uplatlng", markerup.position.lat() + "|" + markerup.position.lng());
                       sessionStorage.setItem("downlatlng", markerdown.position.lat() + "|" + markerdown.position.lng());
                       sessionStorage.setItem("upStopId", resp.nStopUp);
                       sessionStorage.setItem("downStopId", resp.nStopDown);

                  } else {
                      alert(resp.apiError.sErrorMessage);
                      sessionStorage.setItem("studBusPK", "");
                      sessionStorage.setItem("uplatlng", "");
                      sessionStorage.setItem("downlatlng", "");
                      sessionStorage.setItem("upStopId", "");
                      sessionStorage.setItem("downStopId", "");
                  }
              },
              error: function (xhr, ajaxOptions, thrownError) {
                  alert(xhr.status);
                  alert(xhr.responseText);
                  alert(thrownError);
                  sessionStorage.setItem("studBusPK", "");
                  sessionStorage.setItem("uplatlng", "");
                  sessionStorage.setItem("downlatlng", "");
                  sessionStorage.setItem("upStopId", "");
                  sessionStorage.setItem("downStopId", "");

              }
          });
      }
      else alert("Choose student first");
  });
  $("#updateStops").click(function () {
      if (sessionStorage.getItem("studentPK") != "") {

          window.open("busesandStops.aspx");
      } else { alert("Student not selected");}
  });
  $("#viewBtn").click(function () {
      document.getElementById("ParentFullname").innerHTML = "";
      var table = document.getElementById("generalModal");
      table.rows[1].cells[1].innerHTML = "";
      table.rows[2].cells[1].innerHTML = "";
      table.rows[2].cells[3].innerHTML = "";
      
      var PK = sessionStorage.getItem("studentPK") + "";
      if (PK != "") {
          // var Bus = new QueryString().get("Bus");

          var g_urlPrefix = "http://localhost:59206/";
          var data ={
              nEntityId: parseInt(PK,10)
          };
          $.ajax({
              type: "POST",
              dataType: "json",
              url: g_urlPrefix + "TEntity/getModalFormBasicEntity",
              data: data,
              //async: false,
              success: function (resp) {
                  if (resp.apiError.jErrorVal == 0) {
                      var table = document.getElementById("generalModal");
                      table.rows[1].cells[1].innerHTML = resp.sFname + " " + resp.sMname + " " + resp.sLname;
                      table.rows[2].cells[1].innerHTML = resp.sClass + "";
                      table.rows[2].cells[3].innerHTML = resp.jAge + "";
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
              studentPK: parseInt(PK, 10)
          };
          $.ajax({
              type: "POST",
              dataType: "json",
              url: g_urlPrefix + "TEntity/GetParent",
              data: data,
              async: false,
              success: function (resp) {
                  if (resp.apiError.jErrorVal == 0) {
                      document.getElementById("ParentFullname").innerHTML = resp.parent.sFname + " " + resp.parent.sMname + " " + resp.parent.sLname;
                      if (resp.parent.nRecordId != null || resp.parent.nRecordId != undefined)
                      guardianId = resp.parent.nRecordId;
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
      else return;
  });
  $("#trackL").click(function () {
      if(sessionStorage.getItem("studentPK")==""||sessionStorage.getItem("studentPK")==null)
      {
          alert("Select student first");
      } else {
          window.open("TrackLocationByBus.aspx","_self");
      }
  });
 
    });


function getBusReg(busId)
{
    var g_urlPrefix = "http://localhost:59206/";
    var busPK = parseInt()
    var data = {
        nBusId: parseInt(busId)
    };
    var regNo="";
    $.ajax({
        type: "POST",
        dataType: "json",
        url: g_urlPrefix + "TBus/GetBusById",
        async: false,
        data: data,
        success: function (resp) {
            if (resp.apiError.jErrorVal == 0) {
                regNo = resp.sRegNo + "";
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
    return regNo;
}
   
              
            

    
       