import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import HotelList from './pages/HotelList';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route  path='/' element={<Home/>} />
     <Route  path='/hotels' element={<List/>} />
     <Route  path='/hotel/:id' element={<Hotel/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
