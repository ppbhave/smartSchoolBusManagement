<%@ Page Title="Student Addition" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Studentadd.aspx.cs" Inherits="ssbmadmin.GUIFiles.Studentadd" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <script>
function frmfname(input) {
var charvalue = /^([a-zA-Z])+$/;
if(!charvalue.test(input.value)) {
document.getElementById('fname').innerHTML="Enter characters only";
input.focus;
return false;
}
else {
document.getElementById('fname').innerHTML="";
return true;
}
}
function frmmname(input) {
    var charvalue = /^([a-zA-Z])+$/;
    if (!charvalue.test(input.value)) {
        document.getElementById('mname').innerHTML = "Enter characters only";
        input.focus;
        return false;
    }
    else {
        document.getElementById('mname').innerHTML = "";
        return true;
    }
}
function frmlname(input) {
    var charvalue = /^([a-zA-Z])+$/;
    if (!charvalue.test(input.value)) {
        document.getElementById('lname').innerHTML = "Enter characters only";
        input.focus;
        return false;
    }
    else {
        document.getElementById('lname').innerHTML = "";
        return true;
    }
}
function frmmoname(input) {
    var charvalue = /^([a-zA-Z])+$/;
    if (!charvalue.test(input.value)) {
        document.getElementById('moname').innerHTML = "Enter characters only";
        input.focus;
        return false;
    }
    else {
        document.getElementById('moname').innerHTML = "";
        return true;
    }
}
function frmno1(input) {
    var no = /^([0-9])+$/;
    if (!no.test(input.value)) {
        document.getElementById('ph1').innerHTML = "Enter numbers only";
        input.focus;
        return false;
    }
    else {
        document.getElementById('ph1').innerHTML = "";
        return true;
    }
}
function frmno2(input) {
    var no = /^([0-9])+$/;
    if (!no.test(input.value)) {
        document.getElementById('ph2').innerHTML = "Enter numbers only";
        input.focus;
        return false;
    }
    else {
        document.getElementById('ph2').innerHTML = "";
        return true;
    }
}
</script>
<script>
function emailval1()	{
var email1 = document.getElementById('emailid1');
var filter1 = /^([a-zA-Z0-9_\.])+\@(([gmail\hotmail\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(!filter1.test(email1.value)) {
document.getElementById('Message1').innerHTML="Invalid email address";
email1.focus;
return false;
}
else {
document.getElementById('Message1').innerHTML="";
return true;
}
}

function emailval2()	{
var email2 = document.getElementById('emailid2');
var filter2 = /^([a-zA-Z0-9_\.])+\@(([gmail\hotmail\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(!filter2.test(email2.value)) {
document.getElementById('Message2').innerHTML="Invalid email address";
email2.focus;
return false;
}
else {
document.getElementById('Message2').innerHTML="";
return true;
}
}
</script>
<link href="../jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet" />
<script src="../jquery-ui-1.12.1/external/jquery/jquery.js"></script>
<script src="../jquery-ui-1.12.1/jquery-ui.js"></script>
<!-- Age Calculation starts here-->
<script type="text/javascript">
$(document).ready(function (){
var age = "";
	$('#dob').datepicker({
	onSelect: function (value, ui) {
		var today = new Date();
		age = today.getFullYear() - ui.selectedYear;
		$('#age').val(age);
		},
		changeMonth: true,
		changeYear: true
		})
		})
</script>
    <div class="header">
					<div class="logo">
	                 <h1><b>Student Registration</b></h1>
					 </div>
					 </div>
								<div class="row">
									<div class="col-sm-3">
											<label>Student First Name</label>
										  <input type="text" id="sFname" class="form-control" onkeyup="frmfname(this)" required />
									<span id="fname" style="color:red"></span>
                                    </div>
									<div class="col-sm-3">
										<label>Middle Name</label>
										<input type="text" id="sMname" class="form-control" onkeyup="frmmname(this)" required />
									<span id="mname" style="color:red"></span>
                                    </div>
									<div class="col-sm-3">
											<label>Mother Name</label>
										  <input type="text" id="sMother" class="form-control" onkeyup="frmmoname(this)" required />
									<span id="moname" style="color:red"></span>
                                    </div>
									<div class="col-sm-3">
										<label>Last Name</label>
										<input type="text" id="sLname" class="form-control" onkeyup="frmlname(this)" required />
									<span id="lname" style="color:red"></span>
                                    </div>
								</div>

								<br>
						<!--		<div class="row">
									<div class="col-sm-4">
											<label>Parent First Name</label>
										  <input type="text" class="form-control">
									</div>
									<div class="col-sm-4">
									<label>Middle Name</label>
										<input type="text" class="form-control">
									</div>
									<div class="col-sm-4">
										<label>Last Name</label>
										<input type="text" class="form-control">
									</div>
								</div>		--->

								<br>
								
							<div class="row">
									
								<div class="form-group">
								<div class="col-sm-2">
								<label>Date Of Birth</label><input type= "text" class="form-control" id="dob" required />
								</div>
								<div class="col-sm-2">
								<label>Age</label>
										<input type="text" class="form-control" id="age" readonly />
									</div>
								
											<div class="col-md-2">
											<label>Class</label>
												<select class="form-control input-sm" id="sClass" required />
													<option>Select Class</option>
													<option>LKG</option>
													<option>UKG</option>
													<option>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
													<option>6</option>
													<option>7</option>
													<option>8</option>
													<option>9</option>
													<option>10</option>
												</select>
											</div>
						
											<div class="col-md-2" id="Div" required />
											<label>Division</label>
												<select class="form-control input-sm">
													<option>Select Division</option>
													<option>A</option>
													<option>B</option>
													<option>C</option>
													<option>D</option>
												</select>
											</div>
											<div class="col-md-2">
											<label>Bus No.</label>
												<select class="form-control input-sm" id="sReg_No" required />
													<option>Select Bus</option>
													<option>MH08 AK 4234</option>
													<option>MH08 DH 1711</option>
													<option>MH08 EE 1324</option>
													<option>MH08 WJ 2322</option>
												</select>
											</div>
										</div>
			  					</div>
			  					<br>
								<div class="row">
								<div class="col-sm-2">
										<label>Address: House</label>
										<input type="text" class="form-control" id="sHouse" onkeyup="frmchar(this)" required />
									</div>
									<div class="col-sm-2">
										<label>Locality</label>
										<input type="text" class="form-control" id="sLocality" onkeyup="frmchar(this)" required />
									</div>
									<div class="col-sm-2">
										<label>Address Line 1</label>
										<input type="text" class="form-control" id="sAddres_Line" onkeyup="frmchar(this)" required />
									</div>
									<div class="col-sm-2">
										<label>Taluka</label>
										<input type="text" class="form-control" id="sTaluka" onkeyup="frmchar(this)" required />
									</div>
									<div class="col-sm-2">
										<label>District</label>
										<input type="text" class="form-control" id="sDistrict" onkeyup="frmchar(this)" required />
									</div>
									<div class="col-sm-2">
										<label>State</label>
										<input type="text" class="form-control" id="sState" onkeyup="frmchar(this)" required />
									</div>
								</div>
								<br>
								<div class="row">
								<div class="col-md-2">
											<label>ID Proof</label>
												<select class="form-control input-sm" id="idproof" required />
													<option>Select </option>
													<option>Adhar Card</option>
													<option>Pan Card</option>
													<option>Passport</option>
												</select>
											</div>
											<div class="col-md-3">
											<label>Upload Document</label>
												<input type="file" class="btn btn-default" id="ProofFile" required />
											</div>
											</div>
    <br />
											<div class="row">
                                                
								
									<div class="col-sm-2">
                                        <label>Pickup location</label>
										<input type="text" class="form-control" name="sPickLat" placeholder="Lat">
									</div>
									<div class="col-sm-2">
                                        <label style="color:white">Drop location</label>
										<input type="text" class="form-control" name="sPickLong" placeholder="Long">
									</div>
                                               
									<div class="col-sm-2">
                                        <label>Drop Location</label>
										<input type="text" class="form-control" name="sDropLat" placeholder="Lat">
									</div>
									<div class="col-sm-2">
                                            <label style="color:white">Drop location</label>
										<input type="text" class="form-control" name="sDropLong" placeholder="Long">
									</div>
                                    </div>

    
							
</asp:Content>
