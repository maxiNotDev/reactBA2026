import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh]">
        {/* Acá se muestra la página de la ruta actual */}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
