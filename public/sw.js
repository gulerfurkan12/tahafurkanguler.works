if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/0c428ae2-75fa80f54457acd5.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/1bfc9850-36f25ac70a401fed.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/371-a88854b46af141ec.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/framework-0f8b31729833af61.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/main-5d26e52efca329e9.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/pages/_app-97e64f4d8b786f09.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/pages/components/icons/Logo-d2ec3dbc3926882f.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/pages/components/icons/Wave-eb5b89d9f10db640.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/pages/components/icons/Wave2-5efa292b33dc8e97.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/pages/index-416464b8fbe8c7c2.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/chunks/webpack-514908bffb652963.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/css/3c77ff892f1744d4.css",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/eXsEDWFJjVoswyf7ryv0w/_buildManifest.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/eXsEDWFJjVoswyf7ryv0w/_middlewareManifest.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/_next/static/eXsEDWFJjVoswyf7ryv0w/_ssgManifest.js",revision:"eXsEDWFJjVoswyf7ryv0w"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/images/%75.svg",revision:"a31e0549f9b5caf1ab2be1f01c405448"},{url:"/images/%90.svg",revision:"c6014b1baa0d1de8cd86df805c99746c"},{url:"/images/85%.svg",revision:"c862f0c8ac0f0997de3efb3e87dbdafa"},{url:"/images/Cone.png",revision:"87e26a3bb444d65c53061609b684af1f"},{url:"/images/Cube.png",revision:"9a4d90cbd4cb32eb0503b0ab3b4aa821"},{url:"/images/Cylinder.png",revision:"c4d308b6cb8ace569eebef24a8372954"},{url:"/images/Ellipse.png",revision:"6a4c0f61bb260ca216d94bcd20be413a"},{url:"/images/Helix.png",revision:"dc99e01279afe15eda742fa3e5f2c729"},{url:"/images/Pyramid.png",revision:"a708f51b43e84e17cb3364b8f7ac4631"},{url:"/images/Sphere.png",revision:"87ef5e7b84f057353cba45b5d248e2ea"},{url:"/images/TFG-logo.svg",revision:"19957001df2a300fa71c47dfe67b6fe3"},{url:"/images/Thorus.png",revision:"b0f9405796e55ee915807517bb940628"},{url:"/images/apple-icon-180x180.png",revision:"79fdf6c6d3e018aa8596ae67d4434c8f"},{url:"/images/atlas-mockup-gray.jpg",revision:"04a63cf994a602d3af976308e3a043db"},{url:"/images/b-branding.png",revision:"213663929dc7e7963ba80d3e2ab8092d"},{url:"/images/branding.png",revision:"d8eac527ebaf95eb84d0e6c8e4e19b8d"},{url:"/images/favicon-16x16.png",revision:"7fcaefedccb2a0668aa13ed2af196d46"},{url:"/images/favicon-32x32.png",revision:"ee78ad96e3dc7de01277c255abac965b"},{url:"/images/goose-mockup-gray.jpg",revision:"1daed60cae2259b3abaafbd2aeddc308"},{url:"/images/hello.png",revision:"ee14a67df21fe486db705bce16cbffa6"},{url:"/images/logom.png",revision:"d60e45e60ca9aca2cf33e59274be3706"},{url:"/images/market.png",revision:"b02186c2559f3ab7502241a18426ce29"},{url:"/images/profile-pic.png",revision:"447925c19134648e57f0e4c202898bdf"},{url:"/images/purple-web-design-service.png",revision:"45e42406d2433accd9134c2134d3520a"},{url:"/images/seozonmockup.jpg",revision:"481b2b7d8bfbec806302f320366d28d2"},{url:"/images/services-rocket.png",revision:"e203afafaf3ec2265f6b6143ba641db2"},{url:"/images/taha-furkan-guler.png",revision:"b5bc103236ab9829727bf609bf2f66d8"},{url:"/images/wave-2.svg",revision:"5286ea1516ffa7b07b96ac3ccceed363"},{url:"/images/wave-3.svg",revision:"24fd4693a15d0b78b7cbe493612d68ea"},{url:"/images/wave.svg",revision:"be12df0ba56c63d79b11e457a9679601"},{url:"/images/web-design-service.png",revision:"00524dab400e8822996a7b25a2662e51"},{url:"/images/wpeksper-mocckup.jpg",revision:"212b86f862bab24658cb57812d82b6f4"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
