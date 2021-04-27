import React from "react";
import { Link, useParams } from "react-router-dom";

const PersonaItem = () => {
  let { id } = useParams();
  return (
    <div>
      Persona x {id}
      <hr />
      TODO
      <Link to="/categoria">Back</Link>
    </div>
  );
};

export default PersonaItem;
