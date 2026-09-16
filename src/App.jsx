import { Header, SearchInput, RegionMenu, CountryList } from "./components";

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex h-20 items-center justify-between">
          <SearchInput />
          <RegionMenu />
        </div>
        <CountryList />
      </div>
    </div>
  );
}

export default App;
