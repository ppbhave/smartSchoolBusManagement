<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ExistingDrivers.aspx.cs" Inherits="ssbmadmin.WebForm2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>

    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>  
    <script src="Scripts/AjaxCalls/ExistingDriver.js"></script>
    <script src="Scripts/AjaxCalls/driverModalCode.js"></script>
     <link href="Content/modalAndOther.css" rel="stylesheet" />

    <script>
       
    </script>

     <div class="row"><div class="col-sm-2" ></div>
    <div class="header">
					<div class="logo">
    <h1><b>Drivers List</b></h1><br/>
                        </div></div></div>

    <div class="row"><div class="col-sm-3" ></div>
       <div class="col-sm-4" > <h4><b>Driver selected:</b></h4><br/><b>Full Name:</b><span id="FullName" style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></div>
     <div class="col-sm-4"><button class="btn btn-default" type="button" id="viewBtn" onclick="document.getElementById('id02').style.display='block'"  >View Details</button>&nbsp</div>

<div id="id02" class="modal">
<div class="modal-content animate">
<div class="imgcontainer">
<span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
</div>
 <div class="container">
 <table style="width:100%" id="ModalTable">
 <tr><th>Name</th><td></td></tr>
 <tr><th>address</th><td></td></tr>
  <tr><th>Buses:</th><td style="display:none"></td><td></td><td><button type="button" id="chaneMap" >change Mapped Buses</button></td></tr>
 </table>
 <div class="container"style="background-color:#f1f1f1">
 <button type="button" id="editBtn" >Edit</button>

  </div>
  </div>
</div></div>
 </div>

    <hr>
    <fieldset>
      <div class="row"><div class="col-sm-3" ></div>
          <div  class="col-sm-6">
     <table id="dtable" class="display">
        <thead>
        <tr> <th>Select</th>
            <th style="display:none">Driver ID</th>
            <th>Full Name</th>
            <th>Address</th>
        </tr>
            </thead>
     </table>
    <br />
         </div></div></fieldset>
     <div class="row"><div class="col-sm-8" ></div><button class="btn btn-primary" id="AddNew" >New Registration</button></div>
    

    
</asp:Content>


