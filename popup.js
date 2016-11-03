document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.insertCSS(
    null,
    {file: "themes/custom.css"},
    function() {
      console.log("simple theme loaded.");
    }
  );
});
