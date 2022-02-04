// Name: Amritpal Singh
// File Name: Plants.cs
// Date: 31 January 2022
// Descrition: This file creates a model name Plants for SV Plants Project


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