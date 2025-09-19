import React, { useState } from 'react';

const Country = ({ country, handelVisitedCountry, handelNotVisited }) => {
  const { flags, name, area, cca3, ccn3 } = country;
  const status = JSON.parse(localStorage.getItem(`visiteStatus${ccn3.ccn3}`))
    ? true
    : false;
  const [visited, setVisited] = useState(status);

  const handelVisited = () => {
    if (!visited) {
      localStorage.setItem(
        `visiteStatus${ccn3.ccn3}`,
        JSON.stringify(!visited)
      );
      setVisited(!visited);
      handelVisitedCountry(country);
    } else {
      localStorage.setItem(
        `visiteStatus${ccn3.ccn3}`,
        JSON.stringify(!visited)
      );
      setVisited(!visited);
      handelNotVisited(country);
    }
  };
  return (
    <div>
      <div
        className={`card bg-base-100 shadow-sm ${
          visited && 'bg-green-800 text-white'
        }`}
      >
        <figure>
          <img
            className="h-52"
            src={flags?.flags?.png}
            alt={flags?.flags?.alt}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name.common}</h2>
          <p>
            Area: {area.area}{' '}
            {area.area > 300000 ? 'Big Country' : 'Small Country'}
          </p>
          <p>Country Code: {cca3.cca3}</p>
          <div className="card-actions justify-end">
            <button onClick={handelVisited} className="btn btn-primary">
              {visited ? 'Visited Country' : 'No Visit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;

// {
//     "name": {
//         "common": "Jamaica",
//         "official": "Jamaica"
//     },
//     "ccn3": {
//         "ccn3": "388"
//     },
//     "currencies": {
//         "currencies": {
//             "JMD": {
//                 "name": "Jamaican dollar",
//                 "symbol": "$"
//             }
//         }
//     },
//     "capital": {
//         "capital": [
//             "Kingston"
//         ]
//     },
//     "region": {
//         "region": "Americas"
//     },
//     "languages": {
//         "languages": {
//             "eng": "English",
//             "jam": "Jamaican Patois"
//         }
//     },
//     "area": {
//         "area": 10991
//     },
//     "cca3": {
//         "cca3": "JAM"
//     },
//     "population": {
//         "population": 2961161
//     },
//     "continents": {
//         "continents": [
//             "North America"
//         ]
//     },
//     "flags": {
//         "flags": {
//             "png": "https://flagcdn.com/w320/jm.png",
//             "svg": "https://flagcdn.com/jm.svg",
//             "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
//         }
//     }
// }
