const CACHE_NAME = "rodrigo-maldonado-profile-v1";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",

  "./css/style.css",
  "./js/app.js",

  "./images/icon-192.png",
  "./images/icon-512.png",

  "./images/rodrigo-banner.jpg",
  "./images/rodrigo-hero.jpg",
  "./images/logo-rodrigo.png",

  "./images/propiedad-ancla-1.jpg",
  "./images/propiedad-ancla-2.jpg",

  "./images/propiedad-lista-1.jpg",
  "./images/propiedad-lista-2.jpg",
  "./images/propiedad-lista-3.jpg",
  "./images/propiedad-lista-4.jpg",
  "./images/propiedad-lista-5.jpg",
  "./images/hero.jpg",
  "./images/alana.jpg",
  "./images/propiedad-lista-6.jpg",
  "./images/propiedad-lista-7.jpg",
  "./images/propiedad-lista-8.jpg",
  "./images/propiedad-lista-9.jpg",

  "./music/ambient.mp3"
];

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ARCHIVOS))
      .then(() => self.skipWaiting())
  );

});

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys =>

      Promise.all(

        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))

      )

    ).then(() => self.clients.claim())

  );

});

self.addEventListener("fetch", event => {

  if(event.request.method !== "GET") return;

  event.respondWith(

    fetch(event.request)
      .then(response => {

        const copia = response.clone();

        caches.open(CACHE_NAME)
          .then(cache => cache.put(event.request, copia));

        return response;

      })
      .catch(() => caches.match(event.request))

  );

});
