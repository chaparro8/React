import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSyncAlt } from "react-icons/fa";
import LibroCard from "./molecules/LibroCard";

const LibrosList = () => {
  const [status, setStatus] = useState("Cargando...");
  const [libros, setLibros] = useState([]);
  const [librosFilter, setLibrosFilter] = useState([]);
  const [inputFilter, setInputFilter] = useState("");
  const [personas, setPersonas] = useState([]);

  const getPersonas = async () => {
    try {
      const res = await axios.get("http://localhost:706/persona");
      if (res.status === 200) {
        setPersonas(res.data.respuesta);
        setStatus();
      } else {
        setStatus(`UPS!!! algo anda mal -> Code: ${res.status}`);
      }
    } catch (error) {
      setStatus(`UPS!!! algo anda mal -> ${error}`);
    }
  };

  const getLibros = async () => {
    try {
      const res = await axios.get("http://localhost:706/libros");
      if (res.status === 200) {
        setLibros(res.data.books);
        setStatus(null);
      } else {
        // TODO ver node que errores da.
        setStatus(`UPS!!! algo anda mal -> Code: ${res.status}`);
      }
    } catch (error) {
      setStatus(`UPS!!! algo anda mal -> ${error}`);
    }
  };

  React.useEffect(() => {
    getLibros();
    getPersonas();
  }, []);

  React.useEffect(() => {
    const searched = libros.filter((libro) =>
      libro.nombre.toLowerCase().includes(inputFilter.toLowerCase())
    );
    setLibrosFilter(searched);
  }, [inputFilter, libros]);

  const onChangeSearch = (e) => {
    setInputFilter(e.target.value);
  };

  return (
    <div>
      <div className="libropage">
        <h2>Libros</h2>{" "}
        <input
          type="search"
          placeholder="Buscamos algo?"
          onChange={(e) => onChangeSearch(e)}
        />{" "}
        <button
          title="Actualizar"
          className="button"
          onClick={() => getLibros()}
        >
          <FaSyncAlt />
        </button>
        {status}
      </div>

      <div className="wrapper">
        {librosFilter.map((libro, key) => (
          <LibroCard
            key={key}
            libro={libro}
            setStatus={setStatus}
            getLibros={getLibros}
            personas={personas}
          />
        ))}
      </div>
      <hr />
      <Link to="/categoria">Categorias</Link>
      <br />
      <Link to="/">Libros</Link>
      <br />
      <Link to="/persona">Personas</Link>
    </div>
  );
};

export default LibrosList;
