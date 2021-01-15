<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="displayBusRouts.aspx.cs" Inherits="ssbmadmin.WebForm21" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <link href="jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet" />
<script src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
<script src="jquery-ui-1.12.1/jquery-ui.js"></script>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDgnMHnt1ZiKS6XskF-Y7RR8Eq4N2nuc5Y&calback=initmap"></script>
 <link href="Content/MapView.css" rel="stylesheet" />
    <script src="Scripts/AjaxCalls/displayBusRoute.js"></script>

    <div class="header">
					<div class="logo">
    <h1><b>Bus-Route Details</b></h1>
                        </div></div>
    <br/><br/>
    <div id="map">
</div>
    <b> <span id="instructions" style="color:red"></span></b><br />
    
<div class="row">
<h4><b>Bus selected:</b></h4>

    <div class="col-sm-3" ></div>
<div class="col-sm-5" ><b>registration Number:</b><b>&nbsp<span id="RegNo" style="font-family:Arial;color:#0026ff;font-weight:bolder;" ></span></b>
</div>
</div>
    <div class="row"><div class="col-sm-3">
         <button class="btn btn-primary" type="button" id="AddNewRoute">Assign new Route</button></div>
         <div class="col-sm-3"id="tripdiv"  style="display:none"> <label>Select Round:</label>
												<select class="form-control input-sm" id="trip"required >
													<option value="">Select round</option>
                                                    <option value="1">pre-session:1</option>
                                                    <option value="2">post-session:1</option>
                                                    <option value="3">pre-session:2</option>
                                                    <option value="4">post-session-2</option>
													</select></div>
        <div class="col-sm-3"> <button class="btn btn-primary" type="button" style="display:none" id="FormRoute">Create Route</button></div>
    </div>
                    
  

</asp:Content>
