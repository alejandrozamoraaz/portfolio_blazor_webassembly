using Microsoft.Extensions.Localization;

namespace Portfolio.Services.Navigation;

public class NavigationService : INavigationService
{
    private readonly IStringLocalizer<Resources.Culture> cultureDisplay;
    public List<NavigationRecord> Navigation { get; }

    public NavigationService(IStringLocalizer<Resources.Culture> localizer)
    {
        cultureDisplay = localizer;
        Navigation =
        [
            new()
            {
                Name = cultureDisplay["Projects"],
                IconUrl = "https://img.icons8.com/3d-fluency/94/news.png",
                IconAlt = "Noticias - icon by Icons8",
                LinkName = "Projects",
                Content = builder =>
                {
                    builder.OpenComponent<Pages.Sections.Projects>(0);
                    builder.CloseComponent();
                }
            },
            new()
            {
                Name = cultureDisplay["About"],
                IconUrl = "https://img.icons8.com/3d-fluency/94/user-male--v4.png",
                IconAlt = "Usuario masculino - icon by Icons8",
                LinkName = "About",
                Content = builder =>
                {
                    builder.OpenComponent<Pages.Sections.About>(0);
                    builder.CloseComponent();
                }
            },
            new()
            {
                Name = cultureDisplay["Contact"],
                IconUrl = "https://img.icons8.com/3d-fluency/94/chat.png",
                IconAlt = "Charla - icon by Icons8",
                LinkName = "Contact",
                Content = builder =>
                {
                    builder.OpenComponent<Pages.Sections.Contact>(0);
                    builder.CloseComponent();
                }
            }
        ];
    }
}
