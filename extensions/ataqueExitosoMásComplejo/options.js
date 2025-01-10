function init()
{
  let element = document.getElementById("message");
  chrome.storage.local.get("message", result => element.value = result.message);
  element.addEventListener("input", () =>
  {
    chrome.storage.local.set({ message: element.value });
  });
}

window.addEventListener("load", init, { once: true });