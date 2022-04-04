import ContadorFruta from "./ContadorFruta";
import ListaFruta from "./ListaFruta";
import "./Fruta.css";

const Fruta = (props) => {
  return (
    <div className="fruta">
      <ContadorFruta
        nombreFruta={props.nombreFruta}
        contadorFruta={props.contadorFruta}
      />
      <ListaFruta
        contadorFruta={props.contadorFruta}
        nombreFruta={props.nombreFruta}
      />
    </div>
  );
};

export default Fruta;
