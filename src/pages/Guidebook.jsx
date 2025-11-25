import React from "react";
import "./Guidebook.css";

const Guidebook = () => {
  return (
    <div className="guidebook-container pt-28"> 
      <div className="guidebook-card">
        <h1>Guidebook</h1>
        <p className="intro">
          Aplikasi ini membantu Anda memahami profil risiko portofolio secara edukatif. Ikuti langkah-langkah berikut:
        </p>

        <div className="steps-container">
          <div className="step">
            <span className="step-number">1</span>
            <p>
              Masukkan persentase untuk <strong>Crypto (BTC)</strong>, 
              <strong> Stock (Big Market Caps)</strong>, Cash, Bonds, dan Emas. 
              Total harus 100%.
            </p>
          </div>

          <div className="step">
            <span className="step-number">2</span>
            <p>
              Pastikan jumlah total 100% sebelum menghitung.
            </p>
          </div>

          <div className="step">
            <span className="step-number">3</span>
            <p>
              Klik tombol <span className="button-highlight">Calculate</span> 
              untuk melihat hasil portofolio risk analysis.
            </p>
          </div>

          <div className="step">
            <span className="step-number">4</span>
            <p>
              Hasil yang ditampilkan hanya bersifat edukasi. Tidak ada financial advice.
            </p>
          </div>
        </div>

        <p className="note">
          ⚠️ Penting: Konten ini hanya bersifat edukasi. Jangan gunakan sebagai saran membeli atau menjual aset.
        </p>
      </div>
    </div>
  );
};

export default Guidebook;
