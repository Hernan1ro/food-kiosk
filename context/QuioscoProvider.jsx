import { useState, useEffect, createContext } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});

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
  // Select a default category
  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
  };

  return (
    <QuioscoContext.Provider
      value={{ categorias, handleClickCategoria, categoriaActual }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
