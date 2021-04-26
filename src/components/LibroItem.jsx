import React from "react";
import { Link, useParams } from "react-router-dom";

const LibroItem = () => {
  let { id } = useParams();

  return (
    <div>
      Libro x {id}
      <hr />
      <Link to="/">Back</Link>
    </div>
  );
};

export default LibroItem;
