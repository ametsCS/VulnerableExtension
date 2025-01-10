function init()
{
  let element = document.getElementById("mensaje");
  chrome.storage.local.get("mensaje", result => element.value = result.mensaje);
  element.addEventListener("input", () =>
  {
    chrome.storage.local.set({ mensaje: element.value });
  });
}

window.addEventListener("load", init, { once: true });