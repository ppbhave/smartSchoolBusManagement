<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RoutesList.aspx.cs" Inherits="ssbmadmin.WebForm4" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>

    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>  
    <script src="Scripts/AjaxCalls/RoutesList.js"></script>
   
    <div class="header">
					<div class="logo">
    <h1><b>Bus Routes List</b></h1><br/>
                        </div></div>
    <div class="row">

	 <fieldset class="border p-2">
    <legend class="w-auto"><b>Route selected:</b></legend> <br/><div class="col-sm-2"><b>Route ID:</b><span id="n" ></span></div><div class="col-sm-3"></div>
     <div class="col-sm-2"><button class="btn btn-default" id="viewBtn" onclick="redirection()">View Info</button></div>
        <div class="col-sm-2"><button class="btn btn-default" id="EditRoute" onclick="redirection()">Edit information</button></div>
        <div class="col-sm-2"><button class="btn btn-default" id="" onclick="redirection()"></button></div>  
    </fieldset> </div>
     <div class="row">
    <table id="RouteList" class="display">
        <thead>
        <tr> <th>Select</th>
            <th>Route ID</th>
            <th>start point</th>
            <th>stop point</th>
            <th>Bus assigned</th>
        </tr>
            </thead>
     </table>
    <br />
         </div>
    <div class="row"><div class="col-sm-8"><button class="btn btn-default" id="Add" >Edit information</button></div></div>


</asp:Content>
