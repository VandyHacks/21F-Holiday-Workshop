document.querySelectorAll('img').forEach(el => {
    let width = getComputedStyle(el).width;
    let height = getComputedStyle(el).height;
    if (width > height) {
        el.style.width = width;
        el.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Xmas_2009.JPG/320px-Xmas_2009.JPG';
    } else {
        el.style.height = height;
        el.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Jonathan_G_Meath_portrays_Santa_Claus.jpg/171px-Jonathan_G_Meath_portrays_Santa_Claus.jpg';
    }
});

const findAndReplace = {
    "of": "replace",
    "anchor": "replace",
		// add more here!
}

let html = document.querySelector("body").innerHTML;
for (let find in findAndReplace) {
    html = html.replaceAll(find, findAndReplace[find]);
}

document.querySelector("body").innerHTML = html;