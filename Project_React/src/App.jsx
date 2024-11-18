import React from 'react';
import Privacy_Policy from './pages/Privacy_Policy';
import About_us from './pages/About_us';
// import Profile_Page_komunitas from './pages/Profile_Page_komunitas';
import Term_of_Condition_comunity from './pages/Term_of_Condition_comunity';
import Term_of_Condition from './pages/Term_of_Condition';
// tambah page lain
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/privacy_policy" element={<Privacy_Policy />} />
        <Route path="/About_us" element={<About_us />} />
        {/* <Route path="/Profile_Page_komunitas" element={<Profile_Page_komunitas />} /> */}
        <Route path="/Term_of_Condition_comunity" element={<Term_of_Condition_comunity />} />
        <Route path="/Term_of_Condition" element={<Term_of_Condition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
