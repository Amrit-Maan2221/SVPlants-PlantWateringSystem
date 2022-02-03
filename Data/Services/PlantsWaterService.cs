using System.Collections.Generic;
using System.Linq;
using System;

namespace PlantWater.Data
{
    public class WaterPlantService : IWaterPlantService
    {
        public void AddPlantInOrganisation(Plant plantWater)
        {
            Data.Plants.Add(plantWater);
        }

        public List<Plant> GetAllPlantsWateringStatus() => Data.Plants.ToList();

        public Plant GetSinglePlantWateringStatus(int wateringPlantId) => Data.Plants.FirstOrDefault(n => n.Id == wateringPlantId);


        public void RemovePlantFromOrganisation(int wateringPlantId)
        {
            var plant = Data.Plants.FirstOrDefault(n => n.Id == wateringPlantId);
            if (plant != null)
            {
                Data.Plants.Remove(plant);
            }
        }

        public void UpdatePlantWaterStatus(int wateringPlantId, Plant plantWater)
        {
            var oldWateringStatus = Data.Plants.FirstOrDefault(n => n.Id == wateringPlantId);
            if (oldWateringStatus != null)
            {
                oldWateringStatus.WateringStatus = plantWater.WateringStatus;
                oldWateringStatus.WateringStartTiming = plantWater.WateringStartTiming;
                oldWateringStatus.WateringEndTiming = plantWater.WateringEndTiming;
                if (plantWater.WateringStartTiming != null && plantWater.WateringEndTiming != null)
                {
                    var secondsPassed = (long)(plantWater.WateringEndTiming / 1000 - plantWater.WateringStartTiming / 1000);
                    if (secondsPassed >= 10)
                    {
                        oldWateringStatus.LastWateringSeason = plantWater.WateringEndTiming;
                    }
                }
            }
        }
    }
}