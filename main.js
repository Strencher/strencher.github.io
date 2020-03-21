function parseDOM(e) {
    var a = document.createElement("div");
    a.innerHTML = e;
    return a.childNodes[0];
}
function renderTooltip(e, text) {
            e.addEventListener("mouseenter", () => {
                let tooltip = document.createElement("div");
                let span = document.createElement("span");
                span.innerText = text
                tooltip.className = "tooltip";
                tooltip.style.height = "20px";
                tooltip.style.position =  "fixed";
                tooltip.style.pointerEvents = "none";
                tooltip.style.backgroundColor =  "black";
                tooltip.style.top = e.getBoundingClientRect().top-30 + "px";
                tooltip.style.left = e.getBoundingClientRect().right-50 + "px";
                tooltip.appendChild(span);
                document.body.appendChild(tooltip);
                let mouseLeave = () => {
                    tooltip.remove();
                    e.removeEventListener("mouseleave", mouseLeave);
                };
                e.addEventListener("mouseleave", mouseLeave);
            })
    }
this.observer = new MutationObserver(changes => {
    changes.forEach(e=> {
        e.addedNodes.forEach(r => {
            if(r && r.classList && r.classList.contains("simplebar-scroll-content")) {
                r.querySelectorAll('h4.tw-word-break-word').forEach(el => {
                    if(el) {
                        el.append(parseDOM(`<img width="17" height="17" class="CopyIcon icon" style="cursor: pointer; filter: invert(70%)" src="https://image.flaticon.com/icons/svg/1621/1621635.svg">`))
                        el.append(parseDOM(`<img width="17" height="17" class="LogIcon icon" src="https://image.flaticon.com/icons/svg/569/569837.svg"></img>`))
                        renderTooltip(el.querySelector(".CopyIcon"), "Copy !tokens ..");
                        renderTooltip(el.querySelector(".LogIcon"), "Open Logs")
                        el.querySelector(".CopyIcon").onclick = async function () {
                            await navigator.clipboard.writeText("!tokens add "+el.innerText+" 5000000")
                        }
                        el.querySelector(".LogIcon").onclick = async function () {
                            navigator.clipboard.writeText(el.innerText)
                            open("https://www.twitch.tv/popout/shoxx__/viewercard/"+el.innerText)
                        }
                    }
                })
            }
            if(r && r.classList && r.tagName == "H4" && r.classList.contains("tw-word-break-word")) {
                r.append(parseDOM(`<img width="17" height="17" class="CopyIcon icon" style="cursor: pointer; filter: invert(70%)" src="https://image.flaticon.com/icons/svg/1621/1621635.svg">`))
                r.append(parseDOM(`<img width="17" height="17" class="LogIcon icon" src="https://image.flaticon.com/icons/svg/569/569837.svg"></img>`))
                renderTooltip(r.querySelector(".CopyIcon"), "Copy !tokens ..");
                renderTooltip(r.querySelector(".LogIcon"), "Open Logs");
                r.querySelector(".CopyIcon").onclick = async function () {
                    await navigator.clipboard.writeText("!tokens add "+r.innerText+" 5000000")
                }
                r.querySelector(".LogIcon").onclick = function () {
                    navigator.clipboard.writeText(r.innerText)
                    open("https://www.twitch.tv/popout/shoxx__/viewercard/"+r.innerText)
                }
            }
            if(r && r.classList && r.classList.contains("tw-align-items-center")) {
                r.querySelectorAll("h4.tw-word-break-word").forEach(o => {
                    if(o) {
                        o.append(parseDOM(`<img width="17" height="17" class="CopyIcon icon" style="cursor: pointer; filter: invert(70%)" src="https://image.flaticon.com/icons/svg/1621/1621635.svg">`))
                        o.append(parseDOM(`<img width="17" height="17" class="LogIcon icon" src="https://image.flaticon.com/icons/svg/569/569837.svg"></img>`))
                        renderTooltip(o.querySelector(".CopyIcon"), "Copy !tokens .. ")
                        renderTooltip(o.querySelector(".LogIcon"), "Open Logs")
                        o.querySelector(".CopyIcon").onclick = async function () {
                            await navigator.clipboard.writeText("!tokens add "+o.innerText+" 5000000")
                        }
                        o.querySelector(".LogIcon").onclick = function () {
                            navigator.clipboard.writeText(o.innerText);
                            open("https://www.twitch.tv/popout/shoxx__/viewercard/"+o.innerText)
                            
                        }
                    }
                })
            }
        })
    })
})
this.observer.observe(document.body, {childList: true, subtree: true})
