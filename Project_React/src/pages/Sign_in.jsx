import React from 'react'

function Sign_in() {
  return (
    <div>
       <div className="main-container">
  
        <div className="frame">
            <div className="form-container">
                <img src="/assets/logomr.png" alt="MuseTix Logo" style={{height: '30px'}}/> 
                <p>Sudah punya akun? Masuk dulu gih...</p>
                <form action="your_login_endpoint" method="post">
                    <div className="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Masukkan email" required/>
                    </div>
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Masukkan password" required/>
                    </div>
                    <button type="submit" className="main-btn">Masuk</button>
                </form>
                
                <div className="separator">
                    <hr className="line"/><span>atau</span><hr className="line"/>
                </div>
                
                <button className="google-btn">
                    <img src="/assets/google.png" alt="Google Icon" className="google-icon"/>
                    Masuk dengan akun Google
                </button>
                
                <p className="signup-text">Belum punya akun? <a href="/Sign_Up">daftar</a></p>
            </div>

            
            <div className="image-container">
                <img src="/assets/wp.jpg" alt="Concert" className="side-image"/>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Sign_in
