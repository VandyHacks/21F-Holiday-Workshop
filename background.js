console.log("Hello, world!")

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.executeScript(null, {file: "./content.js"}, () => console.log("content.js injected"));
});
