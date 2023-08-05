import ItemList from "c:/Users/ana_j/Desktop/YellowTruck/src/components/ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoria } =useParams()
  const articulos= [
    { id:1, categoria: "entrada", nombre: "Papas Yellow", detalle:"Ración de papas fritas grande con toppings de cheddar fundido y crujiente bacon", precio: 7990},
    { id:2, categoria: "entrada", nombre: "Aros de Cebolla", detalle:" Aros de cebolla bañados en salsa de queso cheddar", precio: 5990 },
    { id:3, categoria: "entrada", nombre: "Tequeños", detalle: "Unidades de tequeños acompañados de su respectiva salsa tártara", precio: 6990},
    { id:4, categoria: "hamburguesas", nombre: "All In Burguer", detalle: "180gr de carne de vacuno y chuleta ahumada en pan brioche color negro , lechuga cebolla caramelizada y salsa especial de la casa",precio: 13990},
    { id:5, categoria: "hamburguesas", nombre: "Black Burguer", detalle: "Hamburguesa tradicional de 180gr de carne de vacuno en pan brioche color negro , lechuga, tomate, cebolla y salsa especial de la casa", precio: 6990},
    { id:6, categoria: "hamburguesas", nombre: "Yellow Grill", detalle: "Deliciosa Salchicha al gril con papas hilos, aros de cebolla, queso y salsa especial de la casa", precio: 3500},
    { id:7, categoria: "hamburguesas", nombre: "Yellow Burguer", detalle: "180gr de carne de vacuno con tocino en pan brioche color negro ,cebolla caramelizada y salsa especial de la casa", precio: 8990 },
    { id:8, categoria: "hamburguesas", nombre: "Bacon Burguer", detalle: "180gr de carne de vacuno con aros de cebolla frito y extra extra tocino en pan brioche color negro salsa especial de la casa y salsa especial bbq", precio: 8990 },
    { id:9, categoria: "hamburguesas", nombre: "Yellow Burguer Doble", detalle: "360gr de carne de vacuno con tocino en pan brioche color negro ,cebolla caramelizada y salsa especial de la casa", precio: 11990 }
  ]

  const llamarArticulos = new Promise((resolve, reject) => {
      if(articulos.length > 0) {
        setTimeout(() =>{
          resolve(articulos)
        }, 2000)
      }else {
        reject(new Error("Articulo no encontrado"))
      }
    })

      llamarArticulos
        .then((res) => {
        })
        .catch((error)=>{
          console.log(error)
        })

  const filtrarArt = articulos.filter((articulo) => articulo.categoria === categoria)
  return (
    <div>
      <ItemList 
      articulos={filtrarArt}/>
    </div>
  )
}

export default ItemListContainer