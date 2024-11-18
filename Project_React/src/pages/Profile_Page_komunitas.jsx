// import React from 'react';

// function Profile_Page_komunitas() {
//   return (
//     <div>
//       <div>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Profil Musetix</title>
//         <link rel="stylesheet" href="src/assets/css/Profile_page.css" />
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
//         <script src="src/assets/js/Profile_page.js"></script>
//       </div>
//       <body>
//         {/* <!-- Header --> */}
//         <header className="header">
//           <div className="logo">
//             <img src="img/Logo (1).png" alt="logo" style={{height: '30px'}} />
//           </div>

//           {/* <!-- search --> */}
//           <div className="search-container">
//             <input type="text" placeholder="cari event, komunitas, dan kategori" className="search-input" />
//             <button className="search-button">
//               <img src="img/search.png" alt="search" className="search-icon" />
//             </button>
//             {/* <!-- Search icon as button --> */}
//           </div>

//           <nav className="nav">
//             <a href="#">Beranda</a>
//             <a href="#">Event</a>
//             <a href="#">Tiket</a>
//             <a href="#">
//               <img src="img/profile.png" alt="profile" className="icon-profile" />
//             </a>
//           </nav>
//         </header>

//         {/* <!-- Profile Header Section --> */}
//         <section style={{height: '4cm'}}>
//           <div className="section" id="one" style={{background-image: "url(img/wp13688805\ 3.png)"}}></div>
//         </section>
//         <section style="{{display: 'flex'}}">
//           <div className="profile-header" style={{width: '20%'}}>
//             <div className="profile-image">
//               <img className="logo" src="img/fc9fa5ede1a28bad5fad74359c09bfaa 4.png" alt="Profile Picture" />
//             </div>
//             <div className="profile-info">
//               <h1 className="serif">Teater Koma</h1>
//               <p>@teater_komaid</p>
//               <br />
//               <p>❤️ 50 orang</p>
//               <br />
//               <h3>Biografi</h3>
//               <p>Bereksplorasi lewat cerita. Teater Koma sudah berdiri sejak tahun 2000, sudah banyak emosi yang kita sampaikan lewat cerita.</p>
//               <br />
//               <h3>komunitas</h3>
//               <div className="social-icons">
//                 <a href="#">
//                   <img src="img/Vector.png" alt="Discord" />
//                 </a>
//                 <a href="#">
//                   <img src="img/Vector (1).png" alt="Facebook" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* <!-- Event Section --> */}
//           <div className="events" style={{width: '80%'}}>
//             <div className="tab">
//               <button className="tablinks active" onclick="openTab(event, 'aktif')">
//                 Event Aktif
//               </button>
//               <button className="tablinks" onclick="openTab(event, 'lalu')">
//                 Event Lalu
//               </button>
//             </div>

//             <div id="aktif" className="tabcontent" style={{display: 'block'}}>
//               {/* <!-- batas --> */}
//               <div className="row justify-content-center">
//                 <div className="event-card col-md-auto mb-3" style={{display: 'flex'}}>
//                   <div className="card" style={{width: '20rem'}}>
//                     <img src="img/fc9fa5ede1a28bad5fad74359c09bfaa 2.png" className="card-img-top" alt="..." />
//                     <button type="button" className="btn btn-outline-warning" style={{margin-top: '5px'}}>
//                       Warning
//                     </button>
//                     <div className="card-body">
//                       <h4>
//                         <b>Fragmen</b>
//                       </h4>
//                       <p>Teater Koma</p>
//                       <p>Senin, 28 Oktober 2024</p>
//                       <p>📍 Teater Jakarta, Jakarta, Indonesia</p>
//                       <p>👥 200 orang</p>
//                       <div style={{display: 'flex'; justify-content: 'space-between'}}>
//                         <p className="available">Tersedia</p>
//                         <p className="price" style={{align-items: 'end'}}>
//                           100.000
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card" style={{width: '20rem'}}>
//                     <img src="img/fc9fa5ede1a28bad5fad74359c09bfaa 2.png" className="card-img-top" alt="..." />
//                     <button type="button" className="btn btn-outline-warning" style={{margin-top: '5px'}}>
//                       Warning
//                     </button>
//                     <div className="card-body">
//                       <h4>
//                         <b>Fragmen</b>
//                       </h4>
//                       <p>Teater Koma</p>
//                       <p>Senin, 28 Oktober 2024</p>
//                       <p>📍 Teater Jakarta, Jakarta, Indonesia</p>
//                       <p>👥 200 orang</p>
//                       <div style={{display: 'flex'; justify-content: 'space-between'}}>
//                         <p className="available">Tersedia</p>
//                         <p className="price" style={{align-items: 'end'}}>
//                           100.000
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card" style={{width: '20rem'}}>
//                     <img src="img/fc9fa5ede1a28bad5fad74359c09bfaa 2.png" className="card-img-top" alt="..." />
//                     <button type="button" className="btn btn-outline-warning" style={{margin-top: '5px'}}>
//                       Warning
//                     </button>
//                     <div className="card-body">
//                       <h4>
//                         <b>Fragmen</b>
//                       </h4>
//                       <p>Teater Koma</p>
//                       <p>Senin, 28 Oktober 2024</p>
//                       <p>📍 Teater Jakarta, Jakarta, Indonesia</p>
//                       <p>👥 200 orang</p>
//                       <div style={{display: 'flex'; justify-content: 'space-between'}}>
//                         <p className="available">Tersedia</p>
//                         <p className="price" style={{align-items: 'end'}}>
//                           100.000
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* <!-- batas  --> */}
//             </div>

//             <div id="lalu" className="tabcontent">
//               <p>Event lalu akan ditampilkan di sini.</p>
//             </div>
//           </div>
//         </section>

//         {/* <!-- Footer --> */}

//         <footer className="footer">
//           {/* <!-- Logo Musetix --> */}
//           <div className="logo">
//             <img src="img/Logo.png" alt="logo" style={{height: '24px'}} />
//           </div>

//           {/* <!-- Tautan di bagian kanan --> */}
//           <div className="footer-links">
//             <a href="#">Tentang Kami</a>
//             <a href="#">Syarat dan Ketentuan</a>
//             <a href="Privacy_Policy.html">Kebijakan Privasi</a>
//             <a href="#">Peraturan Komunitas</a>
//             <a href="#">Pusat Bantuan</a>
//           </div>
//         </footer>
//       </body>
//     </div>
//   );
// }

// export default Profile_Page_komunitas;
