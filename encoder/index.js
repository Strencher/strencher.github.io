function $(e){return document.querySelector(e);};
const input = $("input");
const textarea = $("textarea");
const button = $("#submit");
button.addEventListener("click", ()=>{
    try {
        textarea.value = atob(input.value);
    } catch (error) {
        console.log(error)
        textarea.value = "Der Text zum Encoden ist nicht richtig codiert!";
    }
})