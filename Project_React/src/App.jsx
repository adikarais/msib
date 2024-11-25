import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Verifikasi from './pages/Verifikasi';
import Sign_in from './pages/Sign_in';
import Sign_Up from './pages/Sign_Up';
import Pusat_bantuan from './pages/Pusat_bantuan';
import Pembayaran_akunvirtual from './pages/Pembayaran_akunvirtual';
import Pilih_metode_pembayaran from './pages/Pilih_metode_pembayaran';
import Verifikasi_pembayaran from './pages/Verifikasi_pembayaran';
import Tiket_page from './pages/Tiket_page';

import Header from './components/Header';
import Footer from './components/Footer';

// Layout utama aplikasi
function Layout() {
  const location = useLocation();

  // Daftar rute yang tidak memerlukan Header dan Footer
  const noHeaderFooterRoutes = ['/Sign_in', '/Sign_Up', '/Verifikasi'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header hanya ditampilkan jika rute saat ini tidak ada di noHeaderFooterRoutes */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}

      {/* Konten Utama */}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Sign_in />} /> {/* Rute default */}
          <Route path="/Pilih_metode_pembayaran" element={<Pilih_metode_pembayaran />} />
          <Route path="/Verifikasi" element={<Verifikasi />} />
          <Route path="/Sign_in" element={<Sign_in />} />
          <Route path="/Sign_Up" element={<Sign_Up />} />
          <Route path="/Pusat_bantuan" element={<Pusat_bantuan />} />
          <Route path="/Pembayaran_akunvirtual" element={<Pembayaran_akunvirtual />} />
          <Route path="/Verifikasi_pembayaran" element={<Verifikasi_pembayaran />} />
          <Route path="/Tiket_page" element={<Tiket_page />} />
        </Routes>
      </div>

      {/* Footer hanya ditampilkan jika rute saat ini tidak ada di noHeaderFooterRoutes */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

// Komponen utama aplikasi
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;