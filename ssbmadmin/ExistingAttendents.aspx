<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ExistingAttendents.aspx.cs" Inherits="ssbmadmin.WebForm11" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
 
    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>

    <script src="Scripts/AjaxCalls/AttendentModalCode.js"></script>
    <script src="Scripts/AjaxCalls/ExistingAttendent.js"></script>
    <link href="Content/modalAndOther.css" rel="stylesheet" />

    <div class="header">
					<div class="logo">
    <h1><b>Bus Attendents Information</b></h1><br/>
                        </div></div>
    <div class="row">
<h4><b>Attendent selected:</b></h4>
     <br/><div class="col-sm-2" style="display:none"><b>Attendent Id: </b><span id="n"  style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></div>
         <div class="col-sm-5"><b>Full Name:</b><span id="FullName" style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></div>
     <div class="col-sm-5"><button class="btn btn-default" type="button" id="viewBtn" onclick="document.getElementById('id02').style.display='block';" style="width:auto;">Details</button>&nbsp 
     <div id="id02" class="modal">
<div class="modal-content animate">
<div class="imgcontainer">
<span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
</div>


 <div class="container">
 <table style="width:100%" id="modelTable">
 <tr><th>Name</th><td></td></tr>
 <tr><th>Phone no.</th><td></td></tr>
  <tr><th>EmailId</th><td></td></tr>
 </table>
 <div class="container"style="background-color:#f1f1f1">
 <button type="button" id="editBtn">Edit</button>&nbsp;
     <button type="button" id="toDutyList">see Duties</button>
  </div>
  </div>
</div></div>
    </div>
         </div>

    <br/>
    <hr style=" border: 1px rgb(0,0,0);width:auto">
     <div class="row">
         <fieldset>
    <table id="dtable" class="display">
        <thead>
        <tr> <th >Select</th>
            <th style="display:none">Attendent ID</th>
            <th>Full Name</th>
             <th>Address</th>

         <!--   <th>Date of Registration</th>  -->
        </tr>
            </thead>
     </table></fieldset>
    <br />
         </div>
  <div class="row"><div class="col-sm-8"></div><button class="btn btn-primary" id="AddNew"  >New Registration</button></div>



</asp:Content>
