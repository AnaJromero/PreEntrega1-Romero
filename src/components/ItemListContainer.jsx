import { useEffect, useState } from "react";
import data from "../data/productos.json";
import ItemList from "c:/Users/ana_j/Desktop/YellowTruck/src/components/ItemList.jsx";

const ItemListContainer = () => {
  const {category} = useParams()

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

  const filteredProducts = productos.filter((producto) => producto.category === category)

  return (
    <div>
      <ItemList productos={filteredProducts}/>
    </div>
  )
}

export default ItemListContainer