'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "107a9e1198486c8ded5da70ef4975ea5",
"manifest.json": "bb8ec6f391223ec0b7e6aa77b2a4f2ec",
"main.dart.js": "f2aba0aba8a54570ee325e8624fea86c",
"assets/FontManifest.json": "04fc713bd03eae239e8910bdc1e033f6",
"assets/AssetManifest.json": "5548bf38c140681861c897d9e1c2d4a7",
"assets/fonts/Hacen.ttf": "ff0131af4e51059f7252f9d17bed1060",
"assets/fonts/Hacen2.ttf": "5995c725ca5a13be62d3dc75c2fc59fc",
"assets/fonts/arialB.ttf": "919ca656effd44a965b46ce224206fa2",
"assets/fonts/cc.ttf": "71b4de66bd8bb9eec0c1e27914c5f546",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Cairo.ttf": "2edd7ee30421da9700b12928ac0073db",
"assets/fonts/tahoma.ttf": "f793779a938d146e45851f90db29e3e2",
"assets/fonts/ll.ttf": "fe1bd1305bbef9b7a6ec73df20ff9abd",
"assets/fonts/arial.ttf": "fa3228aadde0db988e1822c2f736c131",
"assets/fonts/Cairor.ttf": "ff8fa0e134d04ac50030e27cefcf7a4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/error_without_loop.flr": "35b9b6c9a71063406bdac60d7b3d53e8",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/error.flr": "87d83833748ad4425a01986f2821a75b",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/assets/cab.jpg": "5b891ee3d44bb608c2fa9e1c101b34a8",
"assets/assets/logo3.jpg": "ad0eac256aa0a001d131a556a5f93f00",
"assets/assets/mervat.png": "d7cff1de05bac1b01c6044438208dfd7",
"assets/assets/cb.png": "9386d2e769a543fb7d4d471c4957a89e",
"assets/assets/logo3.png": "402e5217f82a6ed832d728d10b9e3292",
"assets/assets/mm.jpeg": "971b4dc68920e87304fe3e4bd0b992b3",
"assets/assets/nb2.jpg": "34a40c41cb5ba78e5f6fe1dd07116759",
"assets/assets/mofed.png": "1e51dff1fc35ad10e7af40802e716429",
"assets/assets/intrologo.webp": "bb2a0a59d4b6af2d59ac3bf6413ecf30",
"assets/assets/peter.png": "565eeb07ee77419aba040a60b508a8c5",
"assets/assets/right.png": "69efc7d29c1cd3753da5edb29e69723d",
"assets/assets/cb.jpg": "e79549f498d95b53d8e132a642cbf37c",
"assets/assets/ab.jpeg": "f7bb3c9097784f0f363ecfe4a90be8c5",
"assets/assets/samah.jpg": "baff0cca6681732bc7af6ccf632fa406",
"assets/assets/footer.jpg": "931da0fbb743cd290562b61ec99c9a92",
"assets/assets/minafouad.png": "6648888f5d7de21cde13778a1c24e36a",
"assets/assets/logo.jpg": "18744c5849d967d82be63212dc3e32cd",
"assets/assets/fady.png": "afd0ef9fbe60d29bbf965636ed9ac26f",
"assets/assets/logo.png": "d9ce2a29f6ebe3f39d56521051b40fab",
"assets/assets/aa.png": "1b7a5f22591f686214f1d5cecb4fe7bb",
"assets/assets/minakamel.png": "6b2017b7ba4ede4ac8e29dbbfe143e4e",
"assets/assets/nb1.jpg": "4b34f1bbc15c1e5fc6cd964220ad5740",
"assets/assets/mt.png": "8ffb80cd2dad8ea811b3fbf200c19585",
"assets/assets/minakamel.jpg": "6b2017b7ba4ede4ac8e29dbbfe143e4e",
"assets/assets/alex.png": "afb255828778cfb17010654809b00b5d",
"assets/assets/logo2.jpg": "402e5217f82a6ed832d728d10b9e3292",
"assets/assets/eg.jpg": "41fe2c0e20526efec4edd417fab98529",
"assets/assets/aa.jpeg": "40a245f6b975296bd7a01f0c71f70200",
"assets/assets/ca.png": "bea88686f9ea595251ddd7748041da55",
"assets/assets/bola.png": "ad15d547d9be46867ff7fd1cb883fa90",
"assets/assets/logo2.png": "d1fe041c8fc721d3acf6db0e4cc298f0",
"assets/NOTICES": "4ba1aae955e050fc61f130014b908d4a",
"index.html": "8a2e8ae9f2e970096d7d7e898dbbafee",
"/": "8a2e8ae9f2e970096d7d7e898dbbafee",
"version.json": "363cdae49fbd901038074d0f67a711c0",
"icons/Icon-192.png": "0d069683bd629ee660f47dfba26783ff",
"icons/Icon-512.png": "107a9e1198486c8ded5da70ef4975ea5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
