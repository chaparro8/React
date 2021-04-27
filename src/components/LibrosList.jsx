import React, { useState } from "react";
import axios from "axios";

import LibroCard from "./molecules/LibroCard";

const LibrosList = () => {
  const [status, setStatus] = useState("Cargando...");
  const [libros, setLibros] = useState([]);
  const [librosFilter, setLibrosFilter] = useState([]);
  const [inputFilter, setInputFilter] = useState("");

  React.useEffect(() => {
    const getLibros = async () => {
      try {
        const res = await axios.get("http://localhost:706/libros");
        if (res.status === 200) {
          setLibros(res.data.books);
          setLibrosFilter(res.data.books);
          setStatus();
        } else {
          // TODO ver node que errores da.
          setStatus(`UPS!!! algo anda mal -> Code: ${res.status}`);
        }
      } catch (error) {
        setStatus(`UPS!!! algo anda mal -> ${error}`);
      }
    };

    getLibros();
  }, []);

  React.useEffect(() => {
    const searched = libros.filter((libro) =>
      libro.nombre.toLowerCase().includes(inputFilter.toLowerCase())
    );
    setLibrosFilter(searched);
  }, [inputFilter]);

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
        />
        {status}
      </div>

      <div className="wrapper">
        {librosFilter.map((libro, key) => (
          <LibroCard  key={key} libro={libro} />
        ))}
      </div>
    </div>
  );
};

export default LibrosList;
