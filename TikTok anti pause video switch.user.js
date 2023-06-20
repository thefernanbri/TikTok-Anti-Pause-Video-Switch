// ==UserScript==
// @name         TikTok anti pause video switch
// @version      1.0
// @description  TikTok anti pause video if tab is switched
// @author       TheFernanbri (Fernando Brito)
// @match        http://*.tiktok.com/*
// @match        https://*.tiktok.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiktok.com
// @grant        none
// ==/UserScript==

(function() {
   'use strict';
   window.addEventListener("visibilitychange", function(event) {
          event.stopImmediatePropagation();
   }, true);

})();