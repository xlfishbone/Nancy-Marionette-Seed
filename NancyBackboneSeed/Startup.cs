﻿using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Extensions;
using Nancy.Owin;
using Nancy;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security;

[assembly: OwinStartup(typeof(NancyBackboneSeed.Startup))]

namespace NancyBackboneSeed
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationMode = AuthenticationMode.Active,
                LoginPath = new PathString("/Login"),
                CookieSecure = Microsoft.Owin.Security.Cookies.CookieSecureOption.SameAsRequest,
                SlidingExpiration = true,
                AuthenticationType = "CookieAuth",
                CookieName = "AuthCookie"
            });

            //Add Nancy to our pipeline
            app.UseNancy();
            app.UseStageMarker(PipelineStage.MapHandler);

           
        }
    }
}
