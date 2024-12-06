import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import Verifikasi from './pages/Verifikasi';
import Sign_in from './pages/Sign_in';
import Sign_Up from './pages/Sign_Up';
import Pembayaran_akunvirtual from './pages/Pembayaran_akunvirtual';
import Pilih_metode_pembayaran from './pages/Pilih_metode_pembayaran';
import Verifikasi_pembayaran from './pages/Verifikasi_pembayaran';
import Tiket_page from './pages/Tiket_page';
import Deskripsi_eventku from './pages/Deskripsi_eventku';
import Detail_pembayaran from './pages/Detail_pembayaran';
import Event_ku from './pages/Event_ku';
import Favorit from './pages/Favorit';
import Notifikasi from './pages/Notifikasi';
import Event_Page from './pages/Event_Page';


// import Headerbaruu from './pages/Headerbaruu';
// import Footerbaruu from './pages/Footerbaruu';


function AppLayout() {
  const location = useLocation();

  // Semua path yang tidak memerlukan header/footer
  const noHeaderFooterRoutes = ['/sign_in', '/sign_up', '/verifikasi'];

  // Cek apakah rute saat ini termasuk dalam daftar rute tanpa header/footer
  const isExcludedRoute = noHeaderFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Tampilkan Header jika bukan rute yang dikecualikan */}
      {/* {!isExcludedRoute && <Headerbaruu />} */}
      <main style={{ flex: 1 }}>
        <Routes>
          {/* Definisi semua rute */}
          <Route path="/Home" element={<Home />} />
          <Route path="/About_us" element={<About_us />} />
          <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
          <Route path="/Profile_Page_komunitas" element={<Profile_Page_komunitas />} />
          <Route path="/Term_of_Condition_comunity" element={<Term_of_Condition_comunity />} />
          <Route path="/Term_of_Condition" element={<Term_of_Condition />} />
          <Route path="/Profil_user" element={<Profil_User />} />
          <Route path="/Pusat_bantuan" element={<Pusat_bantuan />} />
          <Route path="/Tiket" element={<Tiket />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Sign_in" element={<Sign_in />} />
          <Route path="/Sign_up" element={<Sign_Up />} />
          <Route path="/Verifikasi" element={<Verifikasi />} />
          <Route path="/Pilih_metode_pembayaran" element={<Pilih_metode_pembayaran />} />
          <Route path="/Pembayaran_akunvirtual" element={<Pembayaran_akunvirtual />} />
          <Route path="/Verifikasi_pembayaran" element={<Verifikasi_pembayaran />} />
          <Route path="/Tiket_page" element={<Tiket_page />} />
          <Route path="/Deskripsi_eventku" element={<Deskripsi_eventku/>}/>
          <Route path="/Detail_pembayaran" element={<Detail_pembayaran/>}/>
          <Route path="/Event_ku" element={<Event_ku/>}/>
          <Route path="/Favorit" element={<Favorit/>}/>
          <Route path="/Notifikasi" element={<Notifikasi/>}/>
          <Route path="/Event_Page" element={<Event_Page/>}/>


          {/* Fallback untuk halaman yang tidak ditemukan */}
          <Route
            path="*"
            element={
              <h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">
                NOT FOUND PAGE.
              </h1>
            }
          />
        </Routes>
      </main>
      {/* Tampilkan Footer jika bukan rute yang dikecualikan */}
      {/* {!isExcludedRoute && <Footerbaruu />} */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;


// // COBA
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import React from 'react';
// import Privacy_Policy from './pages/Privacy_Policy';
// import About_us from './pages/About_us';
// import Profile_Page_komunitas from './pages/Profile_Page_komunitas';
// import Term_of_Condition_comunity from './pages/Term_of_Condition_comunity';
// import Term_of_Condition from './pages/Term_of_Condition';
// import Profil_User from './pages/Profil_User';
// import Home from './pages/Home';
// import Pusat_bantuan from './pages/Pusat_bantuan';
// import Tiket from './pages/Tiket';
// import Event from './pages/Event';
// import Verifikasi from './pages/Verifikasi';
// import Sign_in from './pages/Sign_in';
// import Sign_Up from './pages/Sign_Up';
// import Pembayaran_akunvirtual from './pages/Pembayaran_akunvirtual';
// import Pilih_metode_pembayaran from './pages/Pilih_metode_pembayaran';
// import Verifikasi_pembayaran from './pages/Verifikasi_pembayaran';
// import Tiket_page from './pages/Tiket_page';
// // import Header from './components/Header';
// // import Footer from './components/Footer';
// // tambah page lain

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/About_us" element={<About_us />} />
//         <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
//         <Route path="/Profile_Page_komunitas" element={<Profile_Page_komunitas />} />
//         <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">NOT FOUND PAGE.</h1>} />
//         <Route path="/Term_of_Condition_comunity" element={<Term_of_Condition_comunity />} />
//         <Route path="/Term_of_Condition" element={<Term_of_Condition />} />
//         <Route path="/Profil_User" element={<Profil_User />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/Pusat_bantuan" element={<Pusat_bantuan />} />
//         <Route path="/Tiket" element={<Tiket />} />
//         <Route path="/Event" element={<Event />} />
//         {/* <Route path="/" element={<Sign_in />} /> Rute default */}
//         <Route path="/Pilih_metode_pembayaran" element={<Pilih_metode_pembayaran />} />
//         <Route path="/Verifikasi" element={<Verifikasi />} />
//         <Route path="/Sign_in" element={<Sign_in />} />
//         <Route path="/Sign_Up" element={<Sign_Up />} />
//         <Route path="/Pusat_bantuan" element={<Pusat_bantuan />} />
//         <Route path="/Pembayaran_akunvirtual" element={<Pembayaran_akunvirtual />} />
//         <Route path="/Verifikasi_pembayaran" element={<Verifikasi_pembayaran />} />
//         <Route path="/Tiket_page" element={<Tiket_page />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
