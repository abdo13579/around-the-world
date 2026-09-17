import { CountryCard } from "./CountryCard";
import { EmptySearch } from "./EmptySearch";

export function CountryList({ countries }) {
  return (
    <div className="mt-8 grid justify-between gap-x-17.5 gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,auto))] lg:grid-cols-[repeat(4,minmax(0,auto))]">
      {countries && countries.length > 0 ? (
        countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))
      ) : (
        <EmptySearch />
      )}
    </div>
  );
}
