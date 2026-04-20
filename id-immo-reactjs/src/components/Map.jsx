import React from 'react'

import "../assets/css/map.css";

import "./map.css";

const zones = [
  { name: "Centre", value: 90 },
  { name: "Adidogomé", value: 60 },
  { name: "Baguida", value: 75 },
  { name: "Agoè", value: 50 },
  { name: "Tokoin", value: 85 },
];

const getColor = (value) => {
  if (value > 80) return "high";
  if (value > 60) return "medium";
  return "low";
};

const Map = () => {
  return (
    <div className="map-container">

      <h1>Heatmap des prix immobiliers</h1>

      {/* FUTURE MAP CONTAINER */}
      <div className="map-grid">
        {zones.map((zone, i) => (
          <div key={i} className={`cell ${getColor(zone.value)}`}>
            <h4>{zone.name}</h4>
            <p>{zone.value}</p>
          </div>
        ))}
      </div>

      {/* LEGEND */}
      <div className="legend">
        <div><span className="box low"></span> Bas</div>
        <div><span className="box medium"></span> Moyen</div>
        <div><span className="box high"></span> Élevé</div>
      </div>

    </div>
  );
};

export default Map;