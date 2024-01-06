namespace Portfolio.Resources;

public class Culture
{
    public static List<CultureData> SupportedCultures
    {
        get => [
            new CultureData{ Code = "en", Display = "English" },
            new CultureData{ Code = "es", Display = "Español" },
        ];
    }
}

public record CultureData
{
    public required string Code { get; init; }
    public required string Display { get; init; }
}
