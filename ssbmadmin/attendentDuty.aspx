<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="attendentDuty.aspx.cs" Inherits="ssbmadmin.WebForm15" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <link href="jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet" />
<script src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
<script src="jquery-ui-1.12.1/jquery-ui.js"></script>  
     

  
    <script src="Scripts/AjaxCalls/attendentDuty.js"></script>
     <div class="header">
					<div class="logo">
	                 <h1><b>Attendant Duty</b></h1>
					 </div>
					 </div>

    <div class="row">
									
								<div class="form-group" >
								<div class="col-sm-2">
								<label>Choose the date</label>
								<input type= "text" class="form-control" id="dutyDate" required />
								</div>
										</div>
			  				
                                <div class="col-sm-2 ">
												<button class="btn btn-primary" type="button" id="getDuty">Save</button>

                                </div> </div>

     <div class="row"><div class="col-sm-3" ></div>
     <div class="col-sm-6" >
    <table id="dtable" class="table">
        <thead>
        <tr> <th >Select</th>
            <th style="display:none">ID</th>
            <th>Start Time</th>
            <th>End Time</th>
             <th>Bus</th>
        </tr>
            </thead>
     </table>
    <br />
         </div></div>
</asp:Content>
