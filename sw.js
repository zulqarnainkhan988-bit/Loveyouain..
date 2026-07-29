/* Merges OneSignal's push service worker into this same file so there's
   only one service worker for the whole site (avoids scope conflicts). */
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

/* Bump this version string every time you re-upload the site.
   It forces the old cache to be deleted so your phone/browser
   can never get stuck showing an outdated version again. */
const CACHE = 'ain-site-v8';
const ASSETS = ['./', './index.html', './app.js', './manifest.json', './icon.png', './icon-maskable.png'];

self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});

self.addEventListener('activate', (e)=>{
  e.waitUntil(
    caches.keys().then(keys=> Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

/* Network-first: always try to fetch the latest version first.
   Only fall back to the cached copy if the network request fails
   (i.e. you're offline). This guarantees that whenever you push
   an update and the phone has a connection, it shows the new
   content immediately instead of a stale cached copy. */
self.addEventListener('fetch', (e)=>{
  if(e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res=>{
      if(res && res.status===200){
        const copy = res.clone();
        caches.open(CACHE).then(c=>c.put(e.request, copy));
      }
      return res;
    }).catch(()=> caches.match(e.request))
  );
});
