var NaJib = {
    injectCSS: function (id, css) {
        let element = document.createElement("style");
        element.innerHTML = css;
        element.type = "text/css";
        element.id = id;
        document.head.appendChild(element);
    }
}
