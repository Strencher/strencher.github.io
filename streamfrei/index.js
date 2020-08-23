function rel() {
    document.getElementByAttribute("con", "timestamp").innerText = new Date().toLocaleString();
}
["title", "desc", "footer"].forEach(action => {
    const el = document.getElementsByClassName(action)[0];
    const el2 = document.getElementByAttribute("con", action);
    if(!el) return;
    el.value = (localStorage.getItem(action) || action);
    el2.innerHTML = markdown.makeHtml(el.value);
    el.addEventListener("change", e => {
        el2.innerHTML = markdown.makeHtml(e.target.value);
        twemoji.parse(el2);
        rel();
        localStorage.setItem(action, e.target.value);
    })
});