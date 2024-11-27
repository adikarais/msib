import React from 'react'
import '../assets/css/pembayaranakun.css';
import '../assets/css/Footer.css';
import '../assets/css/Header.css';

function Pembayaran_akunvirtual() {
  return (
    <div>
        <div className="container mt-5">
            <div className="progress-steps">
                <div className="progress-circle active"></div>
                <div className="progress-circle active"></div>
                <div className="progress-circle active"></div>
                <div className="progress-circle active"></div>
                <div className="progress-circle active"></div>
                <div className="progress-circle"></div> {/* Additional progress circle */}
                <div className="progress-line "></div>
                <div className="progress-line-filled"></div>
            </div>
            <div className="d-flex justify-content-between">
                <span className="progress-step-label">Pembayaran Tiket</span>
                <span className="progress-step-label">Masukkan Data Diri</span>
                <span className="progress-step-label">Pilih Pembayaran</span>
                <span className="progress-step-label">Verifikasi Kode</span>
                <span className="progress-step-label">Konfirmasi Pembayaran</span>
                <span className="progress-step-label">Pembayaran Selesai</span> {/* Added label */}
            </div>

            <div className="d-flex align-items-center justify-content-between mt-4">
                <h3 className="akun-bank-title">AKUN BANK VIRTUAL</h3>
                <div className="countdown-timer" id="countdown">10:00</div>
            </div>
        </div>

        <div className="container mt-4">
            <div className="form-container mx-auto" style={{maxWidth: '500px'}}>
                <div className="form-group mb-3">
                    <label>Nama Depan</label>
                    <input type="text" className="form-control" placeholder="Ketik Nama depan kamu"/>
                </div>
                <div className="form-group mb-3">
                    <label>Nama Belakang</label>
                    <input type="text" className="form-control" placeholder="Ketik Nama belakang kamu"/>
                </div>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Ketik email kamu"/>
                </div>
                <div className="form-group mb-3">
                    <label>No. Telepon</label>
                    <input type="tel" className="form-control" placeholder="Ketik No. telepon kamu"/>
                </div>
                <div className="form-group mb-3">
                    <label>Bank Tujuan</label>
                    <input type="text" className="form-control" placeholder="Ketik bank tujuan yang kamu mau"/>
                </div>
                <div className="form-group mb-3">
                    <label>No. Akun Virtual</label>
                    <input type="text" className="form-control" placeholder="Ini no akun virtual kamu"/>
                </div>
            </div>
        </div>

        <button className="btn btn-yellow btn-small btn-small-center">Selanjutnya</button>
    </div>
  )
}

export default Pembayaran_akunvirtual;