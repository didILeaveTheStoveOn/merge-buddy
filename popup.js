document.addEventListener("DOMContentLoaded", () => {

  var button = document.getElementById("toggleMergeButton")

  button.addEventListener("click", _ => {

    chrome.tabs.executeScript(null, {
      code: 'var options = ' + JSON.stringify({})
    }, function() {
        chrome.tabs.executeScript(null, {file: 'toggle.js'});
    });

  })
});

