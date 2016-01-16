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
        
            
        /// <summary>
        /// Called once the first time the app loads up
        /// </summary>
        /// <param name="container"></param>
        /// <param name="pipelines"></param>
        protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
        {
            base.ApplicationStartup(container, pipelines);

            //register DI stuff here
        }

        /// <summary>
        /// Is called each request
        /// </summary>
        /// <param name="requestContainer"></param>
        /// <param name="pipelines"></param>
        /// <param name="context"></param>
        protected override void RequestStartup(TinyIoCContainer requestContainer, IPipelines pipelines, NancyContext context)
        {
            base.RequestStartup(requestContainer, pipelines, context);
        }
    }
}