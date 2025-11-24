import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-logo">⚡ Discoverisk</div>
        <h1>Pahami Profil Risiko Anda Dengan Mudah</h1>
        <p>
          Aplikasi edukasi yang membantu pemula memahami seberapa besar tingkat
          risiko yang nyaman bagi mereka, dan apakah sesuai dengan ekspektasi
          yang mereka inginkan.
        </p>
        <button className="cta-btn">Mulai Analisis</button>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Fokus Utama Aplikasi</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="icon">🧭</div>
            <h3>Kenali Profil Risiko Anda</h3>
            <p>
              Mengukur tingkat kenyamanan risiko Anda berdasarkan jawaban
              sederhana untuk memberikan gambaran objektif mengenai profil Anda.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">⚖️</div>
            <h3>Bandingkan Harapan vs Kenyataan</h3>
            <p>
              Menunjukkan apakah preferensi risiko Anda sejalan dengan risiko
              sebenarnya dari pilihan investasi Anda, tanpa memberikan saran
              finansial.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">💡</div>
            <h3>Edukasi Risiko untuk Pemula</h3>
            <p>
              Menyediakan pemahaman dasar mengenai risiko sehingga Anda dapat
              belajar tanpa rasa bingung, aman, dan tidak merasa ditekan untuk
              mengambil keputusan.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
