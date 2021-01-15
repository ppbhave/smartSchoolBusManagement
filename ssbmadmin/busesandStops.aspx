<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeFile="busesandStops.aspx.cs"CodeBehind="busesandStops.aspx.cs" Inherits="ssbmadmin.WebForm23" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">


     <link href="jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet" />
<script src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
<script src="jquery-ui-1.12.1/jquery-ui.js"></script>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDgnMHnt1ZiKS6XskF-Y7RR8Eq4N2nuc5Y&calback=initmap"></script>
 <link href="Content/MapView.css" rel="stylesheet" />
    <script src="Scripts/AjaxCalls/getBusesInsideSelect.js"></script>

    <script src="Scripts/AjaxCalls/busesAndStops.js"></script>
   

    <div class="header">
	<div class="logo">
    <h1><b>Bus-stops for Selected Student</b></h1>
                        </div></div>
    <br/><br/>
    <div id="map">
</div>
    <b> <span id="instructions" style="color:red"></span></b><br />
    <div class="row">
        <div class="col-sm-3"id="ubus"><label>Bus(home-school)</label>
												<select class="form-control input-sm" id="nBusFkup" required >
													<option value=""></option>
													</select> </div>
        <div class="col-sm-3"id="dbus"> <label>Bus(school-home)</label>
												<select class="form-control input-sm" id="nBusFkdown" required >
													<option value=""></option>
													</select></div>
        <div class="col-sm-4"> 
             <button class="btn btn-primary" type="button" id="changeUp">change</button>&nbsp
            <button class="btn btn-primary"style="display:none" type="button" id="changeDown">Next ></button> &nbsp
         <button class="btn btn-warning"style="display:none" type="button" id="updateBusStops">Update Bus-Stops</button></div>
        </div>



</asp:Content>
