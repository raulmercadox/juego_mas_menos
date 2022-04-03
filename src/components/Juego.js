import { useState } from "react";
import Fruta from "./Fruta";
import './Juego.css';
import Mensaje from "./Mensaje";

const Juego = () => {
    const [totalManzanas, setTotalManzanas] = useState(1);
    const [totalNaranjas, setTotalNaranjas] = useState(1);

    const incrementarManzanas = () => {
        setTotalManzanas(totalManzanas + 1);
    }

    const quitarManzanas = () => {
        if (totalManzanas > 1 )
        {
            setTotalManzanas(totalManzanas - 1);
        }
    }

    const incrementarNaranjas = () => {
        setTotalNaranjas(totalNaranjas + 1);
    }

    const quitarNaranjas = () => {
        if (totalNaranjas > 1)
        {
            setTotalNaranjas(totalNaranjas - 1);
        }
    }

    return <div className="contenedor">
        <div className="frutas">
            <Fruta contadorFruta={totalManzanas} nombreFruta="manzanas" incrementar={incrementarManzanas} quitar={quitarManzanas} />
            <Fruta contadorFruta={totalNaranjas} nombreFruta="naranjas" incrementar={incrementarNaranjas} quitar={quitarNaranjas} />
        </div>
        <div>
            <Mensaje contadorFruta1={totalManzanas} nombreFruta1={"manzanas"} contadorFruta2={totalNaranjas} nombreFruta2={"naranjas"} />
        </div>
    </div>
}

export default Juego;