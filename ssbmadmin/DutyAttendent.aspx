<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DutyAttendent.aspx.cs" Inherits="ssbmadmin.WebForm14" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
 
    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>


     <div class="header">
					<div class="logo">
    <h1><b>Bus Attendents Duty</b></h1><br/>
                        </div></div>
<br />
    <div class="row"><div class="col-sm-3"></div>
        <div class="col-sm-3"><label>Select date</label>
						<input type= "text" class="form-control" id="dutyDate" required />
								</div> </div>
   
</asp:Content>
