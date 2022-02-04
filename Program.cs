// Name: Amritpal Singh
// File Name: Program.cs
// Date: 31 January 2022
// Descrition: This is starting point of SV plants projects.

/* SV Plants:
  ------------------------
 * A web application to water your plants remote.
 * Supports watering multiple plants together
 * You are visually alerted if you didn't watered the plant for more than six hours
 * You cannot start watering plants right after there last watering session there is wait time of 10 sec, if you want to start watering your plants again
*/


using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace SVPlants
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
