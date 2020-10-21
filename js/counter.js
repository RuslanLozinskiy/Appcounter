let getNumber = document.getElementById('container');
let n = 0;
function start() {
    if(n === 100) {
        return n = 0;
    } else {
         n++;
       getNumber.innerHTML = n;
        getNumber.style.fontSize = n;
    }
       
       
   
}