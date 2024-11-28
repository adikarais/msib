import React from 'react'
import '../assets/css/tiketpage.css';



function Tiket_page() {
  return (
    <div>

<head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Musetix - Profile</title>
        <link rel="stylesheet" href="src/assets/css/profil.css" />
        <link rel="stylesheet" href="src/assets/css/Footer.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </head>
      <body>
        {/* <!-- Header --> */}
        <section className="header">
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
        </section>
      
      <div className="banner" style={{ height: '200px', backgroundImage: "url('/assets/img/bgtiket.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      
      <div className="categories d-flex justify-content-center align-items-center gap-3">
        <button>Konser</button>
        <button>Orkestra</button>
        <button>Teater</button>
        <img src="/assets/img/lokasi.png" alt="Lokasi" className="icon" />
        <img src="/assets/img/kalender.png" alt="Kalender" className="icon" />
      </div>

      
      <div className="events container">
        
        
        <div className="event-card">
          <div className="badge">Paling Diminati <span>&#8635;</span></div>
          <img src="/assets/img/fragmen.png" alt="Event 1" />
          <div className="event-details">
            <span className="category">Teater</span>
            <h3>Fragmen</h3>
            <p className="organizer">Teater Koma</p>
            <p><span>&#128197;</span> Senin, 28 Oktober 2024</p>
            <p><span>&#127968;</span> Teater Jakarta, Jakarta, Indonesia</p>
            <p><span>&#128101;</span> 200 orang</p>
            <p className="status">Tersedia</p>
            <p className="price"><span>&#128179;</span> Rp100.000</p>
          </div>
        </div>

       
        <div className="event-card">
          <img src="/assets/img/gemagemilang.png" alt="Event 2" />
          <div className="event-details">
            <span className="category">Konser</span>
            <h3>Gema Gamelan</h3>
            <p className="organizer">Symphony Festival</p>
            <p><span>&#128197;</span> Selasa, 25 November 2024</p>
            <p><span>&#127968;</span> GBK, Jakarta, Indonesia</p>
            <p><span>&#128101;</span> 2000 orang</p>
            <p className="status">Tersedia</p>
            <p className="price"><span>&#128179;</span> Rp500.000</p>
          </div>
        </div>

        
        <div className="event-card">
          <img src="/assets/img/lautanjay.png" alt="Event 3" />
          <div className="event-details">
            <span className="category">Konser</span>
            <h3>Lautan Jay</h3>
            <p className="organizer">Jay Music Studio</p>
            <p><span>&#128197;</span> Jumat, 28 November 2024</p>
            <p><span>&#127968;</span> Jakarta International Stadium</p>
            <p><span>&#128101;</span> 1000 orang</p>
            <p className="status">Tersedia</p>
            <p className="price"><span>&#128179;</span> Rp500.000</p>
          </div>
        </div>

        
        <div className="event-card">
          <img src="/assets/img/concert.png" alt="Event 4" />
          <div className="event-details">
            <span className="category">Konser</span>
            <h3>D2 Live In Concert</h3>
            <p className="organizer">Z Label</p>
            <p><span>&#128197;</span> Sabtu, 15 Desember 2024</p>
            <p><span>&#127968;</span> Indonesia Convention Exhibition</p>
            <p><span>&#128101;</span> 1000 orang</p>
            <p className="status">Tersedia</p>
            <p className="price"><span>&#128179;</span> Rp500.000</p>
          </div>
        </div>
      </div>
      
        {/* Footer */}
        <footer className="footer">
          <div className="logo">
            <img src="./assets/img/Logo.png" alt="logo" style={{ height: '24px' }} />
          </div>
          <div className="footer-links">
            <a href="/About_us">Tentang kami</a>
            <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
            <a href="/Privacy_Policy">Kebijakan Privasi</a>
            <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
            <a href="/Pusat_bantuan">Pusat Bantuan</a>
          </div>
        </footer>
      </body>
    
    </div>

  )
}

export default Tiket_page;