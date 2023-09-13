using Microsoft.AspNetCore.Mvc;
using ReadModels;

namespace FlightBookingBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class FlightController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<FlightController> _logger;

    public FlightController(ILogger<FlightController> logger)
    {
        _logger = logger;
    }
    Random random = new Random();
    [HttpGet]
    public IEnumerable<FlightRM> Search() => new FlightRM[]{
        new FlightRM(Guid.NewGuid(), 
            "Indian Airline", 
            random.Next(300,500).ToString(), 
            new TimePlaceRm("LosAngeles", DateTime.Now.AddHours(random.Next(4,10))), 
            new TimePlaceRm("Des Moines", DateTime.Now.AddHours(random.Next(1,853))), 
            remainingNumberOfSeats: random.Next(1, 100)),
        new FlightRM(Guid.NewGuid(), 
            "British Airline", 
            random.Next(300,500).ToString(), 
            new TimePlaceRm("LosAngeles", DateTime.Now.AddHours(random.Next(4,10))), 
            new TimePlaceRm("Des Moines", DateTime.Now.AddHours(random.Next(1,853))), 
            remainingNumberOfSeats: random.Next(1, 100)),
        new FlightRM(Guid.NewGuid(), 
            "Delhi Airline", 
            random.Next(300,500).ToString(), 
            new TimePlaceRm("LosAngeles", DateTime.Now.AddHours(random.Next(4,10))), 
            new TimePlaceRm("Des Moines", DateTime.Now.AddHours(random.Next(1,853))), 
            remainingNumberOfSeats: random.Next(1, 100))

    };

}
