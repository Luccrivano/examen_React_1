import { useState } from "react";

const Buscador = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const Searchbtn = () => {
    if (search !== "") {
      onSearch(search);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Ingresa tu ciudad"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={Searchbtn}>
        <img className="lupa" src="/src/assets/img/lupa2.gif" alt="" />
      </button>
    </>
  );
};

export default Buscador;
