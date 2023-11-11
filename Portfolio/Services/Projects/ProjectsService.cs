using Portfolio.Entities;

namespace Portfolio.Services.Projects;

public class ProjectsService : IProjectsService
{
    public List<ProjectTypeEntity>? ProjectTypes { get; set; }

    public void GetProjectsByType()
    {
        
    }
}
