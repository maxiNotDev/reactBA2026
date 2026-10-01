import ItemListContainer from '../components/ItemListContainer.jsx'

function ProductsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 text-center">
        <p className="text-xs font-bold uppercase text-terracota">Nuestra carta</p>
        <h1 className="mt-4 font-display text-5xl">Tartas y tortas frescas</h1>
        <p className="mt-4 text-muted">
          Recetas de siempre, frutas de estación y alguna sorpresa recién salida del horno.
        </p>
      </div>

      <ItemListContainer />
    </section>
  )
}

export default ProductsPage
