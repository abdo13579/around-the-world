export function CountryCard() {
  return (
    <a href="">
      <div className="h-full rounded bg-gray-50 p-3 pb-9 shadow-md lg:w-66 dark:bg-gray-800">
        <img
          className="mb-4 h-40 w-full rounded-md"
          src="https://www.worldometers.info/images/flags/original/dz.webp"
          alt="placeholder"
          loading="lazy"
        />
        <h2 className="mb-4 ml-3 text-lg font-extrabold">xxx</h2>
        <div className="ml-3 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">xxx</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">xxx</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">xxx</span>
          </p>
        </div>
      </div>
    </a>
  );
}
