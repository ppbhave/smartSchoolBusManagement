using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ssbmadmin
{
    public partial class ExistBus : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void map2driver_Click1(object sender, EventArgs e)
        {
       
            Response.Redirect("DriverTable.aspx");
        }
    }
}