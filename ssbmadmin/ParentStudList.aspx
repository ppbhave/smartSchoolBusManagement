<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ParentStudList.aspx.cs" Inherits="ssbmadmin.WebForm10" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>

    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>  

    <script src="Scripts/AjaxCalls/DriverBusList.js"></script>
    <div class="header">
	<div class="logo">        
    <h1><b>Parent Information</b></h1><br/>
                        </div></div>
   
                       
    <div class="row">
<h4><b>Students selected:</b></h4>
	 <fieldset>
     <br/><div class="col-sm-3"><b>Relation Id: </b><span id="n"  style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></div>
         <div class="col-sm-3"><b>Parent Name:</b><span id="PFullname" style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></div>
         <div class="col-sm-3"><b>Parent Name:</b><span id="SFullname" style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></div>
     <div class="col-sm-3"><button class="btn btn-default" type="button" id="deleteBtn" >Delete</button>&nbsp 
         </div>
         </fieldset></div>
    <table id="Maptable" class="display">
        <thead>
        <tr> <th>select</th>
            <th>Record No.</th>
            <th>Parent Name</th>
            <th>Student Name</th>
            <th>Class</th>
        </tr>
            </thead>
     </table>


          <div class="row"><button class="btn btn-default" id="AddNew" >Add New relationship</button></div>
  
</asp:Content>
