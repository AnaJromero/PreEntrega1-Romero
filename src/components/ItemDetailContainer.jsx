import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null); 
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
            {item && <ItemDetail item={item} key={item.id}/>}
        </div>
        
    );
}

export default ItemDetailContainer;
