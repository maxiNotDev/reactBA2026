import { Link } from 'react-router-dom'
import ItemCount from './ItemCount.jsx'

function Item({ producto }) {
  return (
    <div>
      <Link to={`/producto/${producto.id}`}>
        <img src={producto.imagen} alt={producto.nombre} className="aspect-square w-full object-cover" />
      </Link>

      <div className="mt-3 flex justify-between text-xs uppercase text-muted">
        <span>{producto.categoria}</span>
        <span>{producto.porciones} porciones</span>
      </div>

      <div className="mt-1 flex justify-between">
        <Link to={`/producto/${producto.id}`} className="font-display text-lg hover:text-terracota">
          {producto.nombre}
        </Link>
        <span className="font-bold">${producto.precio}</span>
      </div>

      <ItemCount />
    </div>
  )
}

export default Item
