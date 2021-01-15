
$(function () {

  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyCpPO7M6ATiBAqeEUDdjnUL25J0yKBxVzI",
      authDomain: "ssbm-1537263358182.firebaseapp.com",
      databaseURL: "https://ssbm-1537263358182.firebaseio.com",
      projectId: "ssbm-1537263358182",
      storageBucket: "ssbm-1537263358182.appspot.com",
      messagingSenderId: "957600894975"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var GrievancesRef = database.ref().child('Grievances');
  var rowparent = "";
  var rowattendent = "";
  GrievancesRef.on("value", snapshot=> {

      alert(snapshot.child('nEntityFK').val() + "" + snapshot.child('sContent').val() + "" + snapshot.child('dStamp').val());
         
        /*  for (var i = 0; i < 4; i++) {
              var detail = getEntity(parseInt(snapshot.child('nEntityFK').val()));
              if (detail != undefined && detail.jType == 2)                  //parent
              {
                  rowparent = '<div class="row">';
                  rowparent += '<div class="col-md-8">';
                  rowparent += '<div class="chat">';
                  rowparent += '<h3 style="align:left">' + detail.sFname + ' ' + detail.sMname + ' ' + detail.sLname + '</h3>';
                  rowparent += '<p>' + snapshot.child('sContent').val() + '</p>';
                  rowparent += '<span class="time-left">' + snapshot.child('dStamp').val() + '</span>';
                  rowparent += '</div></div></div>';
                  $('#parentGrievances').append(rowparent);
                 
              }
              else if (detail != undefined && detail.jType == 1)                  //parent
              {
                  rowattendent = '<div class="row">';
                  rowattendent += '<div class="col-md-8">';
                  rowattendent += '<div class="chat">';
                  rowattendent += '<h3>' + detail.sFname + ' ' + detail.sMname + ' ' + detail.sLname + '</h3>';
                  rowattendent += '<p>' + snapshot.child('sContent').val()+ '</p>';
                  rowattendent += '<span class="time-left">'  + snapshot.child('dStamp').val()+'</span>';
                  rowattendent += '</div></div></div>';
                  $('#atendentGrievances').append(rowattendent);
              }

          }   */
      
  });

  function getEntity(nEntityId) {
      var result; var g_urlPrefix = "http://localhost:59206/";
      var objToPass = { nEntityId: parseInt(nEntityId) };
      $.ajax({
          type: "POST",
          dataType: "json",
          url: g_urlPrefix + "TEntity/GetEntityById",
          async: false,
          data: objToPass,
          success: function (resp) {
              if (resp.apiError.jErrorVal == 0) {
                  result = resp;
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
      return result;
  }
      

});