import Item from "./Item"

const ItemList = ( {productos} ) => {
    return (
        <>
            {
                productos.length > 0 && 
                productos.map((producto) => {
                    return (
                        <Item 
                            producto={producto}
                            key={producto.id}
                            img={producto.imagen}
                        />
                    )
                }) 
            } 
        </>
    )
}

export default ItemList;