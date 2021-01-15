<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="ssbmadmin.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Admin Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <link href="Content/styles.css" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery.js"></script>

</head>
<body class="login-bg">
    <form id="form1" runat="server">
    <div class="header">
	     <div class="container">
	        <div class="row">
	           <div class="col-md-12">
	              <!-- Logo -->
	              <div class="logo">
	               <h2><b>School Bus Management</b></h2>
	              </div>
	           </div>
	        </div>
	     </div>
	</div>	
		<br/>		
	<div class="page-content container">
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<div class="login-wrapper">
			        <div class="box">
			            <div class="content-wrap">
							<h6>Sign In</h6>
			                <input class="form-control" type="text" placeholder="Login ID"/>
			                <input class="form-control" type="password" placeholder="Password"/>
			                <div class="action">
			                    <a class="btn btn-primary signup" href="Home.aspx">Login</a>
			                </div> 
							<br/>
							<div>
							<input type="checkbox" name="remember"/>
							Remember Me
							</div>							
			            </div>
			        </div>

			        <div class="already">
			            <input type="button" value="Cancel"/>
			            <a>Forgot password?</a>
			        </div>
			    </div>
			</div>
		</div>
	</div>
    </form>
</body>
</html>
