import React from "react";
import { Link, useParams } from "react-router-dom";

const CategoriaItem = () => {
  let { id } = useParams();
  return (
    <div>
      Categoria x {id}
      <hr />
      TODO
      <Link to="/categoria">Back</Link>
    </div>
  );
};

export default CategoriaItem;
