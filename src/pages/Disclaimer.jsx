import React from "react";
import "./Disclaimer.css";

const Disclaimer = () => {
  return (
    <div className="disclaimer-container">
      <div className="disclaimer-header">
        <span className="warning-icon">⚠️</span>
        <h1 className="disclaimer-title">Pernyataan Disclaimer</h1>
      </div>

      <div className="disclaimer-box">

        <p className="strong-highlight">
          Aplikasi ini dibuat **hanya untuk keperluan edukasi**, bukan untuk
          memberikan nasihat, rekomendasi, atau arahan investasi.
        </p>

        <p>
          Seluruh konten, penjelasan, dan hasil perhitungan pada aplikasi ini
          bertujuan untuk membantu pengguna memahami konsep dasar mengenai
          risiko investasi dan preferensi pribadi.
        </p>

        <p className="soft-highlight">
          Informasi yang ditampilkan bersifat umum dan tidak dimaksudkan
          sebagai dasar pengambilan keputusan finansial.
        </p>

        <p>
          Pengguna bertanggung jawab sepenuhnya atas keputusan pribadi yang
          dibuat di luar aplikasi ini. Aplikasi tidak mengumpulkan atau
          mengolah data untuk tujuan rekomendasi investasi.
        </p>

        <p className="border-highlight">
          Dengan menggunakan aplikasi ini, Anda memahami bahwa seluruh isi
          bersifat **informasi edukatif**, bukan instruksi untuk membeli,
          menjual, atau memilih produk keuangan tertentu.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
