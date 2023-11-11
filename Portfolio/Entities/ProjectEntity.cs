namespace Portfolio.Entities;

public class ProjectEntity
{
    public required int IdProject { get; set; }
    public required List<string> ImageURLs { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required int Year { get; set; }
    public required ProjectTypeEntity Type { get; set; }
    public required ProjectCategoryEntity Category { get; set; }
}
