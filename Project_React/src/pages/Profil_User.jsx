import React from 'react';

function Profil_User() {
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
            {/* <img src="./assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} /> */}
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
            <a href="/Profile_Page_komunitas">Tiket</a>
            <a href="/Profil_User">
              <img src="./assets/img/profile.png" alt="profile" className="icon-profile" />
            </a>
          </nav>
        </section>

        <main>
          <aside>
            <ul>
              <li className="active">Profile</li>
              <li>Event-ku</li>
              <li>Tiket-ku</li>
              <li>Notifikasi</li>
              <li>Favorit</li>
              <li>Pengaturan</li>
              <li>Keluar Akun</li>
            </ul>
          </aside>

          <section className="profile-section">
            <div className="profile-card">
              <div className="profile-header">
                <img src="./assets/img/1.png" alt="Profile Picture" className="profile-picture" />
                <div className="profile-info">
                  <h2>Gema Santika</h2>
                  <p>@gema_234</p>
                  <p>❤️ 50 orang</p>
                </div>
              </div>

              <div className="profile-content">
                <div className="biografi">
                  <h3>Biografi</h3>
                  <p>Paling suka terhanyut dalam cerita di balik panggung. Mulai dari teater klasik, opera yang megah, hingga konser indie yang intim, setiap pertunjukan adalah petualangan baru.</p>
                </div>
                <div className="komunitas">
                  <h3>Komunitas</h3>
                  <a href="#">
                    <img src="./assets/img/discord.png" alt="Discord Icon" className="community-icon" />
                  </a>
                  <a href="#">
                    <img src="./assets/img/fb.png" alt="Facebook Icon" className="community-icon" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="logo">
            <img src="./assets/img/Logo.png" alt="logo" style={{ height: '24px' }} />
          </div>
          <div className="footer-links">
            <a href="/About_us">Tentang Kami</a>
            <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
            <a href="/Privacy_Policy">Kebijakan Privasi</a>
            <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
            <a href="#">Pusat Bantuan</a>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default Profil_User;