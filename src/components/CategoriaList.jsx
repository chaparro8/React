import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CategoriaCard from "./molecules/CategoriaCard";

const CategoriaList = () => {
  const [status, setStatus] = useState("Cargando..");
  const [categorias, setCategorias] = useState([]);
  const [categoriasFilter, setCategoriasFilter] = useState([]);
  const [inputFilter, setInputFilter] = useState("");

  React.useEffect(() => {
    const getCategorias = async () => {
      try {
        const res = await axios.get("http://localhost:706/categoria");
        if (res.status === 200) {
          setCategorias(res.data.respuesta);
          setCategoriasFilter(res.data.respuesta);
          setStatus();
        } else {
          setStatus(`UPS!!! algo anda mal -> Code: ${res.status}`);
        }
      } catch (error) {
        setStatus(`UPS!!! algo anda mal -> ${error}`);
      }
    };

    getCategorias();
  }, []);

  React.useEffect(() => {
    const searched = categorias.filter((categoria) =>
      categoria.nombre.toLowerCase().includes(inputFilter.toLowerCase())
    );
    console.log(searched);
    setCategoriasFilter(searched);
  }, [inputFilter]);

  const onChangeSearch = (e) => {
    setInputFilter(e.target.value);
  };
  return (
    <div>
      <div className="libropage">
        <h2>Categorias</h2>{" "}
        <input
          type="search"
          placeholder="Buscamos algo?"
          onChange={(e) => onChangeSearch(e)}
        />
        {status}
      </div>

      <div className="wrapper">
        {categoriasFilter.map((categoria, key) => (
          <CategoriaCard key={key} categoria={categoria} />
        ))}
      </div>
      <hr />
      <Link to="/">Libros</Link>
    </div>
  );
};

export default CategoriaList;
