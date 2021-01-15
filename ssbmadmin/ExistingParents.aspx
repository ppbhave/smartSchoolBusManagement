<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ExistingParents.aspx.cs" Inherits="ssbmadmin.WebForm9" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
 
    <!-- Starts from here-->
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>

    <link href="Content/modalAndOther.css" rel="stylesheet" />
    <script src="Scripts/AjaxCalls/existingParent.js"></script>
    <script src="Scripts/AjaxCalls/parentModalCode%20.js"></script>
    <link href="Content/modalAndOther.css" rel="stylesheet" />

    <div class="header">
					<div class="logo">
    <h1><b>Parent Information</b></h1><br/>
                        </div></div>
    <div class="row">
<h4><b>Parent selected:</b></h4>
	
     <br/>
         <div class="col-sm-5"><b>Full Name:</b><span id="Fullname" style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></div>
     <div class="col-sm-5"><button class="btn btn-default" type="button" id="viewBtn" onclick="document.getElementById('id02').style.display='block';" style="width:auto;">Details</button>&nbsp 
     <div id="id02" class="modal">
<div class="modal-content animate">
<div class="imgcontainer">
<span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
</div>


 <div class="container">
 <table style="width:100%" id="modalParent">
 <tr><th>Name</th><td></td></tr>
 <tr><th>Phone no.</th><td></td></tr>
  <tr><th>EmailId</th><td></td></tr>
 </table>
 <div class="container">
 <button type="button" id="editBtn">Edit</button><br />
<b>Wards:</b><br/>
      <table style="width:100%" id="wardtable">
            <tr><th style="display:none">GuardianId</th><th>Name</th><th>Class</th></tr>
           
  </table>
     <button type="button" id="AddWards">Add</button>
  </div>
  </div>
</div></div>
    </div>

         </div>

    <br/>
     <fieldset>
    <hr style=" border: 1px rgb(0,0,0);width:auto">
     <div class="row"> <div class="col-sm-3"></div>
     <div class="col-sm-6" >
         <table id="dtable" class="display">
        <thead>
        <tr> <th >Select</th>
            <th style="display:none">guard ID</th>
            <th>Full Name</th>
             <th>Address</th>
         <!--   <th>Date of Registration</th>  -->
        </tr>
            </thead>
     </table>
         </div>
    <br />
         </div>
         <br />
  <div class="row"> <div class="col-sm-8"></div><button class="btn btn-primary" id="AddNew" >New Registration</button></div>
             </fieldset>

</asp:Content>
