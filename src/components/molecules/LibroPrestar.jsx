import React from "react";
import axios from "axios";

const LibroPrestar = ({ personas, libro_id, getLibros, setShowSelect }) => {
  const prestar = async (persona_id) => {
    try {
      const res = await axios.put(
        `http://localhost:706/libros/prestar/${libro_id}`,
        {
          persona_id: persona_id,
        }
      );
      if (res.status === 201) {
        getLibros();
        setShowSelect(false);
        console.log("PRESTADO");
      } else {
        console.log("UPS Algo paso.");
      }
    } catch (error) {
      console.log("UPS Algo paso.");
      console.log(error);
    }
  };

  return (
    <>
      <select
        onChange={(e) => {
          prestar(e.target.value);
        }}
        name="personas"
      >
        <option value="null"></option>
        {personas.map((persona, key) => (
          <option key={key} value={persona.id}>
            {persona.nombre}, {persona.apellido}
          </option>
        ))}
      </select>
    </>
  );
};

export default LibroPrestar;
