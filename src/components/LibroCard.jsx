import React from "react";
import { Link } from "react-router-dom";

const LibroCard = ({ libro }) => {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>
            <Link to={`/${libro.id}`}>{libro.nombre}</Link>
          </b>
        </h4>
        <p>
          {libro.descripcion} - Estado:{" "}
          {libro.persona_id > 0 ? "prestado" : "disponible"}
        </p>
      </div>
    </div>
  );
};

export default LibroCard;
