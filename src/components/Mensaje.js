import './Mensaje.css';

const Mensaje = (props) => {
    let mensaje = "";
    if (props.contadorFruta1 === 0 && props.contadorFruta2 === 0)
    {
        mensaje = '';
    }
    else if (props.contadorFruta1 === props.contadorFruta2)
    {
        mensaje = `Hay tantas ${props.nombreFruta1} como ${props.nombreFruta2}.`;
    }
    else if (props.contadorFruta1 > props.contadorFruta2)
    {
        mensaje = `Hay más ${props.nombreFruta1} que ${props.nombreFruta2}`;
    }
    else
    {
        mensaje = `Hay menos ${props.nombreFruta1} que ${props.nombreFruta2}`;
    }

    return <div className='contenedorMensaje'><span className="mensaje">{mensaje}</span></div>
}

export default Mensaje;