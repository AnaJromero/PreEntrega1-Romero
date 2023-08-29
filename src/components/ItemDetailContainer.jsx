import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null); 
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore()
        const itemDocument = doc(db, 'Productos', id);

        getDoc(itemDocument).then((snapshot) => {
            if (snapshot.exists()) {
                const docData = snapshot.data();
                setItem(docData);
            }
        });
    },[id]);

    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div> 
    );
}

export default ItemDetailContainer;
