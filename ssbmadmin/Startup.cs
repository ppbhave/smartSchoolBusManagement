using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ssbmadmin.Startup))]
namespace ssbmadmin
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
