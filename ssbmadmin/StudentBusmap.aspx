<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="StudentBusmap.aspx.cs" Inherits="ssbmadmin.WebForm12" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

        
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
    <script src="Scripts/AjaxCalls/studBusMapping.js"></script>
    <script src="Scripts/AjaxCalls/getBusesInsideSelect.js"></script>
    <script src="Scripts/AjaxCalls/GuardianStudentStudentList.js"></script>

 
    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>


  <div class="header">
					<div class="logo">
    <h1><b>Add Students to Buses</b></h1><br/>
                        </div></div><hr />
     <fieldset>
       <div class="row"> <div class="col-sm-2">
<h4><b>Students selected:<span id="sCount" style="font-family:Arial;color:#0026ff;font-weight:bolder;border:thin rgb(0,0,0)" ></span></b></h4></div> </div>
	<div class="row"> <div class="col-sm-2"><label>Bus No.(pickup)</label>
<select class="form-control input-sm" id="nBusFKup" required ></select></div> 
     <div class="col-sm-2"><label>Bus No.(Drop)</label>
<select class="form-control input-sm" id="nBusFKdown" required ></select></div>
         <div class="col-sm-2" > <button class="btn btn-primary" type="button"id= "mapBusStudent" >
													Assign 
												</button>  </div>
	</div> 
   </fieldset>

    
        
        


    <div class="row">   


    <div class="col-sm-2" ><b>Filter Records:</b>&nbsp</div>
     
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

        <div class="col-sm-2" >    <select class="form-control input-sm" id="sDiv">
													<option value="">Select Division</option>
													<option value="A">A</option>
													<option value="B">B</option>
													<option value="C">C</option>
													<option value="D">D</option>
												</select></div>

         <div class="col-sm-2" > <button class="btn btn-default" id= "getList" disabled>
													search
												</button>  </div>

         </div>

    <br/>
    <hr style=" border: 1px rgb(0,0,0);width:auto">
     <div class="row">
    <table id="dtablestudent" class="display">
        <thead>
        <tr> <th>Select</th>
            <th>Student ID</th>
            <th>Full Name</th>
             <th>Address</th>
            <th>Class</th>
        </tr>
            </thead>
     </table></div>
</asp:Content>
