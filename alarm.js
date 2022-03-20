setInterval(fank, 1000);

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