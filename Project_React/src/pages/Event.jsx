import React from 'react';
import '../assets/css/Event.css';
import '../assets/css/Footer.css';

function Event() {
  // Data untuk event
  const events = [
    {
      title: "Fragment",
      detail: <a href="/Event_page">Teater Koma</a>,
      price: " 💳 Rp 150.000",
      image: "/public/assets/img/fragmenbaru.png",
      date: " 📅 Senin, 28 Oktober 2024",
      location: " 🏠 Teater Jakarta, Indonesia",
      capacity: " 👥 200 orang"
    },
    {
      title: "Gema Gemilang",
      detail: "Symphony Festival.",
      price: "💳Rp 500.000",
      image: "/public/assets/img/gemagemilang.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠GBK, Jakarta, Indonesia",
      capacity: "👥2000 orang"
    },
    {
      title: "Lautan Jay",
      detail: "Jay Music Studio",
      price: "💳Rp 500.000",
      image: "/public/assets/img/lautanjay.png",
      date: "📅Selasa, 29 Oktober 2024",
      location: "🏠Jakarta Internasional Stadium",
      capacity: "👥1000 orang"
    },
    {
      title: "D2 Live in Concert",
      detail: "Z Label",
      price: "💳Rp 500.000",
      image: "/assets/img/image.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Indonesia Convention Exhibition",
      capacity: "👥1000 orang"
    },
    {
      title: "Blue Sky",
      detail: "Z Label",
      price: "💳Rp 100.000",
      image: "/assets/img/bluesky.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Jakarta Intenasional Stadium",
      capacity: "👥1500 orang"
    },
    {
      title: "Symphony of Nusantara",
      detail: "Symphony",
      price: "💳Rp 150.000",
      image: "/assets/img/symphonyofnusantara.png",
      date: "Minggu, 27 Oktober 2024",
      location: "Teater Jakarta, Jakarta, Indonesia",
      capacity: "200 orang"
    },
    {
      title: "Aku, Aku, Aku",
      detail: "Teater Jakarta",
      price: "💳Rp 150.000",
      image: "/assets/img/akuakuakuuu.png",
      date: "📅Senin, 4 November 2024",
      location: "🏠Teater Jakarta, Jakarta, Indonesia",
      capacity: "👥200 orang"
    },
    {
      title: "Melody",
      detail: "Nusantara Orchestra",
      price: "💳Rp 100.000",
      image: "/assets/img/melody.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Ciputra Artpreneur",
      capacity: "👥200 orang"
    },
    {
      title: "Semarak Bunga Harmoni",
      detail: "Harmoni",
      price: "💳Rp 150.000",
      image: "/assets/img/semarakbungaharmoniii.png",
      date: "📅Sabtu, 26 Oktober 2024",
      location: "🏠Jakarta Concert Hall",
      capacity: "👥200 orang"
    },
    {
      title: "Stary Night",
      detail: "Z Label",
      price: "💳Rp 300.000",
      image: "/assets/img/starynighttt.png",
      date: "📅Rabu, 30 Oktober 2024",
      location: "🏠Jakarta Internasional Stadium",
      capacity: "👥1000 orang"
    },
    {
      title: "Manusia",
      detail: "Teater Jakarta",
      price: "💳Rp 100.000",
      image: "/assets/img/manusiaaa.png",
      date: "📅Senin, 28 Oktober 2024",
      location: "🏠Gedung Kesenian Jakarta",
      capacity: "👥200 orang"
    },
    {
      title: "Spotlight",
      detail: "Teater Jakarta",
      price: "💳Rp 100.000",
      image: "/assets/img/spotlightt.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Teater Garuda Yogyakarta",
      capacity: "👥200 orang"
    },
    {
      title: "Melodies of Indonesia",
      detail: "Muse Orchestra",
      price: "💳Rp 150.000",
      image: "/assets/img/melodiesofindoo.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Jakarta Concert Hall",
      capacity: "👥200 orang"
    },
    {
      title: "The Symphony",
      detail: "Symphony",
      price: "💳Rp 150.000",
      image: "/assets/img/thesymphonyy.png",
      date: "📅Rabu, 30 Oktober 2024",
      location: "🏠Ciputra Artpreneur",
      capacity: "👥200 orang"
    },
    {
      title: "The Red",
      detail: "teater Jakarta",
      price: "💳Rp 150.000",
      image: "/assets/img/the redd.png",
      date: "📅Rabu, 30 Oktober 2024",
      location: "🏠Teater Jakarta, Jakarta, Indonesia",
      capacity: "👥200 orang"
    },
    {
      title: "Melody Nusantara",
      detail: "Nusantara Orchestra",
      price: "💳Rp 150.000",
      image: "/assets/img/melodynusantaraa.png",
      date: "📅Kamis, 31 Oktober 2024",
      location: "🏠Jakarta Concert Hall",
      capacity: "👥200 orang"
    },
    {
      title: "Dari Luka Ke Bahagia",
      detail: "Jay Music Studio",
      price: "💳Rp 300.000",
      image: "/assets/img/darilukakebahagia.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Indonesia Convention Exhibition",
      capacity: "👥1000 orang"
    },
    {
      title: "Java Fest Festival",
      detail: "Java Festival Production",
      price: "💳Rp 150.000",
      image: "/assets/img/javafest.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠JIExpo Kemayoran,  Jakarta",
      capacity: "👥1000 orang"
    },
    {
      title: "Rock N' Roll Heartbreak",
      detail: "Symphony Festival",
      price: "💳Rp 150.000",
      image: "/assets/img/rocknrollhb.png",
      date: "📅Kamis, 31 Oktober 2024",
      location: "🏠Jakarta Internasional Stadium",
      capacity: "👥1000 orang"
    },
    {
      title: "Suara Kota",
      detail: "Symphony",
      price: "💳Rp 150.000",
      image: "/assets/img/suarakotaa.png",
      date: "📅Selasa, 29 Oktober 2024",
      location: "🏠Jakarta Internasional Stadium",
      capacity: "👥200 orang"
    },
    {
      title: "Harmoni Batavia",
      detail: "Nusantara Orchestra",
      price: "💳Rp 150.000",
      image: "/assets/img/Harmonibataviaa.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Jakarta Concert Hall",
      capacity: "👥200 orang"
    },
    {
      title: "Setengah Hati",
      detail: "Teater Jakarta",
      price: "💳Rp 150.000",
      image: "/assets/img/setengahhati.png",
      date: "📅Kamis, 31 Oktober 2024",
      location: "🏠Teater Jakarta, Jakarta, Indonesia",
      capacity: "👥200 orang"
    },
    {
      title: "Bumi Manusia",
      detail: "Teater Koma",
      price: "💳Rp 100.000",
      image: "/assets/img/bumiimanusiaa.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Indonesia Convention Exhibition",
      capacity: "👥200 orang"
    },
    {
      title: "Revolusi",
      detail: "Nusantara Orchestra",
      price: "💳Rp 100.000",
      image: "/assets/img/revolusi.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Art Center, Denpasar, Indonesia",
      capacity: "👥200 orang"
    },
  ];
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
        </div>
        <div className="search-container">
          <input type="text" placeholder="cari event, komunitas, dan kategori" className="search-input" />
          <button className="search-button">
            <img src="/assets/img/search.png" alt="search" className="search-icon" />
          </button>
        </div>
        <nav className="nav">
          <a href="/">Beranda</a>
<<<<<<< HEAD
          <a href="#">Event</a>
=======
          <a href="/Event">Event</a>
>>>>>>> ca57c949ac55dabc94c424550eed4c831495d734
          <a href="/Tiket_page">Tiket</a>
          <a href="/Profil_User">
            <img src="./assets/img/profile.png" alt="profile" className="icon-profile" />
          </a>
        </nav>
      </header>

      <main>
        <h1 className="event-title">EVENT</h1>
          <h3 className="event-subtitle">Lagi Mau nonton apa hari ini?</h3>

        <section className="event-section">
        {/* Add headings here */}
          <div className="event-grid"></div>
          <div className="event-grid">
            {events.map((event, idx) => (
              <div key={idx} className="event-card">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
                <p>{event.price}</p>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>{event.capacity}</p>
                <button className="btn-available">Tersedia</button>
              </div>
            ))}
          </div>
          <button className="btn-more"><a href="/Event">Lihat lainnya</a></button>
        </section>

        <footer className="footer">
          <div className="logo">
            <img src="./assets/img/Logo.png" alt="logo" style={{ height: '24px' }} />
          </div>
          <div className="footer-links">
            <a href="/About_us">Tentang Kami</a>
            <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
            <a href="/Privacy_Policy">Kebijakan Privasi</a>
            <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
            <a href="/Pusat_bantuan">Pusat Bantuan</a>
          </div>
        </footer>
      </main>
<<<<<<< HEAD
=======

      <footer className="footer">
        <div className="logo">
          <img src="./assets/img/Logo.png" alt="logo" style={{ height: '24px' }} />
        </div>
        <div className="footer-links">
          <a href="/About_us">Tentang Kami</a>
          <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
          <a href="/Privacy_Policy">Kebijakan Privasi</a>
          <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
          <a href="/pusat_bantuan">Pusat Bantuan</a>
        </div>
      </footer>
>>>>>>> ca57c949ac55dabc94c424550eed4c831495d734
    </div>
  );
}

export default Event;