// Name: Amritpal Singh
// File Name: PlantsController.cs
// Date: 31 January 2022
// Descrition: This is file where API endpoints of SVPlants project are made.



using System;
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
            try{
            var allPlants = _service.GetAllPlantsWateringStatus();
            return Ok(allPlants);
            }catch(Exception ex){
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("SinglePlant/{id}")]
        public IActionResult GetPlantById(int id)
        {
            try{
                var plant = _service.GetSinglePlantWateringStatus(id);
                return Ok(plant);
            }catch(Exception ex){
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("AddPlantInOrganisation")]
        public IActionResult AddPlantInOrganisation([FromBody] Plant plant)
        {
            try{
                if (plant != null)
                {
                    _service.AddPlantInOrganisation(plant);
                }
                return Ok();
            }catch(Exception ex){
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("UpdatePlantWateringStatus/{id}")]
        public IActionResult UpdatePlantWateringStatus(int id, [FromBody] Plant plant)
        {
            try{
                _service.UpdatePlantWaterStatus(id, plant);
                return Ok(plant);
            }catch(Exception ex){
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("RemovePlant/{id}")]
        public IActionResult RemovePlan(int id)
        {
            try{
                _service.RemovePlantFromOrganisation(id);
                return Ok();
             }
            catch(Exception ex){
                return BadRequest(ex.Message);
            }
        }
    }
}