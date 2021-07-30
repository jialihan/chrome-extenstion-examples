chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  }, // 1st param: the callback with request info
  {
    urls: [
      "*://*.evil.com/*",
      "*://*.zedo.com/*",
      "*://*.doubleclick.net/*",
      "*://*.adbrite.com/*"
    ]
  }, // 2nd param: filter object
  ["blocking"] // 3rd param
);
