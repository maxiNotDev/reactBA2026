function Footer() {
  return (
    <footer className="bg-sand text-sm text-muted">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="text-lg text-ink">
            Tartini<span className="text-terracota">.</span>
          </p>
          <p className="my-3">Una cocina chica, tartas frescas y una mesa siempre abierta.</p>
          <p>hola@tartini.com.ar</p>
          <p>11 1111 1111</p>
        </div>

        <div>
          <p className="font-bold">Sucursal Palermo</p>
          <p>Gurruchaga 1111, Palermo</p>
          <p>Martes a domingo, 9 a 20 hs</p>

          <p className="mt-4 font-bold">Sucursal Belgrano</p>
          <p>Av. Cabildo 2222, Belgrano</p>
          <p>Martes a domingo, 8 a 19 hs</p>
        </div>

        <div>
          <p className="font-bold">Newsletter</p>
          <div className="mt-2 flex gap-2">
            <input type="email" placeholder="Tu mail" className="w-full border border-muted/40 bg-cream px-2 py-1" />
            <button className="bg-ink px-3 text-cream">Agregar</button>
          </div>
        </div>
      </div>

      <p className="mx-auto max-w-6xl px-4 pb-6">© 2026 Tartini Pastelería</p>
    </footer>
  )
}

export default Footer
