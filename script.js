
// setInterval(() => {
//     var d1=new Date()
//     var hr=d1.getHours()
//     var min=d1.getMinutes()
//     var sec=d1.getSeconds()
//     document.getElementById('time').innerHTML=`${hr} : ${min} :${sec}`
// }, 1000);


var min=0
var sec=0
var ms=0
var stp;
function start(){
   
    stp=setInterval(() => {
        ms=ms+1
        if(ms==100){
            ms=0
            sec=sec+1
        }
        if(sec==60){
            sec=0
            min=min+1
        }
        document.getElementById('time').innerHTML=`${min}:${sec}:${ms}`
    },100);
}

// stop javascript
function stop(){
    clearTimeout(stp)
}

// reset javascript

function reset(){
    min=0;
    sec=0;
    ms=0
    document.getElementById('time').innerHTML=`${min}:${sec}:${ms}`
    // 
//    stop()
}


function lap(){
    var h1=document.createElement('h1')
    h1.innerHTML=`${min}:${sec}:${ms}`

    document.getElementById('alllap').appendChild(h1)
}

// // lap clear function

function clearlap(){
    document.getElementById('alllap').innerHTML="  <h1>Lap will Display Here</h1>"
}



