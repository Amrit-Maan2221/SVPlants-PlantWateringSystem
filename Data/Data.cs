using System.Collections.Generic;

namespace PlantWater.Data
{
    public static class Data
    {

        public static List<Plant> Plants => allPlants;
        static List<Plant> allPlants = new List<Plant>()
        {
            new Plant()
            {
                Id=1,
                Name="Plant 1",
                WateringStatus=false,
                WateringStartTiming=null,
                WateringEndTiming=null,
                LastWateringSeason = null
            },
            new Plant()
            {
                Id=2,
                Name="Plant 2",
                WateringStatus=false,
                WateringStartTiming=null,
                WateringEndTiming=null,
                LastWateringSeason = null
            },
            new Plant()
            {
                Id=3,
                Name="Plant 3",
                WateringStatus=false,
                WateringStartTiming=null,
                WateringEndTiming=null,
                LastWateringSeason = null
            },
            new Plant()
            {
                Id=4,
                Name="Plant 4",
                WateringStatus=false,
                WateringStartTiming=null,
                WateringEndTiming=null,
                LastWateringSeason = null
            },
            new Plant()
            {
                Id=5,
                Name="Plant 5",
                WateringStatus=false,
                WateringStartTiming=null,
                WateringEndTiming=null,
                LastWateringSeason = null
            }
        };

    }
}