import { useState, useEffect } from "react";
import "../App.css";
import Buscador from "./Buscador";

function MiApi() {
  const [clima, setClima] = useState({});
  const [iconoclima, setIconoclima] = useState("");
  const [ciudad, setCiudad] = useState("Santiago");

  useEffect(() => {
    const consultaurl = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=329b9c4c11505975feb654c904113ac1&&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setClima(data);
    };

    consultaurl();
  }, [ciudad]);

  useEffect(() => {
    const imagespatron = () => {
      if (clima.weather && clima.weather[0].main === "Clear") {
        setIconoclima("/src/assets/img/clear.png");
      } else if (clima.weather && clima.weather[0].main === "Clouds") {
        setIconoclima("/src/assets/img/Clouds.png");
      } else if (clima.weather && clima.weather[0].main === "Few Clouds") {
        setIconoclima("/src/assets/img/few clouds.png");
      } else if (clima.weather && clima.weather[0].main === "Rain") {
        setIconoclima("/src/assets/img/shower rain.png");
      } else if (clima.weather && clima.weather[0].main === "Snow") {
        setIconoclima("/src/assets/img/snow.png");
      }
    };

    imagespatron();
  }, [clima]);

  const Search = (city) => {
    setCiudad(city);
  };

  return (
    <div className="container">
      <h1 className="titlepage">APP CLIMA</h1>
      <div className="clima">
        <div className="buscador">
          <Buscador onSearch={Search} />
        </div>
        <div className="infoclima">
          <img className="icono" src={iconoclima} alt="Sol" />
          <h1>{clima.name}</h1>
          <h2>{clima.main && clima.main.temp}</h2>
        </div>
        <div className="detalle">
          <div className="col">
            <img src="/src/assets/img/humedad.png" alt="" />
            <div>
              <p>{clima.main && clima.main.humidity}%</p>
              <p>Humedad</p>
            </div>
          </div>
          <div className="col">
            <img src="/src/assets/img/viento.png" alt="" />
            <div>
              <p> {clima.wind && clima.wind.speed}Km</p>
              <p>Viento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiApi;
