'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e474958d117206b0f9e1082f433adf8f",
".git/config": "0c57c7f4067fff2d9bbf739edc89c07f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f62c7e1613cc6fb84f306acf9039c613",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f951445c42501cef8e2b473013eeaa93",
".git/logs/refs/heads/gh-pages": "e9b60d7ce59fa16fef3ba3c4c57265e7",
".git/logs/refs/heads/master": "9ee3e98c613692b1566b7fdbcf7191a5",
".git/logs/refs/remotes/origin/gh-pages": "9ea882042fd018f382ef218827ed308d",
".git/objects/03/1fe70e9beb19ef77f857a535beaa0cf8e3fe36": "daaa0abfacf213cba50724825cc7e9c5",
".git/objects/04/5a3965447ed635109816b5b9de90fef71dc845": "5afd6164c6d084fa554413abac028d8c",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/bd823042dbfac1f3a56ea8fcc888e9ad30f2cb": "fa3588012a8e47c85fc34d8c21130282",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0d/fdbe1bda2f81fc03c1da3a5c63dd00b01fa81e": "e446ba465482a5cb2b795b70e8a0e855",
".git/objects/10/851b6668e1ee9159241b429c32656d14fd2c95": "36fd9fe5cbc005bf47276c4c2d49a7d9",
".git/objects/14/6a89cccb793723631d5de18bd0f87283083c57": "2661f55a8158329fc4da47f0ecd6e178",
".git/objects/15/1d5390f90912d5d4e2032294f0681c5588363b": "1428fcc835f5abd4216c9bccd340d1ad",
".git/objects/17/6135a24e185f98ce4895a62e0c8aba1174636d": "090dfec211d1c1d9b62a38730ff62538",
".git/objects/1f/71d22257e50745bf19375acb164b90e8d4707c": "9d5bd9aedd1ff4631cd0fee2a6d3adda",
".git/objects/25/f925b537cbdf5e04d0f0acd4ab7346ccbd2375": "6e6c6c3e2b9c3fd4f86a151b3a412432",
".git/objects/2a/7b0f3c46a595db4b94a4eca122bfe4168147f4": "f5cfaff30fb3c7023b71c58dc35ae08d",
".git/objects/2d/529c41f8d2c586f449b8740d86cba65d429261": "53f8565318f612356e23076d818f2d38",
".git/objects/2d/5b93a53869f15af84e5c303733b8890ea03c11": "39537774ec73dca07e602be645986987",
".git/objects/33/24e45d8bf514b4011460387a50a1696dbec8cc": "77117ca428c81442885eb2c83715a811",
".git/objects/38/152cfab9f908a403607f361d1d906bfeb94cc8": "6a74340872d88ae33b830bbfaa6f903b",
".git/objects/38/359c8a1345f0d773180d01c969357b993607fc": "ddcf76c0003ce4116743b738ad416e7d",
".git/objects/39/ca9738d8371d65f384f7136d072e1b0fedee98": "25d9d983ec227225146f4be7919d856a",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/a19ef164343495395b4f73908a604a5bddab05": "3f7a39bb881b536980cfd3d50baa7b8a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4d/79fde4c73bdb154e5057da2cd9b80663e03a50": "462c69119658eac57be17654c64e7bbf",
".git/objects/50/c373df8665e50bb023279f7c426c2f503de738": "d10c4dbacab4e12305ed17c1693b47de",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/62/97468b5e848d64d4ab3f2665faf9e1e3d637c8": "c963bd9ed3e6e561b8dd78871da86c51",
".git/objects/67/2a41529a3cf7a6b3a5adc779e19644c2bd1c28": "f2aec11b2c16bee2ff6cafb7b96cab71",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/f27f9092c577360116b8c9c1f051e899fac842": "c1d7a05869c024780d5dabdc541b4bf5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/e2174bf017519d056de5b7bec677955ad78a9e": "1ec90de7d77c10ef281dd89799b59532",
".git/objects/74/62d2287702702d4c652ab78685f8196a119222": "3b9f188213a83ebc03ab625f9b9c9fbb",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7f/05d578d48c29031d2165f68b6e2c5d27d0c718": "1ae41f67106c681b7aa8665b435e22c0",
".git/objects/82/c28f9ba6104c8880f91b8a58fb01bd59f7d67c": "54eab1bb9e18275d31e4138fd5a943dd",
".git/objects/83/c3343e5db54960405e2507b4be92f9547eff6b": "da915d7eddc237fcf3d481ba03a0277a",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/87/5bcb4680e2400b9ed9d74dc2928618e1f78930": "8cd72a41fd0cf2d3f86401ffe7586458",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/21d74504a5201d898f5070217e22261bc8d279": "f3261ec3d6938be877986945a4eccaf0",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/91/7fefdd2b0c7e5b0620a3d3c8c3ebe86ab3f096": "106b594b3949584c89f13a5e5e60f15a",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/cc4269bcc76e005771af6946ce9a9c8de967f5": "14b56a15f7b6415fcdf5bd6c5bb0fd58",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/ad6b4c13e33cee348e82cd0a25531aa389e43c": "3c5c228662e786a9c4794652ddb387c0",
".git/objects/aa/ec05604cdbffaea174ceaac5b251b37435d4db": "d8c40820b2e712b8c1a5f9ebc8f3c206",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c0/4906548c2fdeff2cfbe323bcf27d50b484fab2": "ee0048623b4ac456351b42f2848cc7f0",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/499ed35bfd9ec11909893687d28d1559fb3824": "afd88f3ee706e7d3ba23fad6eded96dc",
".git/objects/d1/fe673ce9f2289e487de3c2a737cdfd514b86f6": "d845f584299019dfebfad56a84e9b36d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dc/afaba786241d5c1b8ea351f2eb23a57c419b8d": "0ac1d5adfa653c52d800bfaac23916e1",
".git/objects/dd/f9c5ada295e898eb81a27e8eda2e4c0c407e91": "27bf0a9837ef1b6248a3edec2a8d4f05",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/47438c99da6ad31927c0bdb08bb653c42bdf7d": "4d45f0031e458352c1bbfa4a779dc2cf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/02618abc5a29b3cc35ece1bdfe940d77e7d93f": "ac7cca7ad6aa3491283c793bdf357f24",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/f8a07d53c886409ea36d34528f4f61195ccba3": "585132fec98c25a1719a6c5f84911539",
".git/objects/f6/d3243f98c4df6e7ddebc186cc0717e8b097d3c": "cc5357072bb0101b8f61859ad8d23817",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fb/44982b1f8e0f41ae56ab27f1e718d19dbe33b2": "5c425410a02ad9ca8743567d392a1ad0",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/e0e766072f53bf9c389aef6cb4068d07e75434": "c8ab6dfbdb77dc3a05b7cddb56e7cbb3",
".git/refs/heads/gh-pages": "3c71a800c409d141e6fb97a16d525436",
".git/refs/heads/master": "c44fbb63c16a36d6a394512ca6f9984a",
".git/refs/remotes/origin/gh-pages": "3c71a800c409d141e6fb97a16d525436",
"assets/AssetManifest.bin": "65256e8c3dfd5be68b608f0e84032a46",
"assets/AssetManifest.bin.json": "1ce25cedc712393f5dd924f2381a5baa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a9474d5e74f5a8cda50869e9c2da0a01",
"assets/NOTICES": "20a844cdcb2cb874615ba2a9b2f63d93",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "91091cc0c1b1de971fba2aa8d8235ab8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "33f6717bdf020e51e99076327732fd1c",
"/": "33f6717bdf020e51e99076327732fd1c",
"main.dart.js": "52ced2936131a1cbd81954c39c5b8aa7",
"manifest.json": "e0edaffc1c33f7661ab7b03e65bd4ed7",
"version.json": "ac1ab15edabe347ade5fd008bc640b37"};
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
