import React from 'react'

function Sign_Up() {
  return (
    <div>
      <div className="main-container">
    
        <div className="frame">
           
            <div className="form-container">
                 <img src="/assets/logomr.png" alt="MuseTix Logo" style={{height: '30px'}}/> 
                <p>Belum punya akun? Kenalan dulu yuk...</p>
                <form action="your_signup_endpoint" method="post">
                    <div className="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Masukkan email" required/>
                    </div>
                    <div className="input-group">
                        <label for="name">Nama</label>
                        <input type="text" id="name" placeholder="Masukkan nama" required/>
                    </div>
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Masukkan password" required/>
                    </div>
                    <button type="submit" className="main-btn">Daftar</button>
                </form>
                
                <div className="separator">
                    <hr className="line"/><span>atau</span><hr className="line"/>
                </div>
                
                <button className="google-btn">
                    <img src="/assets/google.png" alt="Google Icon" className="google-icon"/>
                    Daftar dengan akun Google
                </button>
                
            </div>

          
            <div className="image-container">
                <img src="/assets/wp.jpg" alt="Concert" className="side-image"/>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Sign_Up
