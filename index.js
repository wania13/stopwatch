var min =0 
var sec =0 
var msec =0 
var interval
var mystop

var msech=document.getElementById("msec")
var sech=document.getElementById("sec")
var minh=document.getElementById("min")
var timervalue=document.getElementById('fixed')




function timer(){
   
    msec++
    msech.innerHTML=msec

    
    if (msec>99){
        msec=0
        sec++
        sech.innerHTML=sec
        msech.innerHTML=msec

        if (sec==mystop){
            clearInterval(interval) 
        } 
    
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


document.addEventListener('keyup', event => {
        
        
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
        
            else if (event.code=='Enter')
            {   reset()
                pause=false
        
            }
    
})



function settimer(){

        reset()
        mystop=parseInt(timervalue.value)
        function fixedtimerfun(){ interval= setInterval(timer,10)}

        if (!isNaN(mystop)){
            setTimeout(fixedtimerfun,mystop)
        }
        
        
}