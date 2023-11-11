namespace Portfolio.Entities;

public class ProjectTypeEntity
{
    public required int IdType { get; set; }
    public required string Type { get; set; }
    public required List<ProjectEntity> Projects { get; set; }
}
