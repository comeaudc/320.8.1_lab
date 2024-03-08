import './App.css';
//Import different pages
import Main from './pages/Main';
import Price from './pages/Price';
import Currencies from './pages/Currencies';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

//Import react router dom tools
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/price/:symbol' element={<Price />} />
        <Route path='/currencies' element={<Currencies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
