/**
 * ダイアログの実装
 */
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

/**
 * モバイルメニューの実装
 */
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
