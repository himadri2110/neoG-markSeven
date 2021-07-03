var textInput = document.querySelector('#txt-input');
var translateBtn = document.querySelector('#btn-translate');
var output = document.querySelector('#output');

var URL = "https://api.funtranslations.com/translate/yoda.json";

function getURL(text) {
    return URL + "?text=" + text;
}

function errorHandler(error) {
    alert("Error occured: " + error);
}

translateBtn.addEventListener("click", function() {

    var input = textInput.value;

    fetch(getURL(input))
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated;
    })
    .catch(errorHandler);
});