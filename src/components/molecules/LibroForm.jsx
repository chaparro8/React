import React from "react";

const LibroForm = () => {
  return (
    <>
      <form className="bookform">
        <section>
          <div>
            <div className="controlgroup">
              <label for="nombre">Nombre</label>
              <input type="text" name="nombre"></input>
              <span>
                <small className="error">mensaje de error</small>
              </span>
            </div>
            <div className="controlgroup">
              <label for="descripcion">Descripcion</label>
              <textarea id="msg" name="descripcion"></textarea>
              <span>
                <small className="error">mensaje de error</small>
              </span>
            </div>
            <div className="controlgroup">
              <label for="categoria">Categoria</label>
              <select name="categoria">
                <option value=""></option>
                <option value="visa">Visa</option>
                <option value="mc">Mastercard</option>
                <option value="amex">American Express</option>
              </select>
              <span className="error">
                <small>mensaje de error</small>
              </span>
            </div>
            <div className="controlgroup">
              <label for="prestado">Prestado a</label>
              <select name="prestado">
                <option value=""></option>
                <option value="visa">Visa</option>
                <option value="mc">Mastercard</option>
                <option value="amex">American Express</option>
              </select>
              <span className="error">
                <small>mensaje de error</small>
              </span>
            </div>
          </div>
        </section>
        <p>
          {" "}
          <button type="submit">Validar el pago</button>{" "}
        </p>
      </form>
    </>
  );
};

export default LibroForm;
