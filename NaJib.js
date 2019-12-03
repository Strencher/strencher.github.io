var NaJib = {
    injectCSS: function (id, css) {
        let element = document.createElement("style");
        element.innerHTML = css;
        element.type = "text/css";
        element.id = id;
        document.head.appendChild(element);
    },
    clearCSS: function (id) {
        try {
        id.remove()
        }
        catch(err) {
        console.error(`${err.message}`);
        }
    }
}
