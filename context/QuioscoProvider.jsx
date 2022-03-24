import { useState, useEffect, createContext } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const obtenerCategorias = async () => {
    try {
      const url = "/api/categorias";
      const { data } = await axios(url);
      setCategorias(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    obtenerCategorias();
  }, []);
  return (
    <QuioscoContext.Provider value={{ categorias }}>
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
