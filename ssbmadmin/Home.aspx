<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" CodeFile="Home.aspx.cs"Inherits="ssbmadmin.Home" MasterPageFile="~/Site.Master" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

  <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js"></script>

  <!-- Add Firebase products that you want to use -->
 
    <link href="Content/cssBlocks.css" rel="stylesheet" />
    <script src="Scripts/AjaxCalls/Home.js"></script> 
 <!---    <script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>
    <script src="Scripts/AjaxCalls/FireBaseConfig.js"></script> -->

     <div class="header">
					<div class="logo">
	                 <h1><b>Messege Box</b></h1>
					 </div>
					 </div>
    
    <div class="container">
	<div class="row" style="padding-top: 10px" >
        <div class="col-md-3"  ></div>
		<div id="parentG"class="col-md-10"  >
			<h3>Grievances of parent</h3>&nbsp<button class="btn btn-primary" type="button" id="attendent">See Attendent Grievances</button>
            <div id="parentGrievances"class="overflow-auto"></div>
		</div>
		
		<div class="col-md-10"id="attendentG" style="display:none">
			<h3>Grievences of attendant</h3>&nbsp<button class="btn btn-primary" type="button" id="parent">See Parent Grievances</button>
            <div id="atendentGrievances"class="overflow-auto"></div>
		</div>
        </div></div>

</asp:content>
