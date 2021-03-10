/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b266ad2a4386bc903ebec02e6eea269c"
  },
  {
    "url": "about.html",
    "revision": "21c6d2ffc07b632b69b2f7316fdd7831"
  },
  {
    "url": "assets/css/0.styles.ab1aa851.css",
    "revision": "0794aafa8116bccb265eb186af8a5eb5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e76c5187.js",
    "revision": "b81080a687c1c9d488d7243ca1be64b4"
  },
  {
    "url": "assets/js/11.2d25437a.js",
    "revision": "75301a77045c470863f7b679bd1a9ab4"
  },
  {
    "url": "assets/js/12.11ea5c25.js",
    "revision": "b2e4c536f5a74edf9054b06fc6b2bbc0"
  },
  {
    "url": "assets/js/13.88c385cd.js",
    "revision": "14006102678e31d2418ea8a4606dc7f2"
  },
  {
    "url": "assets/js/14.27e875b5.js",
    "revision": "7b82436b7d9ac6586ba9b4fe7dbfff53"
  },
  {
    "url": "assets/js/15.a6deaf89.js",
    "revision": "fbd85e072c7ce1a2a027ebe85f5e52f7"
  },
  {
    "url": "assets/js/16.21ac5f52.js",
    "revision": "a347b68d6e4106cea3d0ae2d083f9d18"
  },
  {
    "url": "assets/js/17.0b3292c1.js",
    "revision": "8548ed71cee8a137de01221c8a7b14ef"
  },
  {
    "url": "assets/js/18.eb1246c5.js",
    "revision": "b0722846c801d8563024f8933675d37d"
  },
  {
    "url": "assets/js/19.58c04d86.js",
    "revision": "62a137da2b3e2c628ea40b98909eb291"
  },
  {
    "url": "assets/js/20.bd8b4ed2.js",
    "revision": "5fa6363bea1ecef4c1dad08e2a3893eb"
  },
  {
    "url": "assets/js/21.3f6c8ac8.js",
    "revision": "add086a8dbee85b14253259c45cbb3b4"
  },
  {
    "url": "assets/js/22.b9a70315.js",
    "revision": "320a5a347b516bee0852e03642998426"
  },
  {
    "url": "assets/js/23.82cf7b17.js",
    "revision": "a5f31f4ed2ed64f5d8a5b46e54604330"
  },
  {
    "url": "assets/js/24.ffadd01d.js",
    "revision": "535a42833020dc39aaf09cce6e15e3f2"
  },
  {
    "url": "assets/js/25.0814b78f.js",
    "revision": "8fb2d206f68f543d2a0c218de764f393"
  },
  {
    "url": "assets/js/26.7b86892d.js",
    "revision": "f5ba6edd9456417370b2f6b646a44d41"
  },
  {
    "url": "assets/js/27.81c3a6e8.js",
    "revision": "910f0c4f8b54b41d95fccf4a80ba1abb"
  },
  {
    "url": "assets/js/28.acef8732.js",
    "revision": "a914aa27e37bcb3be1618dc8b05e4af3"
  },
  {
    "url": "assets/js/29.dcc462ba.js",
    "revision": "c1a20cc85f2af6ccc80616f5b62dcd7c"
  },
  {
    "url": "assets/js/3.c098dc85.js",
    "revision": "863e8f1b6278d51fb426c0f213bc1954"
  },
  {
    "url": "assets/js/30.697abe1f.js",
    "revision": "78c6898deb7c5a72d312ce70ed1c1774"
  },
  {
    "url": "assets/js/31.e3e8f009.js",
    "revision": "1734778f096d723b48940c4fb6f4818c"
  },
  {
    "url": "assets/js/32.fe78be52.js",
    "revision": "e3e16b7300b9249c4b7cdbfba720a383"
  },
  {
    "url": "assets/js/4.520eab72.js",
    "revision": "e6775686ac49c038afaee0b46aa13f51"
  },
  {
    "url": "assets/js/5.75434a36.js",
    "revision": "5f4bdeb33c172508ebe06aeb352f5410"
  },
  {
    "url": "assets/js/6.f67dffa3.js",
    "revision": "53e24e6634c9abfd7c83a1464b334eef"
  },
  {
    "url": "assets/js/7.62ec3e83.js",
    "revision": "94a153e2da66781b81867bd3f5177835"
  },
  {
    "url": "assets/js/8.b9a76b52.js",
    "revision": "50b0dd4770fc993258d2f2ee676d8e02"
  },
  {
    "url": "assets/js/9.320bdd75.js",
    "revision": "85ab2f043ddc28e104eb262dfefe6bb7"
  },
  {
    "url": "assets/js/app.b2c4a581.js",
    "revision": "f5779c0eb3d9eba337b2a706497fbde0"
  },
  {
    "url": "assets/js/vendors~docsearch.cdcb6b19.js",
    "revision": "98a40a050a2241279f9a780c3d63b30a"
  },
  {
    "url": "demo.html",
    "revision": "b350f7ccfff7afaa7c0d9394ec4b6681"
  },
  {
    "url": "en/about.html",
    "revision": "ca7959f1053c7407f8fc8dd13dd77478"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "41e7275038ed14ba1094dc90a2a4ccaa"
  },
  {
    "url": "en/guide/config.html",
    "revision": "c1502f76c482b2fdd18855ce71327237"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "7b85e8a0756c8e4c23733928ab55b8ba"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "2e0835c593444bffa032427c0fa0f28c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "bf57ae0b73f50a53dcb41eadf0cf2795"
  },
  {
    "url": "en/guide/page.html",
    "revision": "f756eb3fcee159392e7065bd6d586011"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "bd0a1dcc709aabaebdda97035c9f2b7a"
  },
  {
    "url": "en/index.html",
    "revision": "f3d203ab0c492a8363f07fc39ac97054"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "c4e21e6265b2b2e3bf053a853b10c1d8"
  },
  {
    "url": "guide/config.html",
    "revision": "ea133877a6a280fb46f337030e69a106"
  },
  {
    "url": "guide/faq.html",
    "revision": "edff4297e350293b09392fc074522a5a"
  },
  {
    "url": "guide/icon.html",
    "revision": "7e386985c0d5820df89ca9afe1186097"
  },
  {
    "url": "guide/index.html",
    "revision": "a8438a9055db84069f9ced366cde8773"
  },
  {
    "url": "guide/migrate.html",
    "revision": "d819bed70d1c3d094bf3f0a2964bf698"
  },
  {
    "url": "guide/page.html",
    "revision": "a639c0e02d7fe5da97975befcbf1f6c5"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "5703d10b752ca8cba9ed749be83b7987"
  },
  {
    "url": "images/index-preview.jpg",
    "revision": "7c5199d9f75605f77990cf7a984eaf0f"
  },
  {
    "url": "images/mickey-mouse.jpg",
    "revision": "c636a5e47f7a741a28a57ff22c98ceac"
  },
  {
    "url": "index.html",
    "revision": "6d4923eb6814335b76cdf54547f96b58"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
