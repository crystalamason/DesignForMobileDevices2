if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
          console.log('Service worker registered successfully');
        }).catch(function(err) {
          console.log('Service worker registration failed: ', err);
        });
}

//self.addEventListener('fetch', function(event) {
//  event.respondWith(
//    fetch(event.request).catch(function() {
//      return new Response(
//        'Welcome to Reel \n'+        
//'There seems to be a problem with your connection.\n'+        
//'We look forward to telling you about the latest films as soon as you are online'
//      );
//    })
//  );
//});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match('index-offline.html');
    })
  );
});
