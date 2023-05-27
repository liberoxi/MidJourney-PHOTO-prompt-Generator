chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.prompts && request.prompts.length > 0) {
    const prompts = request.prompts;
    sendResponse({farewell: 'Prompts received.'});
    chrome.storage.local.set({prompts: prompts}, function() {
      console.log('Prompts saved.');
    });
  } else if (request.getPrompts) {
    chrome.storage.local.get(['prompts'], function(result) {
      if (result && result.prompts) {
        sendResponse({prompts: result.prompts});
      } else {
        sendResponse({});
      }
    });
  }
  return true;
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.runtime.sendMessage({getPrompts: true}, function(response) {
    const prompts = response.prompts || [];
    const popupWindow = window.open("", "prompts", "width=400,height=400");
    popupWindow.document.write(`<html><head><title>Prompts</title><style>body {font-family: Arial, sans-serif
