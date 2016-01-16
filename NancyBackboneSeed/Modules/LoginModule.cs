using Microsoft.Owin.Security;
using Nancy;
using Nancy.Security;
using System.Security.Claims;

namespace NancyBackboneSeed.Modules
{
    public class LoginModule : NancyModule
    {
        public LoginModule() : base("Login")
        {
            Get["/"] = _ => 
            {
                IAuthenticationManager authenticationManager = Context.GetAuthenticationManager();
                authenticationManager.SignIn(new ClaimsIdentity());

                return Response.AsRedirect("/", Nancy.Responses.RedirectResponse.RedirectType.SeeOther);
            };
        }
    }
}