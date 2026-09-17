export function filterCountriesByRegion(countries, selectedRegion) {
  if (!selectedRegion || selectedRegion === "all regions") {
    return countries;
  }

  return countries.filter(
    (country) => country.region?.toLowerCase() === selectedRegion.toLowerCase(),
  );
}
