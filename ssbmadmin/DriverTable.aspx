<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DriverTable.aspx.cs" Inherits="ssbmadmin.DriverTable" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

   
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
       <link href="Content/modalAndOther.css" rel="stylesheet" />  

     <script src="Scripts/AjaxCalls/DriverTable.js"></script> 
    <div class="header">
	<div class="logo">
    <h1><b>Driver Information</b></h1><br/>
    </div></div>
     
    <div class="row">
         
  <h4><b>Driver selected:</b></h4>
	
     <br/><div class="col-sm-2"><span id="n" style="display:none"></span></div><div class="col-sm-5"><b>Full Name:</b><span id="FullName" style="font-family:Arial;color:#0026ff;font-weight:bolder;"></span></div>
     <div class="col-sm-4"><button class="btn btn-warning" id="mapBusDriver" >Assign</button>&nbsp
       </div>
   
    </div>
     <fieldset class="border p-2">
    <table id="dtable" class="display">
        <thead>
        <tr> <th>Select</th>
            <th style="display:none">Driver ID</th>
            <th>Full Name</th>
             <th>Address</th>
        </tr>
            </thead>
     </table>
         </fieldset>
    <br />

  </asp:Content>