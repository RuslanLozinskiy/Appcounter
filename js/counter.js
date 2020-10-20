buttonStart.addEventListener('click', start);
function start() {
    let getCounterMiniS = document.getElementById("counterMiniS");
    let miniSec = 0;
    let time = setInterval(mSec, 100);
    function mSec() {
        if(miniSec === 10) {
            clearInterval(time);
            
        } else {
            miniSec++;
           getCounterMiniS.innerHTML = miniSec + 1;
        }
    }
    
}