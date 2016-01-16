using Microsoft.Owin.Security;
using Nancy;
using Nancy.Security;
using System.Collections.Generic;
using System.Security.Claims;

namespace NancyBackboneSeed.Modules
{
    public class LoginModule : NancyModule
    {
        public LoginModule() : base("Login")
        {
            Get["/"] = _ => 
            {
               //validate the user here!!!

                var claims = new List<Claim>(new[]
                    {
                    new Claim(ClaimTypes.Email, "test@test.com"),
                    new Claim(ClaimTypes.Name, "Test Account")
                });

                this.Context.GetAuthenticationManager().SignIn(new ClaimsIdentity(claims, "CookieAuth"));

                return Response.AsRedirect("/Secure");

                
            };
        }
    }
}