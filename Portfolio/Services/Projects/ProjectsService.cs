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
                        Id = 000,
                        ImagesCount = 9,
                        Title = "Prototipo de Gestor de expedientes clínicos",
                        Description = "Desarrollo de un sitio web corporativo con funcionalidades avanzadas.",
                        Year = 2022
                    },
                ]
            },
            new()
            {
                Type = cultureDisplay["FullStackDevelopment"],
                Projects = [
                    new ProjectEntity
                    {
                        Id = 001,
                        ImagesCount = 13,
                        Title = "Gestor de expedientes clínicos, citas e inventario",
                        Description = "Desarrollo de una aplicación móvil para la gestión eficiente de tareas diarias.",
                        Year = 2020
                    },
                    new ProjectEntity
                    {
                        Id = 002,
                        ImagesCount = 9,
                        Title = "Aplicación web para la calidad",
                        Description = "Creación de un juego educativo interactivo para niños en dispositivos móviles.",
                        Year = 2022
                    },
                ]
            }
        ];
    }
}
