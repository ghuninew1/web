import { registerRoute, Route } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// Evict image cache entries older thirty days:
const imageRoute = new Route(({ request }) => {
  return request.destination === 'image';
}, new CacheFirst({
  cacheName: 'images',
  plugins: [
    new ExpirationPlugin({
      maxAgeSeconds: 60,
    })
  ]
}));

// Evict the least-used script cache entries when
// the cache has more than 50 entries:
const scriptsRoute = new Route(({ request }) => {
  return request.destination === 'script';
}, new CacheFirst({
  cacheName: 'scripts',
  plugins: [
    new ExpirationPlugin({
      maxEntries: 50,
    })
  ]
}));

const stylesRoute = new Route(({ request }) => {
    return request.destination === 'style';
  }, new CacheFirst({
    cacheName: 'styles'
  }));

// Register routes
registerRoute(imageRoute);
registerRoute(scriptsRoute);
registerRoute(stylesRoute);