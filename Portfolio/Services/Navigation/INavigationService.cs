using Microsoft.AspNetCore.Components;

namespace Portfolio.Services.Navigation;

public interface INavigationService
{
    public List<NavigationRecord> Navigation { get; }
}

public record NavigationRecord
{
    public required string Name { get; init; }
    public required string Icon { get; init; }
    public required string LinkName { get; init; }
    public required string LinkUrl { get; init; }
    public required RenderFragment Content { get; init; }
}
