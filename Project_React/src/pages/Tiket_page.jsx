import React from 'react'


function Tiket_page() {
  return (
    <div>
      
      <div className="banner" style={{ height: '200px', backgroundImage: "url('/assets/bgtiket.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      
      <div className="categories d-flex justify-content-center align-items-center gap-3">
        <button>Konser</button>
        <button>Orkestra</button>
        <button>Teater</button>
        <img src="/assets/lokasi.png" alt="Lokasi" className="icon" />
        <img src="/assets/kalender.png" alt="Kalender" className="icon" />
      </div>

      
      <div className="events container">
        
        
        <div className="event-card">
          <div className="badge">Paling Diminati <span>&#8635;</span></div>
          <img src="/assets/fragmen.png" alt="Event 1" />
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
          <img src="/assets/gemagemilang.png" alt="Event 2" />
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
          <img src="/assets/lautanjay.png" alt="Event 3" />
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
          <img src="/assets/concert.png" alt="Event 4" />
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
    
    </div>

  )
}

export default Tiket_page;