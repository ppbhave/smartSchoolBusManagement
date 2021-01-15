 <%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="StudentTable.aspx.cs" Inherits="ssbmadmin.WebForm7" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
 
    <!-- Starts from here-->
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
    <script src="Scripts/AjaxCalls/StudentTable.js"></script>
    <script src="Scripts/AjaxCalls/studentClassFilter.js"></script>
    <link href="Content/modalAndOther.css" rel="stylesheet" />

    <div class="row"><div class="col-sm-2" ></div>
    <div class="col-sm-4" ><div class="header">
					<div class="logo">
    <h2>Students List</h2><br/>
                        </div></div></div></div>

     <div class="row"><div class="col-sm-3" ></div>
    <div class="col-sm-4" ><h4><b>Students selected:&nbsp <span id="scount" style="font-family:Arial;color:#0026ff;font-weight:bolder;border:thin rgb(0,0,0)" ></span></b></h4></div>
	 </div>   
    <br />
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

         <div class="col-sm-2" > <button class="btn btn-primary" type="button"id= "getfilteredList" onclick="filteredList()" >
													Apply
												</button> &nbsp 
             <button class="btn btn-default" type="button"id= "getList"  >
													Remove 
												</button> </div>  </div>    
          
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
  <div class="row"><div class="col-sm-7" ></div><div class="col-sm-2" > <button class="btn btn-warning" type="button"id= "mapToParent"  >
													Assign to selected Parent
												</button></div></div>
  </fieldset>
    <div class="row"><div class="col-sm-9" ></div><div class="col-sm-2" > <button class="btn btn-primary" type="button"id= "addNew"  >
													Add New Student
												</button></div></div>
</asp:Content>
