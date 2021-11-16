console.log("Hello, world!")

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(null, {file: "./content.js"}, () => console.log("content.js injected"));
    }
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        "replaceImages": true,
        "santaURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Jonathan_G_Meath_portrays_Santa_Claus.jpg/171px-Jonathan_G_Meath_portrays_Santa_Claus.jpg",
    });
});
