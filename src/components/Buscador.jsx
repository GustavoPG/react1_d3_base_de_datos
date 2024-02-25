import { useState } from "react";


const Buscador = ({ search }) => {
  const [textSearch, setTextSearch] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value.trim().toLowerCase();
    setTextSearch(inputValue);
    search(inputValue);
  };

  const [inputSearch, setInputSearch] = useState('');
  return (
    <input
      type="text"
      placeholder="Buscar un Colaborador"
      className="my-search mx-auto"
      value={textSearch}
      onChange={handleChange}
    />
  );
};

export default Buscador;
