chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>
{
  if (request == "explicar")
  {
    chrome.tabs.create({ url: "https://example.com/explicación" });
  }
})