import { useEffect, useState } from "react";
import { Header, SearchInput, RegionMenu, CountryList } from "./components";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getCountriesData() {
    const response = await fetch("https://countries.dev/countries");
    if (!response.ok) {
      throw new Error(`Countries request failed: ${response.status}`);
    }

    const data = await response.json();
    setAllCountries(data);
    setCountries(data);
  }

  useEffect(() => {
    async function loadCountries() {
      try {
        await getCountriesData();
      } catch (requestError) {
        setError(requestError);
      } finally {
        setIsLoading(false);
      }
    }

    loadCountries();
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex h-20 items-center justify-between">
          <SearchInput
            countrieslist={allCountries}
            setCountries={setCountries}
          />
          <RegionMenu countries={allCountries} setCountries={setCountries} />
        </div>
        {isLoading && <p>Loading countries...</p>}
        {error && <p>Error: {error.message}</p>}
        {!isLoading && !error && <CountryList countries={countries} />}
      </div>
    </div>
  );
}

export default App;
