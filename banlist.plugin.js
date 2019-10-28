//META{"name":"banList"}*//

class banList {
    getName() {return "BanList";}
    getAuthor() {return "Strencher";}
    getDescription() {return "Hilft dir leute in die #gebannte-viewer einzutragen";}
    getVersion() {return "0.0.3 b-1";}

    load() {
	    ZLibrary.PluginUpdater.checkForUpdate("BanList", this.getVersion(), "https://strencher.github.io/banlist.plugin.js");
        }
    unload() {}
    onSwitch() {
        
        if (ZLibrary.DiscordModules.SelectedChannelStore.getChannelId() === "393016726985637898" ) {
            this.titleButton();
        } else {
            return;
        }
        
        
        }
    start() { 
       
        if (ZLibrary.DiscordModules.SelectedChannelStore.getChannelId() === "393016726985637898" ) {
            this.titleButton();
        } else {
            return;
        }
    }
    
    onclickEvent() {
        
        ZLibrary.Toasts.show("Text wurde erfolgreich eingefügt.", {type: ZLibrary.Toasts.ToastTypes.success});
        let area = document.getElementsByClassName("textArea-2Spzkt")[0];
        let test = '**[BAN]** | | gebannt von **Strencher**';
        area.value = test;
    }
    titleButton() {
        let bar = document.getElementsByClassName("buttons-205you")[0];
        let Icon = document.createElement("img");
        let button = document.createElement("button");
        let buttonInner = document.createElement("div");
        button.setAttribute("class", "banList buttonWrapper-1ZmCpA da-buttonWrapper button-38aScr da-button lookBlank-3eh9lL da-lookBlank colorBrand-3pXr91 da-colorBrand grow-q77ONN da-grow normal");
        buttonInner.setAttribute("style", "background-color: transparent !important;");
        button.setAttribute("style", "background-color: transparent !important;");
        buttonInner.setAttribute("style", "margin-left: 2px !important;");
        Icon.setAttribute("style", "transform: scale(1) !important;");
        Icon.setAttribute("width", "22");
		Icon.setAttribute("height", "22");
        Icon.onmouseover = () => {
            Icon.setAttribute("style", "transform: scale(1.2) !important;");
          }
          Icon.onmouseout = () => {
            Icon.setAttribute("style", "transform: scale(1) !important;");
          }
        Icon.setAttribute("src", "https://cdn.discordapp.com/emojis/494828959532449802.png?v=1");
        button.onclick = () => {
                this.onclickEvent();
                
        }
        bar.insertBefore(button, bar.firstChild);
        buttonInner.appendChild(Icon);
        button.appendChild(buttonInner);





    }


    stop() {return}
}
