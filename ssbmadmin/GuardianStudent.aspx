<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="GuardianStudent.aspx.cs" Inherits="ssbmadmin.WebForm8" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
 
    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
    <script src="Scripts/AjaxCalls/GuardianMapping.js"></script>
    <script src="Scripts/AjaxCalls/GuardianStudentParentList.js"></script>
    <script src="Scripts/AjaxCalls/GuardianStudentStudentList.js"></script>


    <div class="header">
					<div class="logo">
    <h1><b>Parents Information</b></h1><br/>
                        </div></div>
    <div class="row"> <fieldset>
        <div class="col-sm-2">
<h4><b>Parent selected:&nbsp <span id="n" style="font-family:Arial;color:#0026ff;font-weight:bolder;border:thin rgb(0,0,0)" ></span></b></h4></div>
	 <div class="col-sm-2"><h4><b>Full Name:&nbsp <span id="Pname" style="font-family:Arial;color:#0026ff;font-weight:bolder;border:thin rgb(0,0,0)" ></span></b></h4></div> 
   </fieldset>

    
         <div class="col-sm-2" > <button class="btn btn-default" type="button"id= "MapNewRelation" >
													Add relation
												</button>  </div>
         </div>
    
    <br/>
    <hr style=" border: 1px rgb(0,0,0);width:auto">
     <div class="row">
    <table id="dtableparent" class="display">
        <thead>
        <tr> <th>Select</th>
            <th>Parent ID</th>
            <th>Full Name</th>
             <th>Address</th>
        </tr>
            </thead>
     </table>
         </div>
    <br />

         <div class="row" > <div class="col-sm-10" > <button class="btn btn-default" id= "addparent" >
													Add New Parent
												</button>  </div>
         </div>


    <div class="header">
					<div class="logo">
    <h1><b>Students Information</b></h1><br/>
                        </div></div>
    <div class="row"><div class="col-sm-4">
<h4><b>Students selected:&nbsp <span id="scount" style="font-family:Arial;color:#0026ff;font-weight:bolder;border:thin black" ></span></b></h4></div>
	 </div>
    <div class="row">   
     <fieldset>

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
     </fieldset>
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
    <br />
        <div class="row" > <div class="col-sm-10" > <button class="btn btn-default" id= "addStudent" >
													Add New Parent
												</button>  </div></div>

</asp:Content>
