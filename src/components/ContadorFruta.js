import './ContadorFruta.css';

const ContadorFruta = (props) => {
    return <div className="contenedorContador">
        <span>{props.nombreFruta}: </span> <span>{props.contadorFruta}</span>
    </div>
}

export default ContadorFruta;