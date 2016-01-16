using Nancy;
using Nancy.Security;

namespace NancyBackboneSeed.Modules
{
    public class IndexModule : NancyModule
    {
        public IndexModule()
        {
            Get["/"] = parameters =>
            {
                return View["index"];
            };

            Get["/Secure"] = p =>
            {
                this.RequiresMSOwinAuthentication(); //this can also be done at the module level.

                return "You got in";
            };
        }
    }
}