<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TrackLocationByBus.aspx.cs" Inherits="ssbmadmin.WebForm22" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

     <link href="jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet" />
<script src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
<script src="jquery-ui-1.12.1/jquery-ui.js"></script>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDgnMHnt1ZiKS6XskF-Y7RR8Eq4N2nuc5Y&calback=initmap"></script>
 <link href="Content/MapView.css" rel="stylesheet" />
    <script src="Scripts/AjaxCalls/getBusesInsideSelect.js"></script>

    <script src="Scripts/AjaxCalls/TrackBusLocation.js"></script>
   

    <div class="header">
	<div class="logo">
    <h1><b>Track Bus Location</b></h1>
                        </div></div>
    <br/><br/>
    <div id="map">
</div>
    <b> <span id="nBusFK" style="color:blue"></span></b><br />
    <div class="row">
        <div class="col-sm-3"id="bus"><label>Bus to track</label>
												<select class="form-control input-sm" id="nBusFkup" required >
													<option value=""></option>
													</select> </div>
        
   
          </div>

</asp:Content>
