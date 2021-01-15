<%@ Page Title="Attendant Registration" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AttendantReg.aspx.cs" Inherits="ssbmadmin.GUIFiles.AttendantReg" %>
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
    <!--  <div class="row">
	  				<div class="col-md-12 panel-info">
			  			<div class="content-box-large box-with-header">-->
    <div class="header">
					<div class="logo">
	                 <h1><b>Attendant Registration</b></h1>
					 </div>
					 </div>
								<div class="row">
									<div class="col-sm-3">
									<label>First Name</label> 
										<input type="text" class="form-control" id="firstname" onkeyup="frmfname(this)" required />
									<span id="fname" style="color:red"></span>
									</div>
									<div class="col-sm-3">
									<label>Middle Name</label>
										<input type="text" class="form-control" id="middlename" onkeyup="frmmname(this)" required />
										<span id="mname" style="color:red"></span>
									</div>
									<div class="col-sm-3">
									<label>Last Name</label> 
										<input type="text" class="form-control" id="lastname" onkeyup="frmlname(this)" required />
									<span id="lname" style="color:red"></span>
									</div>
									<div class="col-sm-3">
									<label>Mother Name</label>
										<input type="text" class="form-control" id="mothername" onkeyup="frmmoname(this)" required />
									<span id="moname" style="color:red"></span>
									</div>
								</div>
								<br>
								
								<div class="row">
								<div class="col-sm-2">
								<label>Date of Birth </label>
								<br>
								<input type="text" class="form-control" id="dob" required />
								</div>
									<div class="col-sm-2">
									<label>Age</label>
										<input type="text" class="form-control" id="age" readonly required />
									</div>
								</div>
								<br>
								<div class="row">
									<div class="col-sm-2">
										<label>Address: House</label>
										<input type="text" class="form-control" id="house" pattern="([a-zA-Z])" title="Enter character only" required />
									</div>
									<div class="col-sm-2">
										<label>Locality</label>
										<input type="text" class="form-control" id="locality" onkeyup="frmchar(this)" required />
									</div>
									<div class="col-sm-2">
										<label>Address Line 1</label>
										<input type="text" class="form-control" id="addline" onkeyup="frmchar(this)" required />
									</div>
									<div class="col-sm-2">
										<label>Taluka</label>
										<input type="text" class="form-control" id="taluka" onkeyup="frmchar(this)" required />
									</div>
									<div class="col-sm-2">
										<label>District</label>
										<input type="text" class="form-control" id="district" onkeyup="frmchar(this)" required />
									</div>
									<div class="col-sm-2">
										<label>State</label>
										<input type="text" class="form-control" id="state" onkeyup="frmchar(this)" required />
									</div>
								</div>
								<br>
								<div class="row">
							<div class="col-sm-2">
										<label>Contact No.1</label>
										<input type="text" class="form-control" id="contact1" maxlength="10" onkeyup="frmno1(this)" required />
										<span id="ph1" style="color:red"></span>
									</div>
									<div class="col-sm-2">
										<label>Contact No. 2</label>
										<input type="text" class="form-control" id="contact2" maxlength="10" onkeyup="frmno2(this)" required />
									<span id="ph2" style="color:red"></span>
									</div>
										<div class="col-sm-4">
										<label>Email ID 1</label>
										  <input type="text" class="form-control" placeholder="example@gmail.com" id="emailid1" onkeyup="emailval1()" required />
										  <span id="Message1" style="color:red"></span>
									</div>
										<div class="col-sm-4">
										<label>Email ID 2</label>
										  <input type="text" class="form-control" placeholder="example@gmail.com" id="emailid2" onkeyup="emailval2()" required />
										  <span id="Message2" style="color:red"></span>
									</div>

								</div>
								<br>
								<div class="row">
											<div class="col-md-2">
											<label>ID Proof Name</label>
												<select class="form-control input-sm" name="idproof" required />
													<option>Select Proof</option>
													<option>Aadhar Card</option>
													<option>Pan Card</option>
													<option>License</option>
												</select>
											</div>
											<div class="col-md-3">
											<label>ID Proof</label>
												<input type="file" class="btn btn-default" id="ProofFile" required />
											</div>
								</div>
						<div class="row">
											<div class="col-sm-2 pull-right">
												<button class="btn btn-primary" type="submit">
													<i class="fa fa-save"></i>
													Save
												</button>
												<button class="btn btn-default" type="submit">
													Cancel
												</button>
												
						
											</div>
										</div>
</asp:Content>
