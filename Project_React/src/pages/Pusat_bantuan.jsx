import React from 'react'

function Pusat_bantuan() {
  return (
    <div>
      <div className="container my-5">
        <div className="row help-row">
            <div className="col-md-3">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Akun</a>
                    <a href="#" className="list-group-item list-group-item-action">Teknis</a>
                    <a href="#" className="list-group-item list-group-item-action">Pembelian Tiket</a>
                    <a href="#" className="list-group-item list-group-item-action">Penjualan Tiket</a>
                    <a href="#" className="list-group-item list-group-item-action">Pertunjukkan</a>
                </div>
            </div>

            <div className="col-md-9">
                <div className="help-title">Pusat Bantuan</div>

                <div className="help-content">
                    <h5>Bagaimana cara mendaftar di MuseTix?</h5>
                    <ol>
                        <li>Klik tombol masuk di pojok kanan atas pada halaman homepage.</li>
                        <li>Lalu, masuk menggunakan email atau akun Google yang terdaftar. Apabila belum memiliki akun silahkan mendaftar dulu dengan mengklik ‘Daftar’.</li>
                        <li>Silahkan mengisi apa yang tertera disana.</li>
                    </ol>
                </div>

                <div className="help-content">
                    <h5>Lupa password, bagaimana cara menggantinya?</h5>
                    <p>Anda dapat mengubah kata sandi akun Anda dengan masuk ke halaman profil, lalu klik opsi “Ubah Kata Sandi”. Ikuti petunjuk yang ada di layar untuk menyelesaikan proses perubahan.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Pusat_bantuan