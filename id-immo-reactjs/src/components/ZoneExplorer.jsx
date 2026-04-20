import React from 'react'

import "../assets/css/zone.css";

const ZoneExplorer = () => {
  return (
    <div className="zone-container">

      {/* SEARCH */}
      <div className="zone-search">
        <h1>Explorer le marché immobilier</h1>

        <div className="search-box">
          <input placeholder="Entrer une zone (ex: Lomé, Adidogomé...)" />
          <button>Analyser</button>
        </div>
      </div>

      {/* RESULT */}
      <div className="zone-result">

        <h2>Lomé Centre</h2>

        <div className="zone-kpis">
          <div className="kpi">
            <span>Indice immobilier</span>
            <h2>82.5</h2>
          </div>

          <div className="kpi">
            <span>Prix moyen / m²</span>
            <h2>500 000 FCFA</h2>
          </div>

          <div className="kpi">
            <span>Tendance</span>
            <h2 className="up">+6%</h2>
          </div>
        </div>

        {/* VISUAL */}
        <div className="zone-grid">

          <div className="zone-card">
            <h3>Évolution des prix</h3>
            <div className="fake-chart"></div>
          </div>

          <div className="zone-card">
            <h3>Répartition des biens</h3>
            <div className="fake-chart pie"></div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ZoneExplorer;