const clipBoard1 = new ClipboardJS("#copy-html");
const clipBoard2 = new ClipboardJS("#copy-python");
const clipBoard3 = new ClipboardJS("#copy-cpp");

const copyHtmlBtn = document.querySelector("#copy-html");
const copyPythonBtn = document.querySelector("#copy-python");
const copyCppBtn = document.querySelector("#copy-cpp");

copyHtmlBtn.addEventListener("click", () => {
    copyHtmlBtn.style.opacity = 0;
    setTimeout(() => {
        copyHtmlBtn.style.opacity = 1;
        copyHtmlBtn.innerHTML = "copied !";
    }, 500);

    setTimeout(() => {
        copyHtmlBtn.innerHTML = "copy";
    }, 5000);
});
copyPythonBtn.addEventListener("click", () => {
    copyPythonBtn.style.opacity = 0;
    setTimeout(() => {
        copyPythonBtn.style.opacity = 1;
        copyPythonBtn.innerHTML = "copied !";
    }, 500);

    setTimeout(() => {
        copyPythonBtn.innerHTML = "copy";
    }, 5000);
});
copyCppBtn.addEventListener("click", () => {
    copyCppBtn.style.opacity = 0;
    setTimeout(() => {
        copyCppBtn.style.opacity = 1;
        copyCppBtn.innerHTML = "copied !";
    }, 500);

    setTimeout(() => {
        copyCppBtn.innerHTML = "copy";
    }, 5000);
});
