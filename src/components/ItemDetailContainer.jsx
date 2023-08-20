import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]); 
    const id = useParams().id


    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "Productos", id)
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const docData = snapshot.data();
                setItem(docData);
            }
        })
    },[id])

    return (
        <div>
            {/* {Array.isArray(item) && item.length > 0 &<ItemDetail item={item} />} */}
            {item && <ItemDetail item={item}/>}
        </div>
        
    );
}

export default ItemDetailContainer;

{/* <div>
            <h1> Productos</h1>
            {item &&(
                <div>
                <h3> Producto: {item.titulo} </h3>
                <h4>Categoria: {item.categoria} </h4>
                <p>Precio: {item.precio} </p>
                <img src={item.imagen} alt={item.titulo}/>
            </div>
            )}
        </div> */}
    
    

    /* const llamarData = () => {
        return new Promise((resolve) => {
                resolve(data)
            }, 2000)
        }

        useEffect (() => {
            llamarData()
            .then((res) => {
                setItem(res);
        }, [])
    
        }) */
  

