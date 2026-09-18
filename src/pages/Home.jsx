import { useEffect, useState } from "react";
import { SearchInput, RegionMenu, CountryList } from "../components";
import { useFetchData } from "../hooks/useFetchData";

export function Home() {
  const {
    data: allCountries,
    isLoading,
    error,
  } = useFetchData("https://countries.dev/countries");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (allCountries) {
      setCountries(allCountries);
    }
  }, [allCountries]);

  return (
    <>
      <div className="flex h-20 items-center justify-between">
        <SearchInput
          countrieslist={allCountries ?? []}
          setCountries={setCountries}
        />
        <RegionMenu
          countries={allCountries ?? []}
          setCountries={setCountries}
        />
      </div>
      {isLoading && <p>Loading countries...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && <CountryList countries={countries} />}
    </>
  );
}
