import React from "react";
import { Link, useParams } from "react-router-dom";

const PersonaCard = ({ persona }) => {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>
            <Link to={`/persona/${persona.id}`}>
              {persona.apellido}, {persona.nombre}{" "}
            </Link>
          </b>
        </h4>
        <p>
          alias: {persona.alias} <br />
          email: {persona.email}
        </p>
      </div>
    </div>
  );
};

export default PersonaCard;
