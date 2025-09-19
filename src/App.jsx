import { Suspense, useState } from 'react';
import './App.css';
import Countrys from './components/countrys/Countrys';
import Loader from './components/countrys/Loader';

const dataPromises = fetch('https://openapi.programming-hero.com/api/all').then(
  (res) => res.json()
);

function App() {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const handelVisitedCountry = (c) => {
    const newCountry = [...visitedCountry, c];
    setVisitedCountry(newCountry);
  };
  const handelNotVisited = (noVisitCountry) => {
    const finalVisited = visitedCountry.filter(
      (visited) => visited.ccn3.ccn3 !== noVisitCountry.ccn3.ccn3
    );
    setVisitedCountry(finalVisited);
  };
  return (
    <>
      <h1 className="text-4xl font-bold">
        My visited country: {visitedCountry.length}
      </h1>
      {/* <ol>
        {visitedCountry.map((visitedC) => (
          <li>{visitedC.name.common}</li>
        ))}
      </ol> */}
      <ul className="list bg-base-100 rounded-box shadow-md w-fit">
        {visitedCountry.map((visitedC, index) => {
          return (
            <li key={index} className="list-row">
              <div>
                <img
                  className="size-10 rounded-box"
                  src={visitedC?.flags?.flags?.png}
                  alt={visitedC?.flags?.flags?.alt}
                />
              </div>
              <div>
                <div>{visitedC.name.common}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {visitedC.name.official}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-5">
        <Suspense fallback={<Loader></Loader>}>
          <Countrys
            dataPromises={dataPromises}
            handelVisitedCountry={handelVisitedCountry}
            handelNotVisited={handelNotVisited}
          ></Countrys>
        </Suspense>
      </div>
    </>
  );
}

export default App;
