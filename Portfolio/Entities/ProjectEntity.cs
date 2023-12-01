namespace Portfolio.Entities;

public class ProjectEntity
{
    public required List<string> ImageURLs { get; init; }
    public required string Title { get; init; }
    public required string Description { get; init; }
    public required int Year { get; init; }
    public string? Url { get; init; }
    //public required ProjectTypeEntity Type { get; set; }
    //public required ProjectCategoryEntity Category { get; set; }
}
