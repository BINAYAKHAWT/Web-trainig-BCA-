const timeleft = document.querySelector('.time-left');
const timerButtons = document.querySelectorAll  ('[data-time]');
const ChangeTime = document.querySelector ('.end-time');
let timerInterval;


function timer(second){
    const now = Date.now();
    const then = now + second * 1000;

    displayTimeleft (second);
    displayComebackTime(then);

    timerInterval = setInterval(function(){
        
        const secondsleft = Math.round  ((then - Date.now()) / 1000);
        if (secondsleft <= 0){
            clearInterval(timer);
        }

        displayTimeleft(secondsleft);

    },1000);//Every second interval

}
function displayTimeleft (secondsleft){
    let minutes = Math.floor(secondsleft/ 60);
    let seconds = secondsleft % 60 ;
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }

    
    timeleft.textContent = minutes + ":" + seconds;


}

function displayComebackTime(timestamp){
    const date = new Date(timestamp);
    const hour = date.getHours();
    const minute = date.getMinutes();
    console.log(hour , minute);
    ChangeTime.innerHTML = "Will Be back in "+ hour +" : "+ minute 
}




timerButtons.forEach(function(button){
    button.addEventListener('click', function(event){
        clearInterval(timerInterval);
        const minutes = event.target.getAttribute('data-time');
        const seconds = minutes * 60;
        
        timer(seconds);
    });
})

