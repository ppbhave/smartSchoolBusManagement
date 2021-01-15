<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="fromStudtoParent.aspx.cs" Inherits="ssbmadmin.WebForm13" %>
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
    <script src="Scripts/AjaxCalls/studParentMapping.js"></script>
   
    <div class="row"><div class="col-sm-2" ></div>
     <div class="header">
					<div class="logo">
    <h1><b>Assign to Parent</b></h1><br/>
                        </div></div></div>

    <div class="row"><div class="col-sm-3" ></div>
     <div class="col-sm-3" ><h4><b>Parent Selected:&nbsp<span id="Fullname" style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></b></h4></div>
    <div class="col-sm-5"><button class="btn btn-default" type="button" id="MapstudToParent"  style="width:auto;">Assign</button>&nbsp </div>
</div>
 <fieldset>
          
    <br/>
     <div class="row"><div class="col-sm-3" ></div>
     <div class="col-sm-6" >
    <table id="dtable" class="display">
        <thead>
        <tr> <th>Select</th>
            <th style="display:none">Parent ID</th>
            <th>Full Name</th>
             <th>Address</th>
        </tr>
            </thead>
     </table></div>
<div class="col-sm-2" ></div>
    <br /><br />
         </div>
        <div class="row"><div class="col-sm-9" ></div> <button class="btn btn-primary" id="AddNew" >New Registration</button></div>
</fieldset>


</asp:Content>
