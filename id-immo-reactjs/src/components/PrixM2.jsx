import React from 'react'

import "../assets/css/prix.css";

const data = [
  { zone: "Lomé Centre", prix: 500000, min: 300000, max: 800000, trend: "+8%" },
  { zone: "Adidogomé", prix: 350000, min: 200000, max: 600000, trend: "+3%" },
  { zone: "Baguida", prix: 420000, min: 250000, max: 700000, trend: "-2%" },
];

const PrixM2 = () => {
  return (
    <div className="prix-container">

      <div className="prix-header">
        <h1>Analyse du prix au m²</h1>

        {/* FUTUR API FILTER */}
        <div className="filters">
          <select>
            <option>Toutes les zones</option>
            <option>Lomé</option>
          </select>

          <select>
            <option>Tous les types</option>
            <option>Maison</option>
            <option>Terrain</option>
          </select>
        </div>
      </div>

      {/* KPI */}
      <div className="prix-kpis">
        <div className="kpi">
          <span>Prix moyen</span>
          <h2>410 000 FCFA</h2>
        </div>

        <div className="kpi">
          <span>Variation</span>
          <h2 className="up">+4.5%</h2>
        </div>

        <div className="kpi">
          <span>Zones analysées</span>
          <h2>18</h2>
        </div>
      </div>

      {/* TABLE */}
      <div className="prix-table">
        <table>
          <thead>
            <tr>
              <th>Zone</th>
              <th>Prix moyen</th>
              <th>Min</th>
              <th>Max</th>
              <th>Tendance</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.zone}</td>
                <td>{item.prix.toLocaleString()}</td>
                <td>{item.min.toLocaleString()}</td>
                <td>{item.max.toLocaleString()}</td>
                <td className={item.trend.includes("+") ? "up" : "down"}>
                  {item.trend}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CHART PLACEHOLDER PRO */}
      <div className="prix-chart">
        <h3>Distribution des prix</h3>
        <div className="chart-bars">
          {data.map((item, i) => (
            <div key={i} className="bar">
              <div
                className="bar-fill"
                style={{ height: `${item.prix / 10000}px` }}
              ></div>
              <span>{item.zone}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PrixM2;