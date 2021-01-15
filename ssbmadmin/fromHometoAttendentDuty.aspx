<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="fromHometoAttendentDuty.aspx.cs" Inherits="ssbmadmin.WebForm16" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>

         <link href="jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet" />
<script src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
<script src="jquery-ui-1.12.1/jquery-ui.js"></script>
 
    <script src="Scripts/AjaxCalls/fromhomeattendentDuty.js"></script>

     <div class="header">
					<div class="logo">
	                 <h1><b>Attendant Duty</b></h1>
					 </div>
					 </div>

    <div class="row">
									
								
<div class="col-sm-8"><table id="attendentTable" class="table">
        <thead>
        <tr> <th >Select</th>
            <th style="display:none">ID</th>
            <th>Name</th>
            <th>Address</th>
        </tr>
            </thead>
     </table></div>


<div class="form-group" ><div class="col-sm-2">
								<label>Choose the date to see duties on that date</label>
								<input type= "text" class="form-control" id="dutyDate" required />
								</div>
										</div>
			  				
                                <div class="col-sm-2 ">
												<button class="btn btn-primary" type="button" id="getDuty">See Duties</button>

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
