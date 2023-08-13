import data from "../data/productos.json";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const categoria= useParams().categoria;

  const llamarData = () => {
    return new Promise ((resolve) =>{
      setTimeout( () => {
        resolve(data);
      },2000)
    })
  }

  useEffect(() => {
    llamarData()
      .then((res) => {
        if(categoria){
          setProductos( res.filter((producto)=> producto.categoria ===categoria));
        }else
        setProductos(res);
      })
  },[categoria])

  return (
    <>  
      <ItemList 
        productos={productos} 
      /> 
    </>
  )
}

export default ItemListContainer;