import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import("./component/Home"));
const Gallery = React.lazy(() => import("./component/Gallery"));
const Dinning = React.lazy(() => import("./component/Dinning"));

const LoadingIndicator = () => <div>Loading...</div>;

const App = () => {
  return (
    <div>
      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/dining' element={<Dinning />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
