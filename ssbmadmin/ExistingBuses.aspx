<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ExistingBuses.aspx.cs"CodeFile="ExistingBuses.aspx.cs" Inherits="ssbmadmin.ExistBus" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
       <script src="Scripts/AjaxCalls/ExistingBuses.js"></script>
       <link href="Content/modalAndOther.css" rel="stylesheet" />  
    <script src="Scripts/AjaxCalls/TBus.js"></script>


    <div class="header">
					<div class="logo">
    <h1><b>Bus Information</b></h1><br/>
                        </div></div>
<div class="row">

    <div class="col-sm-2" ></div>
<div class="col-sm-4" ><b>Bus selected:</b><b>&nbsp<span id="RegNo" style="font-family:Arial;color:#0026ff;font-weight:bolder;" ></span></b>

</div>
     <div class="col-sm-2" > <button class="btn btn-default" type="button"id= "seeDriver"onclick="document.getElementById('id02').style.display='block'" >view Driver information</button> 
          <div id="id02" class="modal">
<div class="modal-content animate">
<div class="imgcontainer">
<span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
</div>
 <div class="container">
  <label><b>Driver Name</b></label>
     <span id="DriverBusId" style="display:none"></span>
 <span id="driverName"></span>&nbsp
     <button id="EditDriverBus">change/add</button>
<br />
<div id="hiddenTable" style="display:none">
    <table id="driverTable">
        <tr><th>select</th><th style="display:none">id</th><th>Name</th></tr>

    </table>
     <button type="button" id= "changeD" >change</button>  </div> 
    </div>
 </div>
  </div>
    </div>
      <div class="col-sm-1" > <button class="btn btn-primary" type="button"id= "editBtn" onclick="document.getElementById('id03').style.display='block'">Edit</button> 
          <div id="id03" class="modal">
<div class="modal-content animate">
<div class="imgcontainer">
<span onclick="document.getElementById('id03').style.display='none'" class="close" title="Close Modal">&times;</span>
</div>
 <div class="container">
  <label><b>Bus Registration No.</b></label>
  <input type="text" id="sRegNo1" required>
<br />
<label><b>Capacity</b></label>
<input type="text" id="jCapacity1" required>
     <hr />
<button id="btnModify">Save</button>
 </div>
  </div>
</div>
      </div>    
    
        <div class="col-sm-2" > <button class="btn btn-warning" type="button"id= "seeRoutes">See assigned Trips</button> 
        </div>     </div>

    <br/>
    	 <fieldset>
    <div class="row"><div class="col-sm-3"></div>
        <div class="col-sm-6">
    <hr style=" border: 1px rgb(0,0,0);width:auto">
    <table id="dtable" class="display">
        <thead>
        <tr> <th>Select</th>
            <th style="display:none">ID</th>
            <th>RegNo</th>
            <th>Capacity</th>
        </tr>
            </thead>
     </table>
    <br />
         </div></div>	
              <br />
    <div class="row"><div class="col-sm-8"></div>
  <button onclick="document.getElementById('id01').style.display='block'" class="btn btn-warning">Add Bus</button>
<div id="id01" class="modal">
<div class="modal-content animate">
<div class="imgcontainer">
<span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
</div>
 <div class="container">
  <label><b>Bus Registration No.</b></label>
  <input type="text" id="sRegNo" required>
<br />
<label><b>Capacity</b></label>
<input type="text" id="jCapacity" required>
     <hr />
<button id="btnSave">Save</button>
 </div>
  </div>
</div></div>
    	 </fieldset>
   

    
</asp:Content>
