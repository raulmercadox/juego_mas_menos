import ImagenFruta from "./ImagenFruta";

const ListaFruta = (props) => {
    return <div>
        {[...Array(props.contadorFruta)].map((e, i) => <ImagenFruta nombreFruta={props.nombreFruta} key={0} />)}
    </div>
}

export default ListaFruta;