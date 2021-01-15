<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="UpdateParent.aspx.cs" Inherits="ssbmadmin.WebForm3" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    

     <link href="jquery-ui-1.12.1/jquery-ui.css" rel="stylesheet" />
<script src="jquery-ui-1.12.1/external/jquery/jquery.js"></script>
<script src="jquery-ui-1.12.1/jquery-ui.js"></script> 
   <script src="Scripts/AjaxCalls/ValidationForm.js"></script>
    <script src="Scripts/AjaxCalls/UpdateParent.js"></script>

    <div class="header">
					<div class="logo">
	                 <h1><b>Parent Registration</b></h1>
					 </div>
					 </div>
    <div class="row">
									<div class="col-sm-3">
											<label>Parent First Name</label>
										  <input type="text" id="sFname" class="form-control" onkeyup="textonly(this.id,'fname')" required />
									<span id="fname" style="color:red"></span>
                                    </div>
									<div class="col-sm-3">
										<label>Middle Name</label>
										<input type="text" id="sMname" class="form-control" onkeyup="textonly(this.id,'mname')" required />
									<span id="mname" style="color:red"></span>
                                    </div>
									<div class="col-sm-3">
											<label>Mother Name</label>
										  <input type="text" id="sMother" class="form-control" onkeyup="textonly(this.id,'moname')" required />
									<span id="moname" style="color:red"></span>
                                    </div>
									<div class="col-sm-3">
										<label>Last Name</label>
										<input type="text" id="sLname" class="form-control" onkeyup="textonly(this.id,'lname')" required />
									<span id="lname" style="color:red"></span>
                                    </div>
						<br>
								</div>
							<div class="row">
									
								<div class="form-group">
								<div class="col-sm-2">
								<label>Date Of Birth</label>
								<input type= "text" class="form-control" id="sDOB" required />
								</div>
								<div class="col-sm-2">
								<label>Age</label>
										<input type="text" class="form-control" id="jAge" readonly />
									</div>		
										</div>
			  					</div>
			  					<br>
								<div class="row">
									<div class="col-sm-2">
										<label>Address: House</label>
										<input type="text" class="form-control" id="sHouse"onkeyup="alphanumeric(this.id,'House')" placeholder="House No House/Apartment Name" required />
									<span id="House" style="color:red"></span>
                                    </div>
									<div class="col-sm-2">
										<label>Locality</label>
										<input type="text" class="form-control" id="sLocality" onkeyup="textonly(this.id,'Locality')" required />
									<span id="Locality" style="color:red"></span>
                                    </div>
									<div class="col-sm-2">
										<label>Address Line 1</label>
										<input type="text" class="form-control" id="sAddressLine" onkeyup="textonly(this.id,'AddressLine')" required />
									<span id="AddressLine" style="color:red"></span>
                                    </div>
									<div class="col-sm-2">
										<label>Taluka</label>
										<input type="text" class="form-control" id="sTaluka" onkeyup="textonly(this.id,'Taluka')" required />
									<span id="Taluka" style="color:red"></span>
                                    </div>
									<div class="col-sm-2">
										<label>District</label>
										<input type="text" class="form-control" id="sDistrict" onkeyup="textonly(this.id,'District')" required />
									<span id="District" style="color:red"></span>
                                    </div>
									<div class="col-sm-2">
										<label>State</label>
										<input type="text" class="form-control" id="sState" onkeyup="textonly(this.id,'State')" required />
									<span id="State" style="color:red"></span>
                                    </div>
								</div>
								<br>
								<div class="row">
									<div class="col-sm-2">
									<label>Contact No. 1</label> 
										<input type="text" class="form-control" id="sContact1" maxlength="10"  onkeyup="frmno1(this)" required />
                                        <span id="ph1" style="color:red"></span>
									</div>
									<div class="col-sm-2">
									<label>Contact No. 2</label>
										<input type="text" class="form-control" id="sContact2" maxlength="10" onkeyup="frmno2(this)" required />
									<span id="ph2" style="color:red"></span>
                                    </div>
									<div class="col-sm-3">
										<label>Email ID 1</label>
										  <input type="text" class="form-control" id="sEmail1" placeholder="example@gmail.com" onkeyup="emailval1()" required />
			
										  <span id="Message1" style="color:red"></span>
									</div>
									<div class="col-sm-3">
										<label>Email ID 2</label>
										  <input type="text" class="form-control" id="sEmail2" placeholder="example@gmail.com" onkeyup="emailval2()" required />
								
										  <span id="Message2" style="color:red"></span>
									</div>
								</div>
								<br>
								<div class="row">
								<div class="col-md-2">
											<label>ID Proof</label>
												<select class="form-control input-sm" id="sIdProof" required >
													<option>Select </option>
													<option>Adhar Card</option>
													<option>Pan Card</option>
													<option>Passport</option>
												</select>
											</div>
											<div class="col-md-3">
									<label>Upload Document</label> 
										<input type="file" class="form-control" id="ProofFile" required />
									</div>
											</div>

    <div class="row">
											<div class="col-sm-4+ pull-right">
												<button class="btn btn-primary" type="submit" id="UpdateParent">
													<i class="fa fa-save"></i>
													Update Parent
												</button>
												<button class="btn btn-default" type="submit">
													Cancel
												</button>
												
						
											</div>
										</div>

</asp:Content>
