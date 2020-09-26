var CACHE_NAME = 'cache-front-end';
var urlsToCache = [
  '/',
  '/index.html',
  'img/menu/menu-boombox.png',
  'img/menu/menu-globo.png',
  'img/menu/menu-radio.png',
  'img/menu/menu-vitrola.png',
  'img/boombox/venicebeach.jpg',
  'img/boombox/caixas.png',
  'img/rádio/carro.png',
  'img/rádio/controle-anterior.png',
  'img/rádio/controle-próxima.png',
  'img/vitrola/aparelho.png',
  'img/vitrola/background-mobile.jpg',
  'img/vitrola/background.jpg',
  'img/vitrola/cover.png',
  'img/vitrola/haste.png',
  'img/vitrola/lp.png',
  'css/main.css',
  'js/main.js',
  'css/normalize.css',
  'js/plugins.js',
  'js/vendor/modernizr-3.11.2.min.js',




  
  
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});