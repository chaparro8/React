import React from "react";
import { Link } from "react-router-dom";

const CategoriaCard = ({ categoria }) => {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>
            <Link to={`/categoria/${categoria.id}`}>{categoria.nombre}</Link>
          </b>
        </h4>
      </div>
    </div>
  );
};

export default CategoriaCard;
