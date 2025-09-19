import { Suspense, useState } from 'react';
import './App.css';
import Countrys from './components/countrys/Countrys';
import Loader from './components/countrys/Loader';

const dataPromises = fetch('https://openapi.programming-hero.com/api/all').then(
  (res) => res.json()
);

function App() {
  const browserData = localStorage.getItem('visitedCountry')
    ? JSON.parse(localStorage.getItem('visitedCountry'))
    : [];
  const [visitedCountry, setVisitedCountry] = useState(browserData);
  const [searchValue, setSearchValue] = useState('');

  const localStorageSet = (data) =>
    localStorage.setItem('visitedCountry', JSON.stringify(data));

  const handelVisitedCountry = (c) => {
    const newCountry = [...visitedCountry, c];
    // localStorage.setItem('visitedCountry', JSON.stringify(newCountry));
    localStorageSet(newCountry);
    setVisitedCountry(newCountry);
  };
  const handelNotVisited = (noVisitCountry) => {
    const finalVisited = visitedCountry.filter(
      (visited) => visited.ccn3.ccn3 !== noVisitCountry.ccn3.ccn3
    );
    localStorageSet(finalVisited);

    setVisitedCountry(finalVisited);
  };

  const searchCountry = (e) => {
    const inputValue = e.target.value.trim().toLowerCase();
    setSearchValue(inputValue);
  };

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold">
        My visited country: {visitedCountry.length}
      </h1>
      <ul className="list bg-base-100 rounded-box shadow-md md:w-fit md:flex-row flex-wrap">
        {visitedCountry.map((visitedC, index) => (
          <li key={index} className="list-row">
            <div>
              <img
                className="size-10 rounded-box"
                src={visitedC?.flags?.flags?.png}
                alt={visitedC?.flags?.flags?.alt}
              />
            </div>
            <div>
              <h4>{visitedC.name.common}</h4>
              <p className="text-xs uppercase font-semibold opacity-60">
                {visitedC.name.official}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="py-10">
        <label className="mr-2" htmlFor="">
          Search :
        </label>
        <input
          onChange={(e) => searchCountry(e)}
          type="search"
          placeholder="Search countries..."
          className="input"
        />
      </div>
      <div className="mt-5">
        <Suspense fallback={<Loader></Loader>}>
          <Countrys
            dataPromises={dataPromises}
            handelVisitedCountry={handelVisitedCountry}
            handelNotVisited={handelNotVisited}
            searchValue={searchValue}
          ></Countrys>
        </Suspense>
      </div>
    </>
  );
}

export default App;
