var counter = document.querySelector(".counter")
var number = Number(counter.textContent);
function prev(){
    number--;
    counter.textContent = number;
    counter.classList.add("fade")
}
function reset(){
    number=0;
    counter.textContent = number;
    counter.classList.add("fade")
}
function next(){
    number++;
    counter.textContent= number;
    counter.classList.add("fade")
}
