function Titulo() {
  // JSX code https://babeljs.io/

  const nombre = "";
  // si la constante nombre existe y tiene un valor se ejecutará lo siguiente
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola Usuario</h1>;
}

export default Titulo;
