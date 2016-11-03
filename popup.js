document.addEventListener('DOMContentLoaded', function() {
  var themesSelectElement = document.getElementById("themes");
  themesSelectElement.addEventListener("change", function() {
    var themeName = this.value;
    var themeFilePath = "themes/" + themeName + ".css";

    chrome.tabs.insertCSS(
      null,
      {file: themeFilePath},
      function() {
        console.log("simple theme loaded.");
      }
    );
  });
});
