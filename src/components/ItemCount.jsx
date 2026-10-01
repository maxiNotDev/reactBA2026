import { useState } from 'react'

function ItemCount() {
  const [cantidad, setCantidad] = useState(1)

  function restar() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  function sumar() {
    setCantidad(cantidad + 1)
  }

  return (
    <div className="mt-3 flex gap-2">
      <div className="flex items-center border border-ink/20">
        <button onClick={restar} className="h-8 w-8">−</button>
        <span className="w-8 text-center text-sm font-bold">{cantidad}</span>
        <button onClick={sumar} className="h-8 w-8">+</button>
      </div>
      {/* Todavía no hace nada, después lo conecto al carrito */}
      <button className="flex-1 bg-ink text-sm font-bold text-cream hover:bg-terracota">
        Agregar
      </button>
    </div>
  )
}

export default ItemCount
