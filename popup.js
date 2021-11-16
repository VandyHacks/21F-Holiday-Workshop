window.onload = () => {
    chrome.storage.sync.get(["replaceImages", "santaURL"], options => {
        document.getElementById("replaceImages").checked = options.replaceImages;
        document.getElementById("santaURL").value = options.santaURL;
    });
}

function save() {
    chrome.storage.sync.set({
        replaceImages: document.getElementById("replaceImages").checked,
        santaURL: document.getElementById("santaURL").value
    }, () => alert("Saved!"));
}

document.getElementById("save").addEventListener("click", save);