import React, { useState } from "react";
import "./Analysis.css";

export default function Analysis() {
  const [crypto, setCrypto] = useState("");
  const [stock, setStock] = useState("");
  const [cash, setCash] = useState("");
  const [bonds, setBonds] = useState("");
  const [gold, setGold] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateRisk = () => {
    const c = Number(crypto);
    const s = Number(stock);
    const ca = Number(cash);
    const b = Number(bonds);
    const g = Number(gold);

    const total = c + s + ca + b + g;

    if (total !== 100) {
      setError("⚠️ Total persentase harus tepat 100%");
      setResult(null);
      return;
    }

    setError("");

    const riskScore =
      c * 1.0 + // Crypto High
      s * 0.7 + // Stock Big Market Caps
      ca * 0.4 + // Cash
      b * 0.3 + // Bonds
      g * 0.5; // Gold

    let level = "";
    let color = "";

    if (riskScore <= 30) {
      level = "Very Low Risk";
      color = "#22c55e";
    } else if (riskScore <= 50) {
      level = "Low Risk";
      color = "#4ade80";
    } else if (riskScore <= 70) {
      level = "Moderate Risk";
      color = "#eab308";
    } else if (riskScore <= 85) {
      level = "High Risk";
      color = "#f97316";
    } else {
      level = "Very High Risk";
      color = "#ef4444";
    }

    setResult({ score: Math.round(riskScore), level, color });
  };

  return (
    <div className="analysis-wrapper">
      <header className="analysis-header">
        <h1>Portfolio Risk Analysis</h1>
        <p>Masukkan komposisi portofolio Anda (harus total 100%) lalu tekan Calculate</p>
      </header>

      <section className="analysis-form-section">
        <div className="form-card">
          <div className="input-row">
            <label>Crypto (BTC/ETH - High Volatility)</label>
            <input type="number" value={crypto} onChange={(e) => setCrypto(e.target.value)} placeholder="20" />
          </div>

          <div className="input-row">
            <label>Stocks (Big Market Caps)</label>
            <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="30" />
          </div>

          <div className="input-row">
            <label>Cash (Fiat Savings)</label>
            <input type="number" value={cash} onChange={(e) => setCash(e.target.value)} placeholder="20" />
          </div>

          <div className="input-row">
            <label>Bonds (Gov/Corp)</label>
            <input type="number" value={bonds} onChange={(e) => setBonds(e.target.value)} placeholder="10" />
          </div>

          <div className="input-row">
            <label>Gold (Medium-Low Risk)</label>
            <input type="number" value={gold} onChange={(e) => setGold(e.target.value)} placeholder="20" />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button className="calc-btn" onClick={calculateRisk}>Calculate</button>
        </div>
      </section>

      {result && (
        <section className="analysis-result-section">
          <div className="result-card" style={{ borderColor: result.color }}>
            <h2 style={{ color: result.color }}>{result.level}</h2>
            <p className="score">Risk Score: {result.score}/100</p>
          </div>
        </section>
      )}
    </div>
  );
}
