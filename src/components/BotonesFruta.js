import './BotonesFruta.css';

const BotonesFruta = (props) => {
    const aumentarFrutaHandler = () => {
        props.incrementar();
    };

    const quitarFrutaHandler = () => {
        props.quitar();
    };

    return <div className="contenedorButton">
        <button className='button' onClick={quitarFrutaHandler}>MENOS</button> <button className='button' onClick={aumentarFrutaHandler}>MAS</button> 
    </div>
}

export default BotonesFruta;