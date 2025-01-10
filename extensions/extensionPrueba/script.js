chrome.storage.local.get("mensaje", result =>
{
  let div = document.createElement("div");
  div.innerHTML = result.mensaje + " <button>Explicar</button>";
  div.querySelector("button").addEventListener("click", () =>
  {
    chrome.runtime.sendMessage("explicar");
  });
  document.body.appendChild(div);
});