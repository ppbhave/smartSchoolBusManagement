<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AttendenceRecords.aspx.cs" Inherits="ssbmadmin.WebForm17" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery-1.10.2.min.js"></script>
    <!-- Starts from here-->
             <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDgnMHnt1ZiKS6XskF-Y7RR8Eq4N2nuc5Y&calback=initmap"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>

     <link href="jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet" />
<script src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
<script src="jquery-ui-1.12.1/jquery-ui.js"></script> 

 <link href="Content/modalAndOther.css" rel="stylesheet" />
    <script src="Scripts/AjaxCalls/getBusesInsideSelect.js"></script>
    <script src="Scripts/AjaxCalls/AttendenceRecords.js"></script>

     <div class="header">
					<div class="logo">
	                 <h1><b>Attendance Records</b></h1>
					 </div>
					 </div>
    <div class="row"><div class="col-sm-2"></div>

        <div class="form-group" ><div class="col-sm-2">
								<label>Choose the date to see Attendance on that date</label>
								<input type= "text" class="form-control" id="attendenceDate" required />
								</div>
										</div>
        <div class="col-sm-2">
											<label>Bus No.</label>
												<select class="form-control input-sm" id="nBusFkup" required >
													<option value="">Select Bus</option>
													</select>
											</div>
                                  
        <div class="row">
             <div class="col-sm-2 "><button class="btn btn-primary" type="button" id="getAttendence">See Attendence</button>
</div>
            <div class="col-sm-2" >
    <button class="btn btn-warning" type="button" id="viewLatLong" onclick="document.getElementById('id03').style.display='block';" style="width:auto;">View Stops</button>
     
     <div id="id03" class="modal">
<div class="modal-content animate">
<div class="imgcontainer">
<span onclick="document.getElementById('id03').style.display='none'" class="close" title="Close Modal">&times;</span>
</div>
 <div class="container">
 <div id="map" style="width:500px;height:500px"></div> 
     <br />
</div></div></div>

</div></div>
    </div>

    <br />
    <div class="row"><div class="col-sm-3" ></div>
     <div >
    <table id="dtable" class="table">
        <thead>
        <tr> <th >Select</th>
            <th style="display:none">RecordID</th>
            <th style="display:none">EntityID</th>
            <th style="display:none">BusID</th>
            <th>Full Name</th>
            <th>Bus</th>
            <th style="display:none">In lat</th>
            <th style="display:none">In long</th>
             <th style="display:none">out lat</th>
            <th style="display:none">out long</th>
            <th>In Time</th>
            <th>Out Time</th>           
        </tr>
            </thead>
     </table>
    <br />
         </div></div>
    

</asp:Content>
