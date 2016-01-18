using Nancy;
using Nancy.Bootstrapper;
using Nancy.TinyIoc;

namespace NancyBackboneSeed
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        // The bootstrapper enables you to reconfigure the composition of the framework,
        // by overriding the various methods and properties.
        // For more information https://github.com/NancyFx/Nancy/wiki/Bootstrapper


        protected override void ConfigureApplicationContainer(TinyIoCContainer container)
        {
            base.ConfigureApplicationContainer(container);

            
        }

        /// <summary>
        /// request level depencies
        /// </summary>
        /// <param name="container"></param>
        /// <param name="context"></param>
        protected override void ConfigureRequestContainer(TinyIoCContainer container, NancyContext context)
        {
            
        }
    }
}