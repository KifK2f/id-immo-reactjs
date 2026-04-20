import React from 'react'

import "../assets/css/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dash-container">

      <h1 className="dash-title">Tableau de bord immobilier</h1>

      {/* KPI */}
      <div className="dash-cards">
        <div className="card">
          <h3>Prix moyen / m²</h3>
          <p className="value">450 000 FCFA</p>
          <span className="trend up">+5.2%</span>
        </div>

        <div className="card">
          <h3>Biens analysés</h3>
          <p className="value">1 248</p>
          <span className="trend up">+120</span>
        </div>

        <div className="card">
          <h3>Zones couvertes</h3>
          <p className="value">18</p>
          <span className="trend neutral">Stable</span>
        </div>

        <div className="card">
          <h3>Indice immobilier</h3>
          <p className="value">78.5</p>
          <span className="trend down">-1.3%</span>
        </div>
      </div>

      {/* Graphiques fake */}
      <div className="dash-grid">
        <div className="chart">
          <h3>Évolution des prix</h3>
          <div className="fake-chart"></div>
        </div>

        <div className="chart">
          <h3>Répartition par type</h3>
          <div className="fake-chart pie"></div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
