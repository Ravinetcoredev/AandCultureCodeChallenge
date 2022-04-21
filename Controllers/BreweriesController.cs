using Microsoft.AspNetCore.Mvc;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace AandCultureChallenge.Controllers
{
    [Route("[controller]")]
    public class BreweriesController : Controller
    {
        public async void Index()
        {
        }

        [HttpGet]
        [Route("GetAllBreweries")]
        public async Task<List<Brewery>> GetAllBreweries()
        {
            var response = await GetBreweriesData();
            List<Brewery> lstBreweries = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Brewery>>(response.Content);
            return lstBreweries;
        }

        public async Task<RestResponse> GetBreweriesData()
        {
            var client = new RestClient("https://api.openbrewerydb.org/breweries");
            var response = await client.ExecuteAsync(new RestRequest());
            return  response;
        }
    }
}



    