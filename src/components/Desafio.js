import "./Desafio.css";
import { useState } from "react";

const Desafio = (props) => {
  const [estadoMas, setEstadoMas] = useState("");
  const [estadoMenos, setEstadoMenos] = useState("");
  const [estadoTantos, setEstadoTantos] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [estadoRespuesta, setEstadoRespuesta] = useState("");

  const establecerCorrecto = () => {
    if (props.totalManzanas > props.totalNaranjas) {
      setEstadoMas("correcto");
    } else if (props.totalManzanas < props.totalNaranjas) {
      setEstadoMenos("correcto");
    } else {
      setEstadoTantos("correcto");
    }
  };

  const masHandler = (e) => {
    if (respuesta === "") {
      if (props.totalManzanas > props.totalNaranjas) {
        setEstadoMas("correcto");
        setRespuesta("¡Muy Bien! ¡Respuesta Correcta!");
        setEstadoRespuesta("respuestaCorrecta");
      } else {
        setEstadoMas("incorrecto");
        setRespuesta("Intentalo de Nuevo!");
        setEstadoRespuesta("respuestaIncorrecta");
      }
      establecerCorrecto();
    }
  };

  const menosHandler = () => {
    if (respuesta === "") {
      if (props.totalManzanas < props.totalNaranjas) {
        setEstadoMenos("correcto");
        setRespuesta("¡Muy Bien! ¡Respuesta Correcta!");
        setEstadoRespuesta("respuestaCorrecta");
      } else {
        setEstadoMenos("incorrecto");
        setRespuesta("Intentalo de Nuevo!");
        setEstadoRespuesta("respuestaIncorrecta");
      }
      establecerCorrecto();
    }
  };

  const tantosHandler = () => {
    if (respuesta === "") {
      if (props.totalManzanas === props.totalNaranjas) {
        setEstadoTantos("correcto");
        setRespuesta("¡Muy Bien! ¡Respuesta Correcta!");
        setEstadoRespuesta("respuestaCorrecta");
      } else {
        setEstadoTantos("incorrecto");
        setRespuesta("¡Intentalo de Nuevo!");
        setEstadoRespuesta("respuestaIncorrecta");
      }
      establecerCorrecto();
    }
  };

  return (
    <div>
      <div className="contenedorBoton">
        <div className={`boton ${estadoMas}`} onClick={masHandler}>
          <div>
            Existen <strong>más</strong> manzanas que naranjas
          </div>
        </div>
        <div className={`boton ${estadoTantos}`} onClick={tantosHandler}>
          <div>
            Existen <strong>tantas</strong> manzanas como naranjas
          </div>
        </div>
        <div className={`boton ${estadoMenos}`} onClick={menosHandler}>
          <div>
            Existen <strong>menos</strong> manzanas que naranjas
          </div>
        </div>
      </div>
      <div className={`respuesta ${estadoRespuesta}`}>{respuesta}</div>
      {respuesta !== "" && (
        <div>
          <a href="/" className="vinculo">
            Intentalo de Nuevo
          </a>
        </div>
      )}
    </div>
  );
};

export default Desafio;
