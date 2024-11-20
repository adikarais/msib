import React from 'react';
import '../assets/css/Pusat_bantuan.css';
import '../assets/css/Footer.css';

function Pusat_bantuan() {
  return (
    <div>
      <div>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pusat Bantuan</title>
        <link href="bootstrap/bootstrap-5.0.2-dist/css/bootstrap.min.css" rel="stylesheet" />
        {/* <!-- Include Google Fonts --> */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        <script src="bootstrap/bootstrap-5.0.2-dist/js/bootstrap.min.js"></script>
      </div>
      <body>
        {/* <!-- Header --> */}
        <header className="header">
          <div className="logo">
            <img src="./assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
          </div>

          {/* <!-- search --> */}
          <div className="search-container">
            <input type="text" placeholder="cari event, komunitas, dan kategori" className="search-input" />
            <button className="search-button">
              <img src="./assets/img/search.png" alt="search" className="search-icon" />
            </button>
            {/* <!-- Search icon as button --> */}
          </div>

          <nav className="nav">
            <a href="/">Beranda</a>
            <a href="#">Event</a>
            <a href="/Profile_Page_komunitas">PPK</a>
            <a href="/Tiket">Tiket</a>
            <a href="/Profil_User">
              <img src="./assets/img/profile.png" alt="profile" className="icon-profile" />
            </a>
          </nav>
        </header>

        {/* <!-- Main Content --> */}
        <div className="container my-5">
          <div className="row help-row">
            {/* <!-- Sidebar --> */}
            <div className="col-md-3">
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                  Akun
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Teknis
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Pembelian Tiket
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Penjualan Tiket
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Pertunjukkan
                </a>
              </div>
            </div>

            {/* <!-- Help Center Content --> */}
            <div className="col-md-9">
              <div className="help-title">Pusat Bantuan</div>

              <div className="help-content">
                <h5>Bagaimana cara mendaftar di MuseTix?</h5>
                <ol style={{ marginLeft: '20px' }}>
                  <li>Klik tombol masuk di pojok kanan atas pada halaman homepage.</li>
                  <li>Lalu, masuk menggunakan email atau akun Google yang terdaftar. Apabila belum memiliki akun silahkan mendaftar dulu dengan mengklik ‘Daftar’.</li>
                  <li>Silahkan mengisi apa yang tertera disana.</li>
                </ol>
              </div>

              <div className="help-content">
                <h5>Lupa password, bagaimana cara menggantinya?</h5>
                <p>Anda dapat mengubah kata sandi akun Anda dengan masuk ke halaman profil, lalu klik opsi “Ubah Kata Sandi”. Ikuti petunjuk yang ada di layar untuk menyelesaikan proses perubahan.</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <footer className="footer">
          {/* <!-- Logo Musetix --> */}
          <div className="logo">
            <img src="./assets/img/Logo.png" alt="logo" style={{ height: '24px' }} />
          </div>

          {/* <!-- Tautan di bagian kanan --> */}
          <div className="footer-links">
            <a href="/About_us">Tentang Kami</a>
            <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
            <a href="/Privacy_Policy">Kebijakan Privasi</a>
            <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
            <a href="/Pusat_bantuan">Pusat Bantuan</a>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default Pusat_bantuan;
