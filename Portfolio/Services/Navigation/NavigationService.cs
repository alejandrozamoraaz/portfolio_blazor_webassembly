using Microsoft.Extensions.Localization;

namespace Portfolio.Services.Navigation;

public class NavigationService : INavigationService
{
    private readonly IStringLocalizer<Resources.Culture> cultureDisplay;
    public List<NavigationRecord> Navigation { get; }

    public NavigationService(IStringLocalizer<Resources.Culture> localizer)
    {
        cultureDisplay = localizer;
        Navigation = new List<NavigationRecord>
        {
            new () {
                Name = cultureDisplay["Projects"],
                Icon = "bi-bookmark-star-fill",///"bi-award-fill",
                LinkName = "Projects",
                LinkUrl = "#Projects",
                Content = builder =>
                {
                    builder.OpenComponent<Pages.Projects>(0);
                    builder.CloseComponent();
                }
            }
        };
    }
}
