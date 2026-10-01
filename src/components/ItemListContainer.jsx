import { useEffect, useState } from 'react'
import Item from './Item.jsx'

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  // Traigo los productos del JSON cuando se monta el componente
  useEffect(() => {
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false))
  }, [])

  if (cargando) {
    return <p className="text-muted">Cargando productos...</p>
  }

  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ItemListContainer
