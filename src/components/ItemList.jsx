import Item from "./Item"

const ItemList = ( {productos} ) => {
    return (
        <div>
            {productos.map((producto) => (
                <Item 
                    key={producto.id}
                    id={producto.id}
                    producto={producto}
                    img={producto.imagen}
                />
            ))}
        </div>
    )} 
 
export default ItemList;