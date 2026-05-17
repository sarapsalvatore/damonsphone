function updateTime() {
    let now = new Date();

    // TIME (24h format)
    let hours = now.getHours();
    let minutes = now.getMinutes();

    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    document.getElementById('time').innerText = hours + ':' + minutes;

    // DATE (EN format)
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    let dayName = days[now.getDay()];
    let monthName = months[now.getMonth()];
    let dayNumber = now.getDate();

    document.getElementById('date').innerText =
        `${dayName}, ${monthName} ${dayNumber}`;
}

setInterval(updateTime, 1000);
updateTime();

let flashlight = false;

function toggleFlashlight() {
    flashlight = !flashlight;

    if (flashlight) {
        document.body.style.background = 'white';
        document.body.style.transition = '0.3s';
    } else {
        document.body.style.background = 'black';
    }
}

function openCamera() {
    alert('📷 Camera opened (fake UI coming next step)');
}

/* BATTERY SIMULATION */
let battery = 85;

setInterval(() => {
    battery--;

    if (battery <= 0) {
        battery = 100;
    }

    let el = document.getElementById('battery');
    if (el) {
        el.innerText = battery + '%';
    }
}, 6000);

let code = '';
const correct = '000000';

/* SWIPE UP */
function swipeUp() {
    document.getElementById('swipeScreen').style.display = 'none';
    document.getElementById('pinScreen').style.display = 'flex';
}

/* NUMBERS */
function press(num) {
    if (code.length >= 6) return;

    code += num;
    updateDots();

    if (code.length === 6) {
        check();
    }
}

/* DOTS UPDATE */
function updateDots() {
    let dots = document.querySelectorAll('.dot');

    dots.forEach((d, i) => {
        d.classList.remove('filled');
        if (i < code.length) d.classList.add('filled');
    });
}

/* CHECK CODE */
function check() {
    if (code === correct) {
        document.getElementById('pinScreen').style.display = 'none';
        document.getElementById('homeScreen').style.display = 'block';
    } else {
        alert('Wrong code');
        code = '';
        updateDots();
    }
}

/* CANCEL = delete last number */
function cancel() {
    code = code.slice(0, -1);
    updateDots();
}

/* EMERGENCY */
function emergency() {
    alert(
        'There is no real emergency call functionality. What did you think...',
    );
}
