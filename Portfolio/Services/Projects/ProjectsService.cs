using Microsoft.Extensions.Localization;
using Portfolio.Entities;

namespace Portfolio.Services.Projects;

public class ProjectsService : IProjectsService
{
    public List<ProjectTypeEntity> ProjectTypes { get; }

    public ProjectsService(IStringLocalizer<Resources.Culture> cultureDisplay)
    {
        ProjectTypes =
        [
            new()
            {
                Type = cultureDisplay["GraphicDesignUIUX"],
                Projects = [
                    new ProjectEntity
                    {
                        ImageURLs = new List<string> { "https://example.com/webdev/image1.jpg", "https://example.com/webdev/image2.jpg" },
                        Title = "Sitio web corporativo",
                        Description = "Desarrollo de un sitio web corporativo con funcionalidades avanzadas.",
                        Year = 2022
                    },
                    new ProjectEntity
                    {
                        ImageURLs = new List<string> { "https://example.com/webdev/image3.jpg", "https://example.com/webdev/image4.jpg" },
                        Title = "Tienda en línea",
                        Description = "Creación de una tienda en línea con carrito de compras y métodos de pago.",
                        Year = 2023,
                        Url = "https://example.com/datascience"
                    }
                ]
            },
            new()
            {
                Type = cultureDisplay["FullStackDevelopment"],
                Projects = [
                    new ProjectEntity
                    {
                        ImageURLs = new List<string> { "https://example.com/mobileapp/image1.jpg", "https://example.com/mobileapp/image2.jpg" },
                        Title = "Aplicación de gestión de tareas",
                        Description = "Desarrollo de una aplicación móvil para la gestión eficiente de tareas diarias.",
                        Year = 2021
                    },
                    new ProjectEntity
                    {
                        ImageURLs = new List<string> { "https://example.com/mobileapp/image3.jpg", "https://example.com/mobileapp/image4.jpg" },
                        Title = "Juego educativo para niños",
                        Description = "Creación de un juego educativo interactivo para niños en dispositivos móviles.",
                        Year = 2022
                    },
                    new ProjectEntity
                    {
                        ImageURLs = new List<string> { "https://example.com/datascience/image1.jpg", "https://example.com/datascience/image2.jpg" },
                        Title = "Análisis de datos de ventas",
                        Description = "Realización de un análisis detallado de los datos de ventas para tomar decisiones estratégicas.",
                        Year = 2023
                    }
                ]
            }
        ];
    }
}
