var min =0 
var sec =0 
var msec =0 
var interval

var msech=document.getElementById("msec")
var sech=document.getElementById("sec")
var minh=document.getElementById("min")
var timervalue=document.getElementById('fixed')




function timer(){
   
    msec++
    msech.innerHTML=msec


    if (msec>=100){
        msec=0
        sec++
        sech.innerHTML=sec
    }

    if (sec>=60){
        sec=0
        min++
        minh.innerHTML=min
    }

    console.log(sec)
}


function start(){
    interval= setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
}
 
function reset(){
    clearInterval(interval)
    min=0
    sec=0
    msec=0
    minh.innerHTML=min
    sech.innerHTML=sec
    msech.innerHTML=msec
} 

var pause=false
var auto=false

document.addEventListener('keyup', event => {
    
    if (auto==false){
        if (event.code === 'Space') {
        
            if (msec==0)
            {start()}
    
            else if (msec!=0 && pause==true)
            {   start()
                pause=false}
    
    
            else
            {   stop()
                pause=true
            }
        }
    
        else if (event.code=='Enter' )
        {   reset()
            pause=false
    
        }
    }

    else if (auto==true){

    }
   
})




function settimer(){

    var mystop=parseInt(timervalue.value)
    start()

    
}