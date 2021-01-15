<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AddRoute.aspx.cs" Inherits="ssbmadmin.WebForm20" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <link href="jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet" />
<script src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
<script src="jquery-ui-1.12.1/jquery-ui.js"></script>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDgnMHnt1ZiKS6XskF-Y7RR8Eq4N2nuc5Y&calback=initmap"></script>

    <script src="Scripts/AjaxCalls/AddRoutes.js"></script>   
     
    <link href="Content/MapView.css" rel="stylesheet" />
    <script src="Scripts/AjaxCalls/getBusesInsideSelect.js"></script>

     <div class="header">
					<div class="logo">
	                 <h1><b>Form New Route</b></h1>
					 </div>
					 </div>
    <br/>
    <div id="map">
</div>
   <b> <span id="instructions" style="color:red"></span></b><br />
    <div class="row"><div class="col-sm-3">
         <label>For Bus:</label>
												<select class="form-control input-sm" id="nBusFkup" required >
													<option value="">Select Bus</option>
													</select>
                     </div>
        <div class="col-sm-3"> <button class="btn btn-primary" type="button" id="FormRoute">Create Route</button></div>
    </div>
                               
   
</asp:Content>
