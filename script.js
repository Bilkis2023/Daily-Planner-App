var timeblockEl = document.querySelector('#time');

var textAreaEl = document.querySelector('#text-area-14');
var saveButtonEl = $('.save-btn');
var today = dayjs();
var time = dayjs().format("D MMM YYYY [ , ] HH:mm:ss");
$("#currentDay").text(time);

// console.log(#textAreaEl);


var time = dayjs().format("HH");
console.log(time);


var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add-2");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("count");
counter.textContent = count;


// TODO: edit this to save the text area's inner text content
addButton.addEventListener("click", function () {
    count++;
    var recenttext = textAreaEl.textContent;
    localStorage.setItem("recenttext", recenttext);
});





function renderLastSave() {
    var text = localstorage.getItem("text");
    var time = localstorage.getItem("time");
    if (!time || !text) {
        return;
    }
}

saveButtonEl.click(function (e) {
    e.preventDefault()
    console.log("save button");
    var recenttext = textAreaEl.textContent;
    localStorage.setItem("", recenttext);
    console.log(e.target)
});










