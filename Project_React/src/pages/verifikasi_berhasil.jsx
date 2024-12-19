import React from 'react';
import '../assets/css/verifikasi_berhasil.css'; // Ensure the CSS file is present

function VerifikasiBerhasil() {
    return (
        <div className="success-container text-center">
            <img src="/public/assets/img/ceklis.png" alt="Verifikasi Berhasil" />
            <h1>Verifikasi Berhasil</h1>
            <p>Selamat datang di <strong>MuseTix</strong>,<br /> temukan pertunjukan impian Anda bersama kami</p>
            <button className="btn home-button" onClick={() => console.log("Navigasi ke Home")}><a href="/Home">Beranda</a></button>
        </div>
    );
}

export default VerifikasiBerhasil;
