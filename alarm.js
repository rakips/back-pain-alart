
const min = minToMsec(1)
console.log(min);


function takeMinute() {
    const inputMinute = document.getElementById('input-minute');
    const inputMinuteText = inputMinute.value;
    const lastInputMinute = parseFloat(inputMinuteText);
    inputMinute.value = ' ';


    // mili second to minute converting function 
    function minToMsec(sec) {
        const msec = sec * 1000;
        const msecToMin = msec * 60;
        return msecToMin;
    }


    const minute = minToMsec(lastInputMinute);
    return minute;

}

const alarmTime = takeMinute();






setInterval(fank, !{ alarmTime });

function fank() {

    const time = document.getElementById('time');
    const timeText = time.innerText;
    let previousTimes = parseInt(timeText);

    let newTimes = previousTimes + 1;
    time.innerText = newTimes;
    if (newTimes === 30) {
        time.innerText = 0;
        const audio = document.getElementById('audio');
        audio.play();
    }
}