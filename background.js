console.log("Hello, world!")

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(null, {file: "./content.js"}, () => console.log("content.js injected"));
    }
});

//TODO: Handle get/set for options, handle get/set for popup