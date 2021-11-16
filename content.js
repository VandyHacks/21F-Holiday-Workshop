chrome.storage.sync.get(["replaceImages", "santaURL"], options => {
    if (options.replaceImages) {
        document.querySelectorAll('img').forEach(el => {
            const width = getComputedStyle(el).width;
            const height = getComputedStyle(el).height;
            el.style.width = width;
            el.style.height = height;
            el.src = options.santaURL;
            el.srcset = "";
        });
    }
});