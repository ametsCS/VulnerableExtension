chrome.runtime.sendMessage({
  type: "mostrar_precio",
  url: "http://localhost:8080/precio2.json"
}, response => alert("El precio es: " + response));
