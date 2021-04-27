import React from "react";
import { Link, useParams } from "react-router-dom";
import LibroForm from "./LibroForm";

const LibroItem = () => {
  let { id } = useParams();

  return (
    <div>
      Libro x {id}
      <LibroForm></LibroForm>
      <hr />
      <Link to="/">Back</Link>
    </div>
  );
};

export default LibroItem;
