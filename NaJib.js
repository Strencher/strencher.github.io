var NaJib = {
    injectCSS: function (css) {
        let element = document.createElement("style");
        element.innerHTML = css;
        element.type = "test/css";
        document.head.appendChild(element);
    }
}
