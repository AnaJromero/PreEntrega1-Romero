const Item = ({producto}) => {
  return (
    <div>
      <img src={producto.imagen} alt={producto.titulo} />
      <h2>{producto.titulo}</h2>
      <p>${producto.precio}</p>
      <p>{producto.detalle}</p>   
  </div>
  )
}

export default Item