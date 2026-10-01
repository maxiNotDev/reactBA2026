import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-sand">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracota text-lg text-cream">
            t.
          </span>
          Tartini
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-terracota">Inicio</Link>
          <Link to="/nosotros" className="hover:text-terracota">Nosotros</Link>
          <Link to="/productos" className="hover:text-terracota">Tienda online</Link>
          <Link to="/carrito" className="hover:text-terracota">Carrito</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
