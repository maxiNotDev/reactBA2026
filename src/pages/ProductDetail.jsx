import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemCount from '../components/ItemCount.jsx'

function ProductDetail() {
  // El id viene de la URL: /producto/:id
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)

  // Traigo todos los productos y busco el que tiene ese id
  useEffect(() => {
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((item) => item.id === Number(id))
        setProducto(encontrado)
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) {
    return <p className="py-20 text-center text-muted">Cargando...</p>
  }

  if (!producto) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-4xl">No encontramos esa tarta</h1>
        <Link to="/productos" className="mt-4 inline-block text-terracota">Volver a la tienda</Link>
      </div>
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/productos" className="text-sm text-muted hover:text-terracota">← Volver a la tienda</Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <img src={producto.imagen} alt={producto.nombre} className="w-full object-cover" />

        <div>
          <p className="text-xs font-bold uppercase text-terracota">{producto.categoria}</p>
          <h1 className="my-4 font-display text-5xl">{producto.nombre}</h1>
          <p className="text-muted">{producto.descripcion}</p>
          <p className="mt-4 text-sm text-muted">Rinde {producto.porciones} porciones</p>
          <p className="mt-6 text-2xl font-bold">${producto.precio}</p>
          <ItemCount />
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
