(function() {
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


  document.addEventListener('DOMContentLoaded', function() {
    var themesSelectElement = document.getElementById("themes");
    themesSelectElement.addEventListener("change", function() {
      var themeName = this.value;
      insertCSS(themeName);
      // chrome.tabs.insertCSS(
      //   null,
      //   {file: themeFilePath},
      //   function() {
      //     console.log("simple theme loaded.");
      //   }
      // );
    });


    var applyButtonElement = document.getElementsByName("apply")[0];
    applyButtonElement.addEventListener("click", function() {
      window.close();
    });


    var restoreButtonElement = document.getElementsByName("restore")[0];
    restoreButtonElement.addEventListener("click", function() {
      window.close();
    });
  });
})();
