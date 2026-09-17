import Select from "react-select";
import { filterCountriesByRegion } from "../utils/countryFilters";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export function RegionMenu({ countries, setCountries }) {
  function handleRegionChange(selectedOption) {
    const selectedRegion = selectedOption?.value ?? "all regions";
    setCountries(filterCountriesByRegion(countries, selectedRegion));
  }

  return (
    <Select
      defaultValue={options[0]}
      onChange={handleRegionChange}
      options={options}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:!text-gray-100",
        control: () =>
          "bg-white dark:!bg-gray-800 flex h-12 items-center justify-between gap-12 rounded-md border-none! shadow",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:!bg-gray-800 dark:!text-gray-100",
      }}
    />
  );
}
