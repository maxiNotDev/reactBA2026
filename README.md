# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


# Tartini | Tartas de estación

Tienda de muestra hecha con React, Vite y React Router. El catálogo se carga desde `public/productos.json` con `fetch` y `useEffect`.

## Empezar

```sh
npm install
npm run dev
```

Para validar la entrega:

```sh
npm run lint
npm run build
```

## Cambiar las imágenes

Subí cada foto a ImgBB y reemplazá el valor de `imagen` del producto correspondiente en `public/productos.json` por el enlace directo. La portada tiene su imagen en `src/pages/Home.jsx`.

Los nombres del equipo, la dirección, los horarios y el correo del footer son datos de ejemplo: reemplazalos por los reales antes de entregar.

## Rutas

- `/` Inicio
- `/productos` Catálogo
- `/producto/:id` Detalle
- `/carrito` Vista prevista para la entrega final; todavía sin lógica de carrito
