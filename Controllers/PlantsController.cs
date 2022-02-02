using Microsoft.AspNetCore.Mvc;
using PlantWater.Data;

namespace PlantWater.Controllers
{
    [Route("api/[controller]")]
    public class PlantsController : Controller
    {
        private IWaterPlantService _service;
        public PlantsController(IWaterPlantService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetPlants()
        {
            var allPlants = _service.GetAllPlantsWateringStatus();
            return Ok(allPlants);
        }

        [HttpGet("SinglePlant/{id}")]
        public IActionResult GetPlantById(int id)
        {
            var plant = _service.GetSinglePlantWateringStatus(id);
            return Ok(plant);
        }

        [HttpPost("AddPlantInOrganisation")]
        public IActionResult AddPlantInOrganisation([FromBody] Plant plant)
        {
            if (plant != null)
            {
                _service.AddPlantInOrganisation(plant);
            }
            return Ok();
        }

        [HttpPut("UpdatePlantWateringStatus/{id}")]
        public IActionResult UpdatePlantWateringStatus(int id, [FromBody] Plant plant)
        {
            _service.UpdatePlantWaterStatus(id, plant);
            return Ok(plant);
        }

        [HttpDelete("RemovePlant/{id}")]
        public IActionResult RemovePlan(int id)
        {
            _service.RemovePlantFromOrganisation(id);
            return Ok();
        }
    }
}