// Name: Amritpal Singh
// File Name: IPlantsWaterService.cs
// Date: 31 January 2022
// Descrition: This file creates an interface for Plants Water Service where methods of update, creating, deleting exists.



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