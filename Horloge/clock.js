

setInterval(monHorloge, 1000);

const timeHour = document.querySelector('[time-hour]');
const timeMinute = document.querySelector('[time-minute]');
const timeSecond = document.querySelector('[time-second]');



function monHorloge() {

    const currentDate = new Date();

    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = (minutes + currentDate.getHours()) / 12;
    
    rotateHorloge(timeHour, hours);
    rotateHorloge(timeMinute, minutes);
    rotateHorloge(timeSecond, seconds);

}


function rotateHorloge(el , ticking){
    el.style.setProperty('--rotation' , ticking * 360);
    
}
monHorloge()



