using Portfolio.Entities;

namespace Portfolio.Services.Projects;

public interface IProjectsService
{
    List<ProjectTypeEntity> ProjectTypes { get; }
}
