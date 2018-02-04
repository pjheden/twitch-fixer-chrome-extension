// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {
    file: "jquery-3.3.1.min.js"
  }, function() {
    chrome.tabs.executeScript(null, {
      file: "inject.js"
    });
  });
});
