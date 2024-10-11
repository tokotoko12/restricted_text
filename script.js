const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");
const maxCharacters = 250;

textarea.addEventListener("input", () => {
    const currentLength = textarea.value.length;

    counter.textContent = `${currentLength} / ${maxCharacters}`;

    if(currentLength > maxCharacters) {
        textarea.value = textarea.value.substring(0, maxCharacters);
        warning.style.display = "block";
        textarea.classList.add("error");
    } else {
        warning.style.display = "none";
        textarea.classList.remove("error");
    }
})