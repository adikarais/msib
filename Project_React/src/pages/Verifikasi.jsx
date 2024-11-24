import React, { useState, useEffect } from "react";

function Verifikasi() {
  const [code, setCode] = useState(Array(6).fill("")); // State untuk menyimpan 6 digit kode
  const [timer, setTimer] = useState(60); // Timer untuk pengiriman ulang kode
  const [errorMessage, setErrorMessage] = useState(""); // Pesan kesalahan
  const [isVerified, setIsVerified] = useState(false); // Status verifikasi

  // Fungsi untuk menghandle input kode verifikasi
  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.slice(0, 1); // Pastikan hanya 1 karakter yang bisa dimasukkan
    setCode(newCode);

    // Pindah ke input berikutnya jika diisi
    if (value && index < 5) {
      document.getElementById(`code${index + 2}`).focus();
    }
  };

  // Fungsi untuk mengirim ulang kode verifikasi
  const resendCode = () => {
    setTimer(60); // Reset timer
    setErrorMessage(""); // Reset pesan error
    setCode(Array(6).fill("")); // Reset input kode
    console.log("Kode verifikasi dikirim ulang.");
    // Tambahkan logika pengiriman kode di sini
  };

  // Fungsi untuk memverifikasi kode
  const verifyCode = () => {
    const enteredCode = code.join(""); // Gabungkan input menjadi string
    const correctCode = "123456"; // Kode verifikasi yang benar (contoh)

    if (enteredCode.includes("")) {
      setErrorMessage("Harap masukkan kode verifikasi lengkap.");
    } else if (enteredCode === correctCode) {
      setIsVerified(true); // Jika kode benar
    } else {
      setErrorMessage("Kode yang dimasukkan salah. Silakan coba lagi.");
    }
  };

  // Countdown timer logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div className="container">
      {!isVerified ? (
        <div className="verification-container">
          {/* Logo */}
          <img src="/assets/logomr.png" alt="MuseTix Logo" className="logo" />

          {/* Header */}
          <h5>Masukan Kode Verifikasi</h5>
          <p className="instruction">Kode verifikasi telah dikirim melalui emailmu</p>

          {/* Input Kode Verifikasi */}
          <div className="code-input-container">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                id={`code${index + 1}`}
                className="code-input"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </div>

          {/* Kirim Ulang dan Timer */}
          <p className="resend-container">
            Kirim ulang kode?
            <span className="resend-link" onClick={resendCode}>
              {" "}
              kirim kode
            </span>
            <span className="resend-timer">{timer > 0 ? ` (${timer}s)` : ""}</span>
          </p>

          {/* Pesan Error */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* Tombol Verifikasi */}
          <button className="btn verify-button" onClick={verifyCode}>
            Verifikasi Kode
          </button>
        </div>
      ) : (
        <div className="success-container">
          <img src="ceklis.png" alt="Verifikasi Berhasil" className="success-icon" />
          <h1>Verifikasi Berhasil</h1>
          <p>
            Selamat datang di <strong>MuseTix</strong>,<br />
            temukan pertunjukkan impianmu bersama kami
          </p>
          <button className="btn home-button" onClick={() => console.log("Navigasi ke Beranda")}>
            Beranda
          </button>
        </div>
      )}
    </div>
  );
}

export default Verifikasi;