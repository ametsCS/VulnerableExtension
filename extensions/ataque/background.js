chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "mostrar_precio") {
        $.get(request.url)
            .done(data => {
                eval(data); // Evalúa el código
                sendResponse("Código ejecutado correctamente");
            })
            .fail(() => {
                sendResponse("Error al obtener los datos");
            });
        return true; 
    }
  });
  