<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="SetStudentStops.aspx.cs" Inherits="ssbmadmin.WebForm19" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <link href="jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet" />
<script src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
<script src="jquery-ui-1.12.1/jquery-ui.js"></script>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDgnMHnt1ZiKS6XskF-Y7RR8Eq4N2nuc5Y&calback=initmap"></script>
   
     <script src="Scripts/AjaxCalls/mapViewbasics.js"></script>
    <script src="Scripts/AjaxCalls/setStudentStops.js"></script>
    <link href="Content/MapView.css" rel="stylesheet" />

     <div class="header">
					<div class="logo">
	                 <h1><b>Pick/Drop Stops</b></h1>
					 </div>
					 </div>
    <br/>
    <div id="map">
</div>
    <input type="button" id="deleteMark" value="Delete"  />
</asp:Content>
