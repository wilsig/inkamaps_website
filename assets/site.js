// InkaMaps Platform — header, footer y comportamiento compartido
(function () {
  const BASE = "https://www.inkamaps.com";
  const WA = "https://wa.me/51960995514?text=";
  const TEMA = (n) => `https://mapas.inkamaps.com/v1/temas/${n}.webp`;

  const icon = {
    map: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>',
    search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    data: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/></svg>',
    heart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
    users: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/></svg>',
    star: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1-4.5-4.2 6.1-.8z"/></svg>',
    caret: '<svg class="caret" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m2 3.5 3 3 3-3"/></svg>',
  };

  const header = `
  <a class="skip" href="#contenido">Saltar al contenido</a>
  <header class="site-header">
    <div class="container nav">
      <a class="brand" href="index.html" aria-label="InkaMaps Platform, inicio">
        <span class="brand-mark"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg></span>
        InkaMaps <span class="brand-tag">Platform</span>
      </a>
      <ul class="nav-links" id="nav-links">
        <li class="has-mega">
          <button type="button" aria-expanded="false" aria-controls="mega-productos" id="btn-productos">Productos ${icon.caret}</button>
          <div class="mega" id="mega-productos" role="region" aria-label="Productos">
            <div class="container mega-inner">
              <div class="mega-col">
                <a class="mega-head" href="mapas.html"><span class="mega-icon">${icon.map}</span><h3>Mapas</h3></a>
                <p>Mapas del Perú para tu web y apps, con tu estilo y tus capas.</p>
                <ul>
                  <li><a href="mapas.html#mapa-base">Mapa base<small>Vías, manzanas y lotes</small></a></li>
                  <li><a href="mapas.html#estilos">Estilos<small>8 estilos para tu marca</small></a></li>
                  <li><a href="mapas.html#builder">InkaMaps Builder<small>Tus capas, sin saber de GIS y por API</small></a></li>
                </ul>
              </div>
              <div class="mega-col">
                <a class="mega-head" href="busquedas.html"><span class="mega-icon">${icon.search}</span><h3>Búsquedas</h3></a>
                <p>Encuentra lugares y direcciones del Perú por API.</p>
                <ul>
                  <li><a href="busquedas.html#places">Places<small>Lugares y negocios curados</small></a></li>
                  <li><a href="busquedas.html#geocoding">Geocoding<small>Dirección ↔ coordenada</small></a></li>
                  <li><a href="busquedas.html#autocompletado">Autocompletado<small>Sugerencias mientras escribes</small></a></li>
                  <li><a href="busquedas.html#api">API y consola<small>Keys, pruebas y consumo</small></a></li>
                </ul>
              </div>
              <div class="mega-col">
                <a class="mega-head" href="datos.html"><span class="mega-icon">${icon.data}</span><h3>Datos</h3></a>
                <p>Cartografía del Perú lista para tu SIG o tus análisis.</p>
                <ul>
                  <li><a href="datos.html#catalogo">Venta de cartografía<small>Vías, manzanas, núcleo urbano, POIs</small></a></li>
                  <li><a href="datos.html#formatos">Formatos y entrega<small>Shapefile, GeoPackage, GeoJSON…</small></a></li>
                </ul>
              </div>
              <div class="mega-feature">
                <img src="${TEMA("andino")}" alt="Vista del estilo Andino del mapa base" loading="lazy">
                <b>Nuevo: estilo Andino</b>
                <p>Tonos tierra y textiles andinos para turismo y festividades.</p>
                <a class="link-arrow" href="mapas.html#estilos">Ver los estilos</a>
              </div>
            </div>
          </div>
        </li>
        <li class="has-mega">
          <button type="button" aria-expanded="false" aria-controls="mega-empresa">Empresa ${icon.caret}</button>
          <div class="mega" id="mega-empresa" role="region" aria-label="Empresa">
            <div class="container mega-inner">
              <div class="mega-col">
                <a class="mega-head" href="index.html#mision"><span class="mega-icon">${icon.heart}</span><h3>Nosotros</h3></a>
                <p>Lo que nos mueve y cómo trabajamos.</p>
                <ul>
                  <li><a href="index.html#mision">Nuestra misión<small>Democratizar los anuncios inmobiliarios</small></a></li>
                  <li><a href="index.html#principios">Nuestros principios<small>Lo que guía todo lo que construimos</small></a></li>
                  <li><a href="index.html#diferencia">Nuestra diferencia<small>Un mapa para quien publica y quien busca</small></a></li>
                  <li><a href="index.html#valores">Cómo trabajamos<small>Hecho en el Perú, justo y en soles</small></a></li>
                </ul>
              </div>
              <div class="mega-col">
                <a class="mega-head" href="index.html#clientes"><span class="mega-icon">${icon.users}</span><h3>Clientes</h3></a>
                <p>Empresas e instituciones que confían en nosotros.</p>
                <ul>
                  <li><a href="index.html#clientes">Nuestros clientes<small>Interbank, Alicorp, Claro, Entel…</small></a></li>
                  <li><a href="index.html#testimonios">Testimonios<small>Lo que dicen quienes ya lo usan</small></a></li>
                </ul>
              </div>
              <div class="mega-col">
                <a class="mega-head" href="index.html#casos"><span class="mega-icon">${icon.star}</span><h3>Casos de éxito</h3></a>
                <p>Resultados reales con datos del Perú.</p>
                <ul>
                  <li><a href="index.html#caso-interbank">Interbank<small>−25 % de tiempo de visita</small></a></li>
                  <li><a href="index.html#caso-positiva">La Positiva<small>−20 % en indemnizaciones</small></a></li>
                  <li><a href="index.html#caso-sat">SAT<small>Cobranza por sectores</small></a></li>
                  <li><a href="index.html#caso-sodexo">Sodexo<small>Visitas de campo optimizadas</small></a></li>
                </ul>
              </div>
              <div class="mega-feature">
                <img src="assets/img/casos/positiva.jpg" alt="Sede de La Positiva Seguros" loading="lazy">
                <b>La Positiva: −20 % en indemnizaciones</b>
                <p>Geocodificaron sus propiedades para estimar el riesgo antes de asegurar.</p>
                <a class="link-arrow" href="index.html#caso-positiva">Leer el caso</a>
              </div>
            </div>
          </div>
        </li>
        <li><a href="planes.html">Planes</a></li>
        <li><a href="desarrolladores.html">Desarrolladores</a></li>
        <li class="mobile-actions"><a class="btn btn-ghost btn-sm" href="${BASE}/sign-in">Ingresar</a><a class="btn btn-primary btn-sm" href="index.html#contacto">Hablar con ventas</a></li>
      </ul>
      <div class="nav-actions">
        <a class="text-link" href="${BASE}/">Ir al mapa</a>
        <a class="text-link" href="${BASE}/sign-in">Ingresar</a>
        <a class="btn btn-primary btn-sm" href="index.html#contacto">Hablar con ventas</a>
      </div>
      <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav-links">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html"><span class="brand-mark"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg></span>InkaMaps</a>
          <p>El mapa del Perú, hecho en el Perú. Mapas, búsquedas y datos por API, con precios en soles.</p>
        </div>
        <div><h4>Mapas</h4><ul>
          <li><a href="mapas.html#mapa-base">Mapa base</a></li>
          <li><a href="mapas.html#estilos">Estilos</a></li>
          <li><a href="mapas.html#builder">InkaMaps Builder</a></li></ul></div>
        <div><h4>Búsquedas</h4><ul>
          <li><a href="busquedas.html#places">Places</a></li>
          <li><a href="busquedas.html#geocoding">Geocoding</a></li>
          <li><a href="busquedas.html#autocompletado">Autocompletado</a></li>
          <li><a href="busquedas.html#api">API y consola</a></li></ul></div>
        <div><h4>Datos</h4><ul>
          <li><a href="datos.html#catalogo">Venta de cartografía</a></li>
          <li><a href="datos.html#formatos">Formatos</a></li>
          <li><a href="datos.html#faq">Preguntas frecuentes</a></li></ul></div>
        <div><h4>Empresa</h4><ul>
          <li><a href="index.html#mision">Nuestra misión</a></li>
          <li><a href="index.html#clientes">Clientes</a></li>
          <li><a href="index.html#casos">Casos de éxito</a></li>
          <li><a href="planes.html">Planes</a></li>
          <li><a href="desarrolladores.html">Desarrolladores</a></li>
          <li><a href="legal.html">Legal</a></li>
          <li><a href="mailto:contacto@inkamaps.com">contacto@inkamaps.com</a></li></ul></div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} InkaMaps.</span>
        <span><a href="legal-terminos.html">Términos</a> · <a href="legal-privacidad.html">Privacidad</a> · <a href="legal-enterprise.html">Enterprise</a> · <a href="legal-nivel-de-servicio.html">SLA</a></span>
      </div>
    </div>
  </footer>
  <a class="wa-float" href="${WA}Hola%2C%20tengo%20una%20consulta%20sobre%20InkaMaps." target="_blank" rel="noopener">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.6 2 1.1 1 2 1.3 2.3 1.4.3.2.5.1.6 0l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.1.1.6-.1 1.2z"/></svg>
    <span>¿Consultas? WhatsApp</span>
  </a>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  // Mega menús (Productos y Empresa)
  const headerEl = document.querySelector(".site-header");
  const desktop = window.matchMedia("(min-width: 881px)");
  const menus = [...document.querySelectorAll(".has-mega")].map((li) => {
    const btn = li.querySelector("button");
    const mega = li.querySelector(".mega");
    let closeTimer;
    const set = (open) => { btn.setAttribute("aria-expanded", String(open)); mega.classList.toggle("open", open); };
    const openOnly = () => { menus.forEach((m) => m.li !== li && m.set(false)); set(true); };
    // En escritorio el hover ya lo abrió: el clic no debe cerrarlo
    btn.addEventListener("click", () => (desktop.matches || btn.getAttribute("aria-expanded") !== "true" ? openOnly() : set(false)));
    li.addEventListener("mouseenter", () => { if (desktop.matches) { clearTimeout(closeTimer); openOnly(); } });
    li.addEventListener("mouseleave", () => { if (desktop.matches) closeTimer = setTimeout(() => set(false), 150); });
    mega.addEventListener("click", (e) => { if (e.target.closest("a")) { set(false); headerEl.classList.remove("mobile-open"); } });
    return { li, btn, set };
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const open = menus.find((m) => m.btn.getAttribute("aria-expanded") === "true");
    if (open) { open.set(false); open.btn.focus(); }
  });
  document.addEventListener("click", (e) => { if (desktop.matches) menus.forEach((m) => { if (!m.li.contains(e.target)) m.set(false); }); });

  // Menú móvil
  const toggle = document.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => {
    const open = headerEl.classList.toggle("mobile-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".nav-links > li > a").forEach((a) => a.addEventListener("click", () => headerEl.classList.remove("mobile-open")));

  // Sub-navegación activa
  const subLinks = [...document.querySelectorAll(".subnav a, .doc-toc a")];
  if (subLinks.length && "IntersectionObserver" in window) {
    const targets = subLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        subLinks.forEach((a) => {
          const on = a.getAttribute("href") === "#" + en.target.id;
          a.classList.toggle("active", on);
          // En la tira horizontal (móvil) mantiene visible el enlace activo
          const strip = a.parentElement;
          if (on && strip.scrollWidth > strip.clientWidth) strip.scrollLeft = a.offsetLeft - strip.offsetLeft - 16;
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    targets.forEach((t) => io.observe(t));
  }

  // Animación de entrada
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const ro = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); } }), { threshold: .12 });
    reveals.forEach((el) => ro.observe(el));
  } else reveals.forEach((el) => el.classList.add("in"));
})();
