let count = 0;
let countContainer = document.getElementById("pCount");
let saveEl = document.getElementById("save-el");
console.log(saveEl)
function increment()
{
    count = count + 1;
    console.log(count);
    countContainer.innerText = count;
    //document.getElementById("increment-btn").innerText = count;

 //console.log("clicked");
}
//document.getElementById("increment-btn").innerText = 8;
function decrement()
{
    count = count - 1;
    console.log(count);
    countContainer.innerText = count;
}
function save()
{
     let countVar = count + " - " ;
    saveEl.textContent += countVar;
    countContainer.innerText = 0;
    count = 0;
    console.log(countVar)
    console.log(count)
}
// let saveEl = document.getElementById("save-el");
// console.log(saveEl)