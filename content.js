document.querySelectorAll('img').forEach(el => {
    el.style.width = getComputedStyle(el).width;
    el.src = 'https://upload.wikimedia.org/wikipedia/commons/4/49/Jonathan_G_Meath_portrays_Santa_Claus.jpg';
});