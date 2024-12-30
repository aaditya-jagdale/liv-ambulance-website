'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "401f5657dcf3130b4887ab573e9f9543",
"assets/AssetManifest.bin.json": "a4112fd256ae5ec6390d3818b1b8fa15",
"assets/AssetManifest.json": "316be4ec08851f93db428b9fc309a285",
"assets/assets/icons/about_us.svg": "e9f7f3fd149a6a7a5cf2f87d167a887d",
"assets/assets/icons/blood-pressure.svg": "db3d52b5436cc608cb9675746e9a966c",
"assets/assets/icons/body-temp.svg": "bb61358361c6116b0ca70aef60074cbb",
"assets/assets/icons/booking_history.svg": "482399d598d85b1b68a50ffcffb98d1c",
"assets/assets/icons/faq.svg": "8980a2c0b9eb0c5c250227c6bff18f32",
"assets/assets/icons/heart-rate-var.svg": "db62dae916786c9424011f8263e31503",
"assets/assets/icons/heart-rate.svg": "b1481a1031b0b90c3f3c7e052b57a401",
"assets/assets/icons/login.svg": "f00605d90faf7d1c5ca9e3eb58667e89",
"assets/assets/icons/logout.svg": "617bc0d6440c81b7f560ee4c41e1a82d",
"assets/assets/icons/my_profile.svg": "16a5ba9604ed541aa443f63d620d4bfd",
"assets/assets/icons/new_cases.svg": "08ea65c8256acfddc4eadb116033af3c",
"assets/assets/icons/privacy_policy.svg": "f458df6044610fa8e8176e3561713e77",
"assets/assets/icons/respiratory-rate.svg": "e5789d603a31fb24b9016f8c7506f99d",
"assets/assets/icons/shield.svg": "8d05e5ce82827726f400076145f28a37",
"assets/assets/icons/splash/1.svg": "a281d763afcd7b075d1cee5ea31e55cf",
"assets/assets/icons/splash/2.svg": "b6891b4848e0aace271c59946d33c7b3",
"assets/assets/icons/splash/3.svg": "00c5316c4ac5d4526597b31add59bae2",
"assets/assets/icons/splash/4.svg": "5e747f91724f69e6fc823e52e8a9cde1",
"assets/assets/icons/splash/5.svg": "87abcb202e546829d9aa20b9290ea49a",
"assets/assets/icons/splash/6.svg": "d95c227922c4a6e42eb38408228033de",
"assets/assets/icons/splash/7.svg": "9a1fcf69e82e4d37eb740dc14d131d18",
"assets/assets/icons/spo2.svg": "f0ea12b1bdddafe252f1cb01cf7d4fe5",
"assets/assets/icons/tnc.svg": "482399d598d85b1b68a50ffcffb98d1c",
"assets/assets/icons/upload.svg": "6e658069c5858c61c61aa2d160761a60",
"assets/assets/images/logo.png": "af61db253ce617ef0e0c8ecab47a58b0",
"assets/assets/images/onboarding.png": "2b08281ae3628d7b468cdcf4b81f8b1d",
"assets/FontManifest.json": "c8015ff0a955188520d7cc08bba7ac89",
"assets/fonts/Manrope-Bold.ttf": "69258532ce99ef9abf8220e0276fff04",
"assets/fonts/Manrope-ExtraBold.ttf": "8541582abce817ab8857c51ae0a35ca9",
"assets/fonts/Manrope-ExtraLight.ttf": "100308b8ce2da4b67f4850e9b9252b26",
"assets/fonts/Manrope-Light.ttf": "9e353f65739cc41a37bed272850cf92e",
"assets/fonts/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/fonts/Manrope-Regular.ttf": "f8105661cf5923464f0db8290746d2f9",
"assets/fonts/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/fonts/MaterialIcons-Regular.otf": "a4453cc669cee92d3b8d4d0897ed3611",
"assets/NOTICES": "2168121c131fa9ad0dfab9cc78a56d88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e906eb9bb34137d4228c85d4da2dcf39",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "81d3b7fea8edc2b9e5c2c1fe162f41cc",
"/": "81d3b7fea8edc2b9e5c2c1fe162f41cc",
"main.dart.js": "8c28db0c6957fbb816c571e6534ea5a1",
"manifest.json": "bb912daf18a1717be36b7c6f53864126",
"version.json": "642d6142753935b731cab482ba523d58"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}