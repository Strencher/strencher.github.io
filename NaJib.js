var NaJib = {
    version: "0.0.3",
    injectCSS: function (id, css) {
        let element = document.createElement("style");
        element.innerHTML = css;
        element.type = "text/css";
        element.id = id;
        document.head.appendChild(element);
    },
    clearCSS: function (id) {
        let styleid = document.getElementById(id);
        if (!styleid) {
            console.error(`[NaiJib] Please enter a valid id!`)
        }
        if (styleid) {
            styleid.remove();
        }
    },
    injectScript: function (id, script) {
        let element = document.createElement("script");
        element.innerHTML = script;
        element.type = "text/javascript";
        element.id = id;
        document.head.appendChild(element);
    },
    clearScript: function (id) {
        let scriptid = document.getElementById(id);
        if (!scriptid) {
            console.error(`[NaJib] Please enter a valid id!`)
        }
        if (scriptid) {
            scriptid.remove();
        }
    },
    injectCSSafter: function (id, css, delay) {
        setTimeout(() => {
            let element = document.createElement("style");
            element.innerHTML = css;
            element.id = id;
            document.head.appendChild(element);
        }, delay);
    },
    clearCSSafter: function (id, delay) {
        setTimeout(() => {
            let styleid = document.getElementById(id);
            if (!styleid) {
                console.error(`[NaJib] Please enter a valid id!`)
            }
            if (styleid) {
                styleid.remove();
            }
        }, delay);
    }
}
var Strencher = NaJib; 
