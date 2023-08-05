import ItemList from "c:/Users/ana_j/Desktop/YellowTruck/src/components/ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } =useParams()
  const productos= [
    { id:1, category: "cat1", nombre: "Papas Yellow", descrption:"Ración de papas fritas grande con toppings de cheddar fundido y crujiente bacon", precio: 7.990},
    { id:2, category: "cat1", nombre: "Aros de Cebolla", descrption:" Aros de cebolla bañados en salsa de queso cheddar", precio: 5.990 },
    { id:3, category: "cat1", nombre: "Tequeños", descrption: "Unidades de tequeños acompañados de su respectiva salsa tártara", precio: 6.990},
    { id:4, category: "cat2", nombre: "All In Burguer", descrption: "180gr de carne de vacuno y chuleta ahumada en pan brioche color negro , lechuga cebolla caramelizada y salsa especial de la casa",precio: 13.990},
    { id:5, category: "cat2", nombre: "Black Burguer", descrption: "Hamburguesa tradicional de 180gr de carne de vacuno en pan brioche color negro , lechuga, tomate, cebolla y salsa especial de la casa", precio: 6.990},
    { id:6, category: "cat2", nombre: "Yellow Grill", descrption: "Deliciosa Salchicha al gril con papas hilos, aros de cebolla, queso y salsa especial de la casa", precio: 3.500},
    { id:7, category: "cat2", nombre: "Yellow Burguer", descrption: "180gr de carne de vacuno con tocino en pan brioche color negro ,cebolla caramelizada y salsa especial de la casa", precio: 8.990 },
    { id:8, category: "cat2", nombre: "Bacon Burguer", descrption: "180gr de carne de vacuno con aros de cebolla frito y extra extra tocino en pan brioche color negro salsa especial de la casa y salsa especial bbq", precio: 8.990 },
    { id:9, category: "cat2", nombre: "Yellow Burguer Doble", descrption: "360gr de carne de vacuno con tocino en pan brioche color negro ,cebolla caramelizada y salsa especial de la casa", precio: 11.990 }
  ]

  const getProductos = new Promise((resolve, reject) => {
      if(productos.length > 0) {
        setTimeout(() =>{
          resolve(productos)
        }, 2000)
      }else {
        reject(new Error("Articulo no encontrado"))
      }
    })

      getProductos
        .then((res) => {
        })
        .catch((error)=>{
          console.log(error)
        })

  const filteredProducts = productos.filter((producto) => producto.category === category)
  return (
    <div>
      <ItemList 
      productos={filteredProducts}/>
    </div>
  )
}

export default ItemListContainer