var linkElementId = "jupyter-notebook-custom-css";


function insertCSS(themeName) {
  var themeFilePath = "themes/" + themeName + ".css";

  var linkElement = document.createElement("link");

  linkElement.href = chrome.extension.getURL(themeFilePath);
  linkElement.id = linkElementId;
  linkElement.type = "text/css";
  linkElement.rel = "stylesheet";

  document.getElementsByTagName("head")[0].appendChild(linkElement);
}


function removeCSS() {
  var linkElement = document.getElementById(linkElementId);
  linkElement && linkElement.parentNode.removeChild(linkElement);
}


function onExtensionMessage(request) {
  var themeName = request.theme;
  insertCSS(themeName);
}


function initContentScript() {
  chrome.extension.onMessage.addListener(onExtensionMessage);
}


initContentScript();
