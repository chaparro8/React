import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaTrashAlt, FaUserMinus } from "react-icons/fa";

const LibroCard = ({ libro }) => {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>
            <Link to={`/libro/${libro.id}`}>{libro.nombre}</Link>
          </b>
        </h4>
        <p>
          {libro.descripcion} - Estado:{" "}
          {libro.persona_id > 0 ? "prestado" : "disponible"}
        </p>
        <button>
          <FaUserPlus />{" "}
        </button>
        <button>
          <FaUserMinus />{" "}
        </button>
        <button>
          <FaTrashAlt color="red" />
        </button>
      </div>
    </div>
  );
};

export default LibroCard;
