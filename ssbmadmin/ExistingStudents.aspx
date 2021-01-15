<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ExistingStudents.aspx.cs" Inherits="ssbmadmin.WebForm6" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
 
    <!-- Starts from here-->
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
    <script src="Scripts/AjaxCalls/studentClassFilter.js"></script>
    <link href="Content/modalAndOther.css" rel="stylesheet" />
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDgnMHnt1ZiKS6XskF-Y7RR8Eq4N2nuc5Y&calback=initmap"></script>
    <script src="Scripts/AjaxCalls/studentModalCode.js"></script>
    <script src="Scripts/AjaxCalls/existingStudents.js"></script>

 <div class="row"><div class="col-sm-2" ></div>
    <div class="col-sm-4" ><div class="header">
					<div class="logo">
    <h2>Students Information</h2><br/>
                        </div></div></div></div><br />
 <div class="row">
    <div class="col-sm-8" ><h4><b>Full Name:&nbsp<span id="Fullname" style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></b></h4></div>
	 <button class="btn btn-default" type="button" id="viewBtn" onclick="document.getElementById('id02').style.display='block';" style="width:auto;">Details</button>

<div id="id02" class="modal">
<div class="modal-content animate">
<div class="imgcontainer">
<span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
</div>
 <div class="container">
 <table style="width:100%" id="generalModal">
 <tr><th>General Details</th></tr>
  <tr><th>Name</th><td></td></tr>
  <tr><th>Class</th><td></td><th>Age</th><td></td></tr> 
<tr><td><button type="button" id="editBtn" >Edit</button></td></tr>
 </table>
     <br />
    <div class="row"><div class="col-sm-2" ><b>parent:</b><span id="ParentFullname" style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></div>
 <br/><button type="button" id="manageParent" >change</button>
        

 
  </div>
</div></div></div>
     
    &nbsp<button class="btn btn-info" type="button" id="attendence">View Attendence</button>
    &nbsp<button class="btn btn-warning" type="button" id="busAndStops"onclick="document.getElementById('id03').style.display='block';" style="width:auto;">buses and stops</button>
     
     <div id="id03" class="modal">
<div class="modal-content animate">
<div class="imgcontainer">
<span onclick="document.getElementById('id03').style.display='none'" class="close" title="Close Modal">&times;</span>
</div>
 <div class="container">
 <div id="map" style="width:500px;height:500px"></div> 

     <br />
    <div class="row"><div class="col-sm-3" ><b>Bus(home-school):</b><span id="upBus" style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></div>
        <div class="col-sm-3" ><b>Bus(school-bus):</b><span id="downBus" style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></div>
      <br />  <div class="col-sm-6" > </div><button type="button" id="updateStops">change/Add</button><button type="button" id="trackL">Track Location</button>
  </div>
</div></div></div>
     </div>
    <br/>
    <fieldset>
      <div class="row"><div class="col-sm-3" ></div>
    <div class="col-sm-1" ><b>Filter Records:</b>&nbsp</div>
     
				<div class="col-sm-2" >   
                    <select class="form-control input-sm" id="sClass" >
													<option value="">Select Class</option>
													<option value="LKG">LKG</option>
													<option value="UKG">UKG</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
													<option value="6">6</option>
													<option value="7">7</option>
													<option value="8">8</option>
													<option value="9">9</option>
													<option value="10">10</option>
												</select></div>

                <div class="col-sm-2" > 
                   <select class="form-control input-sm" id="sDiv">
													<option value="">Select Division</option>
													<option value="A">A</option>
													<option value="B">B</option>
													<option value="C">C</option>
													<option value="D">D</option>
												</select></div>

         <div class="col-sm-2" > <button class="btn btn-primary" type="button"id= "getfilteredList">
													Apply
												</button> &nbsp 
             <button class="btn btn-default" type="button"id= "getList">
													Remove 
												</button> </div></div>    
          
    <br/>
     <div class="row"><div class="col-sm-3" ></div>
     <div class="col-sm-6" >
    <table id="dtable" class="display">
        <thead>
        <tr> <th>Select</th>
            <th style="display:none">Student ID</th>
            <th>Full Name</th>
             <th>Address</th>
            <th>Class</th>
    
        </tr>
            </thead>
     </table></div>
<div class="col-sm-2" ></div>
    <br /><br />
         </div>
        <div class="row"><div class="col-sm-8" ></div> <button class="btn btn-primary" id="AddNew" >New Registration</button></div>
  </fieldset>
</asp:Content>
