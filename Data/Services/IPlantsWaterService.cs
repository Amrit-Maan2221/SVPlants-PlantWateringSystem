using System.Collections.Generic;

namespace PlantWater.Data
{
    public interface IWaterPlantService
    {
        List<Plant> GetAllPlantsWateringStatus();
        Plant GetSinglePlantWateringStatus(int wateringPlantId);
        void UpdatePlantWaterStatus(int wateringPlantId, Plant plant);
        void RemovePlantFromOrganisation(int wateringPlantId);
        void AddPlantInOrganisation(Plant plantWater);
    }
}