using System;

namespace PlantWater.Data
{
    public class Plant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool WateringStatus { get; set; }
        public long? WateringStartTiming { get; set; } //Storing time in number of miliseconds passed since 1970 as a number
        public long? WateringEndTiming { get; set; } //Storing time in number of miliseconds passed since 1970 as a number
        public long? LastWateringSeason { get; set; } //Storing time in seconds after the last session has passed
    }
}