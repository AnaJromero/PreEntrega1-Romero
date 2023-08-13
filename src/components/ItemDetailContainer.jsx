import ItemDeatil from "./ItemDetail"
import data from "../data/productos.json";
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);  

    const llamarData = () => {
        return new Promise((resolve) => {
                resolve(data)
            }, 2000)
        }

        useEffect (() => {
            llamarData()
            .then((res) => {
                setItem(res);
        }, [])
    
        })
  
    return (
        <>
            {item && <ItemDeatil item={item}/>}
        </>
    )
}

export default ItemDetailContainer;