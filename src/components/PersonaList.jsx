import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PersonaCard from "./molecules/PersonaCard";

const PersonaList = () => {
  const [status, setStatus] = useState("Cargando...");
  const [personas, setPersonas] = useState([]);
  const [personasFilter, setPersonasFilter] = useState([]);
  const [inputFilter, setInputFilter] = useState("");

  React.useEffect(() => {
    const getPersonas = async () => {
      try {
        const res = await axios.get("http://localhost:706/persona");
        if (res.status === 200) {
          setPersonas(res.data.respuesta);
          setPersonasFilter(res.data.respuesta);
          setStatus();
        } else {
          // TODO ver node que errores da.
          setStatus(`UPS!!! algo anda mal -> Code: ${res.status}`);
        }
      } catch (error) {
        setStatus(`UPS!!! algo anda mal -> ${error}`);
      }
    };

    getPersonas();
  }, []);

  React.useEffect(() => {
    const searched = personas.filter((persona) =>
      persona.nombre.toLowerCase().includes(inputFilter.toLowerCase())
    );
    setPersonasFilter(searched);
  }, [inputFilter]);

  const onChangeSearch = (e) => {
    setInputFilter(e.target.value);
  };
  return (
    <div>
      <div className="libropage">
        <h2>Personas</h2>{" "}
        <input
          type="search"
          placeholder="Buscamos algo?"
          onChange={(e) => onChangeSearch(e)}
        />
        {status}
      </div>

      <div className="wrapper">
        {personasFilter.map((persona, key) => (
          <PersonaCard key={key} persona={persona} />
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


export default PersonaList;
