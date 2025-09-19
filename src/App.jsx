import { Suspense } from 'react';
import './App.css';
import Countrys from './components/countrys/Countrys';
import Loader from './components/countrys/Loader';

const dataPromises = fetch('https://openapi.programming-hero.com/api/all').then(
  (res) => res.json()
);

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold">My visited country</h1>
      <div className="mt-5">
        <Suspense fallback={<Loader></Loader>}>
          <Countrys dataPromises={dataPromises}></Countrys>
        </Suspense>
      </div>
    </>
  );
}

export default App;
