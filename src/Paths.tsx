import { Route, Routes } from 'react-router-dom';
import Bertopic from './components/Bertopic';
import Data from './components/Data';
import NotFound from './components/NotFound';
import Home from './components/Home'
import Ldamallet from './components/Ldamallet'
import Abstract from './components/Abstract'

function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="abstract" element={<Abstract />} />
      <Route path="/ldamallet" element={<Ldamallet />} />
      <Route path="/bertopic" element={<Bertopic />} />
      <Route path="/data" element={<Data />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Paths;