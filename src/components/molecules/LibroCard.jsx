import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaTrashAlt, FaUserMinus } from "react-icons/fa";
import axios from "axios";
import LibroPrestar from "./LibroPrestar";

const LibroCard = ({ libro, setStatus, getLibros, personas }) => {
  const [showSelect, setShowSelect] = useState(false);
  const [errorDelete, setErrorDelete] = useState(null);

  const handlerDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:706/libros/${id}`);
      if (res.status === 200) {
        await getLibros();
        setStatus("Libro Borrado");
        setErrorDelete(null);
        setTimeout(() => {
          setStatus(null);
        }, 3000);
      } else {
        setStatus(`Ups code -> ${res.status}`);
      }
    } catch (error) {
      setErrorDelete(error.message);
    }
  };

  const handlerDevolver = async (libro_id) => {
    try {
      const res = await axios.put(
        `http://localhost:706/libros/prestar/${libro_id}`
      );
      if (res.status === 201) {
        getLibros();
      } else {
        setStatus(`Ups code -> ${res.status}`);
      }
    } catch (error) {
      setStatus(`Ups code -> ${error.message}`);
    }
    return null;
  };

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
        {libro.persona_id > 0 ? (
          <button
            title="Devolver Libro"
            className="button"
            onClick={() => handlerDevolver(libro.id)}
          >
            <FaUserMinus color="red" />{" "}
          </button>
        ) : (
          <button
            title="Prestar Libro"
            className="button"
            onClick={() => setShowSelect(true)}
          >
            <FaUserPlus color="green" />{" "}
          </button>
        )}
        <button
          title="Borrar Libro"
          className="button"
          onClick={() => handlerDelete(libro.id)}
        >
          <FaTrashAlt color="red" />
        </button>{" "}
        {errorDelete}
        {showSelect ? (
          <LibroPrestar
            setStatus={setStatus}
            personas={personas}
            libro_id={libro.id}
            getLibros={getLibros}
            setShowSelect={setShowSelect}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LibroCard;
