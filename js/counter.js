let getNumber = document.getElementById('count');
let getColor = document.getElementById('container');
let n = 0;
function start() {
    if(n === 100) {
        return n = 0;
    } else {
         n++;
       getNumber.innerHTML = n;
        getRandomColor();
    }
       
       
   
}
function getRandomColor() {
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return getColor.style.backgroundColor =  color;
}
