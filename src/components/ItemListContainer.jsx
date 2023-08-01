import { useEffect, useState } from "react";
import data from "../data/productos.json";
import ItemList from "c:/Users/ana_j/Desktop/YellowTruck/src/components/ItemList.jsx";

const ItemListContainer = ({}) => {

  const [productos,setProductos] = useState([]);

  const llamarProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }

    useEffect(() => {
      llamarProductos()
        .then((res) => {
          setProductos(res);
        })
    },[])

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
};

export default ItemListContainer