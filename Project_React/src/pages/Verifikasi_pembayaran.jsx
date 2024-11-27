import React from 'react'
import '../assets/css/verifikasipembayaran.css';
import '../assets/css/Footer.css';
import '../assets/css/Header.css';

function Verifikasi_pembayaran() {
  return (
    <div>
      <div className="container mt-5">
        <div className="progress-steps">
            <div className="progress-circle active"></div>
            <div className="progress-circle active"></div>
            <div className="progress-circle active"></div>
            <div className="progress-circle active"></div> 
            <div className="progress-circle"></div>
            <div className="progress-circle"></div>
            <div className="progress-line"></div>
            <div className="progress-line-filled"></div>
        </div>
        <div className="d-flex justify-content-between">
            <span className="progress-step-label">Pembayaran Tiket</span>
            <span className="progress-step-label">Masukkan Data Diri</span>
            <span className="progress-step-label">Pilih Pembayaran</span>
            <span className="progress-step-label">Verifikasi Kode</span>
            <span className="progress-step-label">Konfirmasi Pembayaran</span>
            <span className="progress-step-label">Pembayaran Selesai</span>
        </div>

    
        <div className="countdown-timer" id="countdown">10:00</div>
    </div>

  
    <div className="container text-center mt-5">
        <h3>Kode Verifikasi</h3>
        <div className="verification-container">
            <input type="text" maxlength="1" className="verification-input" />
            <input type="text" maxlength="1" className="verification-input" />
            <input type="text" maxlength="1" className="verification-input" />
            <input type="text" maxlength="1" className="verification-input" />
            <input type="text" maxlength="1" className="verification-input" />
            <input type="text" maxlength="1" className="verification-input" />
        </div>
        <div className="verification-text-container">
            <p className="verification-text">Tidak dapat kode verifikasi? <span className="resend-link" onclick="resendCode()">coba kirim ulang</span> <span className="resend-timer" id="timer">60</span></p>
        </div>
        
        <button className="next-button">Selanjutnya</button>
    </div>

    </div>
  )
}

export default Verifikasi_pembayaran