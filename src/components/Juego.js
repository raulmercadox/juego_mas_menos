import { useState } from "react";
import Desafio from "./Desafio";
import Fruta from "./Fruta";
import "./Juego.css";

const Juego = () => {
  const [totalManzanas, setTotalManzanas] = useState(
    Math.floor(Math.random() * 15 + 1)
  );
  const [totalNaranjas, setTotalNaranjas] = useState(
    Math.floor(Math.random() * 15 + 1)
  );

  const incrementarManzanas = () => {
    setTotalManzanas(totalManzanas + 1);
  };

  const quitarManzanas = () => {
    if (totalManzanas > 1) {
      setTotalManzanas(totalManzanas - 1);
    }
  };

  const incrementarNaranjas = () => {
    setTotalNaranjas(totalNaranjas + 1);
  };

  const quitarNaranjas = () => {
    if (totalNaranjas > 1) {
      setTotalNaranjas(totalNaranjas - 1);
    }
  };

  return (
    <div className="contenedor">
      <div className="frutas">
        <Fruta
          contadorFruta={totalManzanas}
          nombreFruta="manzanas"
          incrementar={incrementarManzanas}
          quitar={quitarManzanas}
        />
        <Fruta
          contadorFruta={totalNaranjas}
          nombreFruta="naranjas"
          incrementar={incrementarNaranjas}
          quitar={quitarNaranjas}
        />
      </div>
      <div>
        <Desafio totalManzanas={totalManzanas} totalNaranjas={totalNaranjas} />
      </div>
    </div>
  );
};

export default Juego;
