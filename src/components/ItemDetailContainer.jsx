import React from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [productos,setProductos] = useState([]);

    const llamarProductos = new Promise((resolve, reject) => {
        if(productos.length > 0){
            setTimeout(() =>{
                resolve(data)
            }, 2000)
        }else {
            reject(new Error("No hay datos"))
        }
    })
  
    useEffect(() => {
        llamarProductos()
            .then((res) => {
        })
            .catch((error)=>{
                setProductos(error)
        })
    })

    return (
        <div>
            <ItemDetail productos={productos}/>
        </div>
    )
}

export default ItemDetailContainer