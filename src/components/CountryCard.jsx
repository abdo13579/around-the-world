export function CountryCard({ country }) {
  const capital = country.capital || "N/A";
  const flag = country.flags?.png || "N/A";

  return (
    <a href="">
      <div className="h-full rounded bg-gray-50 p-3 pb-9 shadow-md lg:w-66 dark:bg-gray-800">
        <img
          className="mb-4 h-40 w-full rounded-md"
          src={flag}
          alt={`Flag of ${country.name}`}
          loading="lazy"
        />
        <h2 className="mb-4 ml-3 text-lg font-extrabold">{country.name}</h2>
        <div className="ml-3 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">
              {country.population.toLocaleString()}
            </span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{country.region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{capital}</span>
          </p>
        </div>
      </div>
    </a>
  );
}
