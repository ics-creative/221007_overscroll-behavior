/* empty css       */(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const content = document.querySelector(".js-dialog-content");
const open = document.querySelector(".js-dialog-open");
const close = document.querySelector(".js-dialog-close");
open.addEventListener("click", () => {
  if (typeof content.showModal === "function") {
    content.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});
close.addEventListener("click", () => {
  content.close();
  document.body.classList.remove("is-hideScrollbar");
});
const menuContent = document.querySelector(".js-menuDialog-content");
const menuOpen = document.querySelector(".js-menuDialog-open");
const menuClose = document.querySelector(".js-menuDialog-close");
menuOpen.addEventListener("click", () => {
  if (typeof menuContent.showModal === "function") {
    menuContent.showModal();
    document.body.classList.add("is-hideScrollbar");
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});
menuClose.addEventListener("click", () => {
  menuContent.close();
  document.body.classList.remove("is-hideScrollbar");
});
