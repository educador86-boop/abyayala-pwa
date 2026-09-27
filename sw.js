const NOMBRE_CACHE = 'abyayala-v1';
const URL a caché = [
  '/',
  '/css/estilos.css' // Ajusta si tienes CSS externo crítico
];

auto.addEventListener('instalar', función(evento) {
  evento.esperaHasta(
    cachés.abierto(NOMBRE_CACHE)
      .entonces(función(cache) {
        retorno cache.agregar todo(URL un caché);
      })
  );
});

auto.addEventListener('autobús', función(evento) {
  evento.responderCon(
    cachés.partido(evento.solicititud)
      .entonces(función(respuesta) {
        si (respuesta) {
          retorno respuesta;
        }
        retorno buscar(evento.solicititud);
      })
  );
});
