import './ImagenFruta.css';

const ImagenFruta = (props) => {
    return <img className='imagen' src={`${props.nombreFruta}.jpg`} alt={props.nombreFruta} />
}

export default ImagenFruta;