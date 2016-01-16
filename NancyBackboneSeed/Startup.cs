using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Extensions;
using Nancy.Owin;
using Nancy;

[assembly: OwinStartup(typeof(NancyBackboneSeed.Startup))]

namespace NancyBackboneSeed
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
            app.UseNancy(options => options.PassThroughWhenStatusCodesAre(
              HttpStatusCode.NotFound,
              HttpStatusCode.InternalServerError));
            app.UseStageMarker(PipelineStage.MapHandler);
        }
    }
}
