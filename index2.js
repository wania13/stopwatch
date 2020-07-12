var min =0 
var sec =0 
var msec =0 

var fmin =0 
var fsec =0 
var fmsec =0 

var interval
var finterval
var pause=false

var mystop
var auto=false

var msech=document.getElementById("msec")
var sech=document.getElementById("sec")
var minh=document.getElementById("min")
var setting=document.getElementById("mybutton")

var startbut=document.getElementById("startbut")
var stopbut=document.getElementById("stopbut")
var resetbut=document.getElementById("resetbut")

var timervalue=document.getElementById('fixed')

var myMusic= document.getElementById("music");
 


function timer(){
   
    msec++
    msech.innerHTML=msec

    
    if (msec>99){
        msec=0
        sec++
        sech.innerHTML=sec
        msech.innerHTML=msec
    }

    if (sec>59){
        sec=0
        min++
        minh.innerHTML=min
        sech.innerHTML=msec
    }

}


function start(){
    interval= setInterval(timer,10)
    startbut.disabled=true
   
}

function stop(){
    clearInterval(interval)
    startbut.disabled=false
}
 
function reset(){
    clearInterval(interval)
    min=0
    sec=0
    msec=0
    minh.innerHTML=min
    sech.innerHTML=sec
    msech.innerHTML=msec
    startbut.disabled=false
} 


 document.addEventListener('keyup', event => {

        if (auto===true){
            return false
        }

        else{
            if (event.code === 'Space') {
        
                if (msec==0)
                {   min=0
                    sec=0
                    minh.innerHTML=min
                    sech.innerHTML=sec
                    start()
                }
    
                else if (msec!=0 && pause==true)
                {   start()
                    pause=false}
    
    
                else
                {   stop()
                    pause=true
                }
            }
    
            else if (event.code=='Enter')
            {   reset()
                pause=false
    
            }
        }
        

})






function fixedtimer(){
   
    fmsec++
    msech.innerHTML=fmsec

    
    if (fmsec>99){
        fmsec=0
        fsec++
        sech.innerHTML=fsec
        msech.innerHTML=fmsec
        if (fsec==mystop){
            clearInterval(finterval) 
            fmin =0 
            fsec =0 
            fmsec =0 
            min =0 
            sec =0 
            msec =0 
            auto=false
            setting.disabled=false
            startbut.disabled=false
            stopbut.disabled=false
            resetbut.disabled=false
            myMusic.play();
            
      } 
    }

    if (fsec>59){
        fsec=0
        fmin++
        minh.innerHTML=fmin
        sech.innerHTML=fmsec
    }

}



function settimer(){

    reset()
    auto=true
    setting.disabled=true
    startbut.disabled=true
    stopbut.disabled=true
    resetbut.disabled=true
    mystop=parseInt(timervalue.value)
    function fixedtimerfun(){ finterval= setInterval(fixedtimer,10)}
    if (!isNaN(mystop)){
        setTimeout(fixedtimerfun,mystop)
    }

}

