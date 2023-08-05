import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <>
            {productos.map((p) => {
                return (
                    <Item 
                        key={p.id} 
                        id={p.id}
                        titulo ={p.nombre}
                        detalle={p.description}
                        precio={p.precio}
                    />
                )
            }) 
            }
    </>
    )
}

export default ItemList