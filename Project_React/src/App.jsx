import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Privacy_Policy from './pages/Privacy_Policy';
import About_us from './pages/About_us';
import Profile_Page_komunitas from './pages/Profile_Page_komunitas';
import Term_of_Condition_comunity from './pages/Term_of_Condition_comunity';
import Term_of_Condition from './pages/Term_of_Condition';
import Profil_User from './pages/Profil_User';
import Home from './pages/Home';
import Pusat_bantuan from './pages/Pusat_bantuan';
import Tiket from './pages/Tiket';
import Event from './pages/Event';
// tambah page lain

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/About_us" element={<About_us />} />
        <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
        <Route path="/Profile_Page_komunitas" element={<Profile_Page_komunitas />} />
        <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">NOT FOUND PAGE.</h1>} />
        <Route path="/Term_of_Condition_comunity" element={<Term_of_Condition_comunity />} />
        <Route path="/Term_of_Condition" element={<Term_of_Condition />} />
        <Route path="/Profil_User" element={<Profil_User />} />
        <Route path="/" element={<Home />} />
        <Route path="/Pusat_bantuan" element={<Pusat_bantuan />} />
        <Route path="/Tiket" element={<Tiket />} />
        <Route path="/Event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
