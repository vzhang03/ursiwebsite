import { Route, Routes } from 'react-router-dom';
import Bertopic from './components/Bertopic';
import Links from './components/Links';
import NotFound from './components/NotFound';
import Home from './components/Home'
import Ldamallet from './components/Ldamallet'
import Welcome from './components/Welcome'

function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/ldamallet" element={<Ldamallet />} />
      <Route path="/bertopic" element={<Bertopic />} />
      <Route path="/links" element={<Links />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Paths;