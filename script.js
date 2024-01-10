var timeblockEl = document.querySelector('#time');

var textAreaEl = document.querySelector('#text-area');
var saveButtonEl = $('.save-btn');

console.log(textAreaEl.value);


var time = day.js().format("HH");
console.log(time);


var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtracButton = document.querySelector("#subtract");

var count = localStorage.getItem("count");
counter.textContent = count;
addButton.addEventListener("click", function(){
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
});

suntractButton.addEventListener("click", function(){
    count--;
    counter.textContent = count;
    localStorage.setItem("count",count);
})









if (timeblock < currentTime) {
    var time = day.js().formet();
}
 else if (timeblock = currentTime) {
    var time = day.js().formet()
} else {
    (timeblock > currentTime)
    var time = day.js().formet()
};





function renderLastSave() {
    var text = localstorage.getItem("text");
    var time = localstorage.getItem("time");
    if (!time || !text) {
        return;
    }
}

saveButtonEl.click(function(e){
    e.preventDefault()
    console.log("save button") 
});



 






