import React from 'react'
import '../assets/css/pilihmetode.css';
import '../assets/css/Footer.css';
import '../assets/css/Header.css';

function Pilih_metode_pembayaran() {
  return (
    <div>
      <div className="container mt-5">
        <div className="progress-steps">
            <div className="progress-circle active"></div>
            <div className="progress-circle active"></div>
            <div className="progress-circle active"></div> 
            <div className="progress-circle"></div> 
            <div className="progress-circle"></div> 
            <div className="progress-circle"></div> 
            <div className="progress-line"></div>
            <div className="progress-line-filled" style={{width: '38'}}></div> 
        </div>
        <div className="d-flex justify-content-between">
            <span className="progress-step-label">Pembayaran Tiket</span>
            <span className="progress-step-label">Masukkan Data Diri</span>
            <span className="progress-step-label">Pilih Pembayaran</span>
            <span className="progress-step-label">Verifikasi Kode</span>
            <span className="progress-step-label">Konfirmasi Pembayaran</span>
            <span className="progress-step-label">Pembayaran Selesai</span>
        </div>

        <div className="d-flex justify-content-between mt-3">
            <div></div> 
            <div className="countdown-timer" id="countdown">10:00</div>
        </div>
    </div>

  
    <div className="container text-center mt-5">
        <h3>Pilih Metode Pembayaran</h3>
        <div className="row mt-4">
            <div className="col-md-4">
                <div className="card p-4 border-light shadow-sm">
                    <img src="/assets/krtdebit.png" alt="Debit/Credit Card" className="img-fluid mb-3"/>
                    <h5>Kartu Debit/Kredit</h5>
                </div>
            </div>
            <div className="col-md-4">
                <a href="Pembayaran_akunvirtual.html" className="no-link">
                <div className="card p-4 border-light shadow-sm">
                    <img src="/assets/virtualakun.png" alt="Virtual Account" className="img-fluid mb-3"/>
                    <h5>Akun Bank Virtual</h5>
                </div>
            </a>
            </div>
            <div className="col-md-4">
                <div className="card p-4 border-light shadow-sm">
                    <img src="/assets/qris.png" alt="QR Code" className="img-fluid mb-3"/>
                    <h5>Kode QR</h5>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Pilih_metode_pembayaran