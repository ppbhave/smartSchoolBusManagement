<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="BusesTable.aspx.cs" Inherits="ssbmadmin.WebForm5" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

   
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
 
    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
       <script src="Scripts/AjaxCalls/BusesTable.js"></script>  
   <link href="Content/modalAndOther.css" rel="stylesheet" />

     <div class="row"><div class="col-sm-2" ></div>
    <div class="col-sm-4" ><div class="header">
					<div class="logo">
    <h1><b>Bus Information</b></h1><br/>
                        </div></div></div></div>
    <div class="row"><div class="col-sm-3" ></div>
      
<div class="col-sm-4" ><h4><b>Bus selected:</b></h4><span id="RegNo" style="font-family:Arial;color:#0026ff;font-weight:bolder;" ></span></div>
     <div class="col-sm-4 "><button class="btn btn-default" id="mapDrierBus" >Assign Bus to Driver</button>&nbsp</div>

         </div>
    <br/>
 <div class="row"><div class="col-sm-3" ></div>
     <div class="col-sm-6" >
    <table id="dtable" class="display">
        <thead>
        <tr> <th >Select</th>
            <th style="display:none">ID</th>
            <th>RegNo</th>
            <th>Capacity</th>
        </tr>
            </thead>
     </table>
    <br />
         </div></div>


    
</asp:Content>
