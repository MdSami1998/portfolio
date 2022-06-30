import './App.css';
import Navbar from './components/Pages/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Contacts from './components/Pages/Contacts/Contacts';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/contact' element={<Contacts></Contacts>}></Route>
      </Routes>
    </div >
  );
}

export default App;

