import React, { useState, useEffect } from 'react';
import '../assets/css/verifikasi.css'; // Pastikan file CSS Anda ada

function Verifikasi() {
  const [code, setCode] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(60); // Mulai dari 60 detik
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false); // Status verifikasi

  // Mengubah nilai input
  const handleInputChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Pindah ke input berikutnya jika ada input
      if (value && index < 5) {
        document.getElementById(`code${index + 2}`).focus();
      }
    }
  };

  // Kirim ulang kode verifikasi
  const resendCode = () => {
    setTimer(60); // Reset timer ke 60 detik
    setCode(Array(6).fill("")); // Kosongkan input kode
    setErrorMessage(""); // Hapus pesan error
    console.log("Kode verifikasi dikirim ulang."); // Log untuk testing
  };

  // Verifikasi kode
  const verifyCode = () => {
    const enteredCode = code.join("");
    const correctCode = "123456"; // Kode verifikasi yang benar

    if (enteredCode.includes("")) {
      setErrorMessage("Harap masukkan kode verifikasi lengkap.");
    } else if (enteredCode === correctCode) {
      setIsVerified(true); // Ubah status verifikasi jika kode benar
    } else {
      setErrorMessage("Kode yang dimasukkan salah. Silakan coba lagi.");
    }
  };

  // Timer menggunakan useEffect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1); // Kurangi timer setiap detik
      }, 1000);

      return () => clearInterval(interval); // Hapus interval jika komponen di-unmount
    }
  }, [timer]);

  return (
    <div className="container">
       <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.2/css/bootstrap.min.css" rel="stylesheet"></link>
      {/* Tampilan jika belum diverifikasi */}
      {!isVerified ? (
        <div className="verification-container">
          {/* Logo */}
          <img src="/assets/img/logomr.png" alt="MuseTix Logo" className="logo" />

          {/* Header */}
          <h5>Masukkan Kode Verifikasi</h5>
          <p>Kode verifikasi telah dikirim ke emailmu</p>

          {/* Input Kode */}
          <div className="d-flex justify-content-center mb-3 code-input-container">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                id={`code${index + 1}`}
                className="code-input"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(e.target.value, index)}
              />
            ))}
          </div>

          {/* Kirim ulang */}
          <p>
            Kirim ulang kode?{" "}
            <span className="resend-link" onClick={resendCode}>
              kirim kode
            </span>{" "}
            {timer > 0 && <span className="resend-timer">{timer}s</span>}
          </p>

          {/* Pesan error */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* Tombol Verifikasi */}
          <button className="btn verify-button" onClick={verifyCode}>
            Verifikasi Kode
          </button>
        </div>
      ) : (
        // Tampilan jika verifikasi berhasil
        <div className="success-container">
          <img src="/assets/img/ceklis.png" alt="Verifikasi Berhasil" className="success-icon" />
          <h1>Verifikasi Berhasil</h1>
          <p>
            Selamat datang di <strong>MuseTix</strong>,<br />
            temukan pertunjukkan impianmu bersama kami.
          </p>
          <button
            className="btn home-button"
            onClick={() => console.log("Navigasi ke Beranda")} // Tambahkan logika navigasi jika perlu
          >
            Beranda
          </button>
        </div>
      )}
    </div>
  );
}

export default Verifikasi;