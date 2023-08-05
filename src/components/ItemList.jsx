import Item from "./Item"

const ItemList = ({articulos}) => {
    return (
        <>
            {articulos.map((a) => {
                return (
                    <Item 
                        key={a.id} 
                        id={a.id}
                        titulo ={a.titulo}
                        detalle={a.detalle}
                        precio={a.precio}
                    />
                )
            }) 
            }
        </>
    )
}

export default ItemList