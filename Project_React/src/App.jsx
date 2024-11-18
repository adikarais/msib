import React from 'react';
import Privacy_Policy from './pages/Privacy_Policy';
import About_us from './pages/About_us';
// import Profile_Page_komunitas from './pages/Profile_Page_komunitas';
import pusat_bantuan from './pages/pusat_bantuan';
// tambah page lain
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/privacy_policy" element={<Privacy_Policy />} />
        <Route path="/About_us" element={<About_us />} />
        {/* <Route path="/Profile_Page_komunitas" element={<Profile_Page_komunitas />} /> */}
        <Route path="/pusat_bantuan" element={<pusat_bantuan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
