namespace ReadModels
{
    public record FlightRM(Guid id, string airline, string price, TimePlaceRm departure, TimePlaceRm arrival, int remainingNumberOfSeats);
}