function parseDOM(e) {
    var a = document.createElement("div");
    a.innerHTML = e;
    return a.childNodes[0];
}

this.observer = new MutationObserver(changes => {
    changes.forEach(e=> {
        e.addedNodes.forEach(r => {
            if(r && r.classList && r.classList.contains("simplebar-scroll-content")) {
                r.querySelectorAll('h4.tw-word-break-word').forEach(el => {
                    if(el) {
                        el.append(parseDOM(`<img width="17" height="17" class="CopyIcon icon" style="cursor: pointer; filter: invert(70%)" src="https://image.flaticon.com/icons/svg/1621/1621635.svg">`))
                        el.append(parseDOM(`<img width="17" height="17" class="LogIcon icon" src="https://image.flaticon.com/icons/svg/569/569837.svg"></img>`))
                        el.querySelector(".CopyIcon").onclick = async function () {
                            await navigator.clipboard.writeText("!tokens add "+el.innerText+" 5000000")
                        }
                        el.querySelector(".LogIcon").onclick = function () {
                            open("https://www.twitch.tv/popout/shoxx__/viewercard/"+el.innerText)
                        }
                    }
                })
            }
            if(r && r.classList && r.tagName == "H4" && r.classList.contains("tw-word-break-word")) {
                r.append(parseDOM(`<img width="17" height="17" class="CopyIcon icon" style="cursor: pointer; filter: invert(70%)" src="https://image.flaticon.com/icons/svg/1621/1621635.svg">`))
                r.append(parseDOM(`<img width="17" height="17" class="LogIcon icon" src="https://image.flaticon.com/icons/svg/569/569837.svg"></img>`))
                r.querySelector(".CopyIcon").onclick = async function () {
                    await navigator.clipboard.writeText("!tokens add "+r.innerText+" 5000000")
                }
                r.querySelector(".LogIcon").onclick = function () {
                    open("https://www.twitch.tv/popout/shoxx__/viewercard/"+r.innerText)
                }
            }
            if(r && r.classList && r.classList.contains("tw-align-items-center")) {
                r.querySelectorAll("h4.tw-word-break-word").forEach(o => {
                    if(o) {
                        o.append(parseDOM(`<img width="17" height="17" class="CopyIcon icon" style="cursor: pointer; filter: invert(70%)" src="https://image.flaticon.com/icons/svg/1621/1621635.svg">`))
                        o.append(parseDOM(`<img width="17" height="17" class="LogIcon icon" src="https://image.flaticon.com/icons/svg/569/569837.svg"></img>`))
                        o.querySelector(".CopyIcon").onclick = async function () {
                            await navigator.clipboard.writeText("!tokens add "+o.innerText+" 5000000")
                        }
                        o.querySelector(".LogIcon").onclick = function () {
                            open("https://www.twitch.tv/popout/shoxx__/viewercard/"+o.innerText)
                        }
                    }
                })
            }
        })
    })
})
this.observer.observe(document.body, {childList: true, subtree: true})
