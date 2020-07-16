using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MyWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherValuesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
           return new string[] {"Edgars", "2020", "EDIBO", "RTU"};
        }
    }
}
