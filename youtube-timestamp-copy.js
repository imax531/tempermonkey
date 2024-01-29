// ==UserScript==
// @name         Youbue timestamp copy
// @namespace    https://roytmax.com/
// @version      2024-01-29
// @description  Copy youtube current video timestamp to clipboard by pressing N
// @author       Max
// @match        https://*.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hibbard.eu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener("keydown", (event) => {
        if (event.isComposing || event.code === 'KeyN') {
            const currentTimestamp = document.getElementsByClassName('ytp-time-current')[0].innerHTML;
            navigator.clipboard.writeText(currentTimestamp);
        }
    })
})();
