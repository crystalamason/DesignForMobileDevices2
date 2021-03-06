self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response(
        'Welcome to Reel \n'+        
'There seems to be a problem with your connection.\n'+        
'We look forward to telling you about the latest films as soon as you are online'
      );
    })
  );
});

var BASE_PATH = '/DesignForMobileDevices2/';
var CACHE_NAME = 'gih-cache';
var TEMP_IMAGE_CACHE_NAME = 'temp-cache-v1'
var CACHED_URLS = [
    //Our HTML
    BASE_PATH + 'index.html',
    
    //Images for favicons
    BASE_PATH + 'images/favicon/android-icon-36x36.png',
    BASE_PATH + 'images/favicon/android-icon-48x48.png',
    BASE_PATH + 'images/favicon/android-icon-72x72.png',
    BASE_PATH + 'images/favicon/android-icon-96x96.png',
    BASE_PATH + 'images/favicon/android-icon-144x144.png',
    BASE_PATH + 'images/favicon/android-icon-192x192.png',
    BASE_PATH + 'images/favicon/apple-icon.png',
    BASE_PATH + 'images/favicon/apple-icon-57x57.png',
    BASE_PATH + 'images/favicon/apple-icon-60x60.png',
    BASE_PATH + 'images/favicon/apple-icon-72x72.png',
    BASE_PATH + 'images/favicon/apple-icon-76x76.png',
    BASE_PATH + 'images/favicon/apple-icon-114x114.png',
    BASE_PATH + 'images/favicon/apple-icon-120x120.png',
    BASE_PATH + 'images/favicon/apple-icon-144x144.png',
    BASE_PATH + 'images/favicon/apple-icon-152x152.png',
    BASE_PATH + 'images/favicon/apple-icon-180x180.png',
    BASE_PATH + 'images/favicon/apple-icon-precomposed.png',
    BASE_PATH + 'images/favicon/favicon-16x16.png',
    BASE_PATH + 'images/favicon/favicon-32x32.png',
    BASE_PATH + 'images/favicon/favicon-96x96.png',
    BASE_PATH + 'images/favicon/ms-icon-70x70.png',
    BASE_PATH + 'images/favicon/ms-icon-144x144.png',
    BASE_PATH + 'images/favicon/ms-icon-150x150.png',
    BASE_PATH + 'images/favicon/ms-icon-310x310.png',
    
    //Images for pages
    BASE_PATH + 'images/beautyAndTheBeast140x220.jpg',
    BASE_PATH + 'images/bossBaby140x220.jpg',
    BASE_PATH + 'images/fastAndFurious8140x220.jpg',
    BASE_PATH + 'images/getOut140x220.jpg',
    BASE_PATH + 'images/goingInStyle140x220.jpg',
    BASE_PATH + 'images/theirFinest140x220.jpg',
    BASE_PATH + 'images/theZookeepersWife140x220.jpg',
    BASE_PATH + 'images/unforgettable140x220.jpg',
    
    //JavaScript
    BASE_PATH + 'javascript/bulma.js',
    BASE_PATH + 'javascript/jquery-2.2.0.min.js',
    BASE_PATH + 'javascript/script.js',
    
    //Manifest
    BASE_PATH + 'manifest.json',
    
    //CSS and Fonts
    BASE_PATH + 'css/bulma.css',
    BASE_PATH + 'css/styles.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener('fetch', function(event) {
  var requestURL = new URL(event.request.url);
  // Handle requests for index.html
  if (requestURL.pathname === BASE_PATH + 'index.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('index.html').then(function(cachedResponse) {
          var fetchPromise = fetch('index.html').then(function(networkResponse) {
            cache.put('index.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
      } else if (requestURL.pathname === BASE_PATH + 'films.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('films.html').then(function(cachedResponse) {
          var fetchPromise = fetch('films.html').then(function(networkResponse) {
            cache.put('films.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
                } else if (requestURL.pathname === BASE_PATH + 'offersPromotions.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('offersPromotions.html').then(function(cachedResponse) {
          var fetchPromise = fetch('offersPromotions.html').then(function(networkResponse) {
            cache.put('offersPromotions.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
                    } else if (requestURL.pathname === BASE_PATH + 'myBookings.html') {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('myBookings.html').then(function(cachedResponse) {
          var fetchPromise = fetch('myBookings.html').then(function(networkResponse) {
            cache.put('myBookings.html', networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
       } else if (
    CACHED_URLS.includes(requestURL.href) ||
    CACHED_URLS.includes(requestURL.pathname)
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function(response) {
          return response || fetch(event.request);
        });
      })
    );
  }
});


