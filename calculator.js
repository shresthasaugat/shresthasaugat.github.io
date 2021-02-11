const $ = el => document.querySelector(el);

let output = $("#output-value");
let keyboard = $("#keyboard");
keyboard.onclick = e => {
    if (e.target.className === "number") {

        setOutput(e.target.textContent);

    } else if (e.target.textContent === "C") {
        clearOutput();

    }
    else if (e.target.textContent === "CE") {
        clearOutput();
    } else if (e.target.className === "operator" && e.target.textContent !== "=") {
        let operator = e.target.textContent;
        setOutput(operator);
    } else if (e.target.className === "operator" && e.target.textContent === "=") {
        try {
            let res = eval(getOutput())
            clearOutput();
            finalresult(res);
        } catch {
            clearOutput()
            setOutput("Error")
        }
    }
}
function setOutput(value) {
    output.textContent += value;
}
function clearOutput() {
    output.textContent = null;
}
function getOutput() {
    return output.textContent;
}
function finalresult(result) {
    output.textContent = result;

}