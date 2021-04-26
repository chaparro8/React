import React, { createContext } from "react";

export const DataContext = React.createContext("");

export const DataProvider = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [dataUser, setDataUser] = React.useState([]);
  const [dataCategoria, setDataCategoria] = React.useState([]);

  const devolver = (libro) => {
    // TODO
    return true;
  };

  const prestar = (usuario, libro) => {
    // TODO
    return true;
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        dataUser,
        setDataUser,
        dataCategoria, 
        setDataCategoria,
        prestar,
        devolver
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// in APP
// import { DataProvider } from './context/DataContext';
//  <DataProvider>
// 		<Router>
// 			<Route exact path='/' component={ListTodo} />
// 			<Route path='/:id' component={Todo} />
// 		</Router>
//  </DataProvider>;

// In Component

// import React, { useContext } from 'react';
// import { DataContext } from '../context/DataContext';

// ...
// const { data, setData, isLogged, logIn } = useContext(DataContext);

// const handleLogged = () => {
//     alert(isLogged());
// };

// logIn(dataFixed);

// setData({ ...data, name: "Juan", is_logged: true });