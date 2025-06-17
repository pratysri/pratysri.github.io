// Digital Clock
function updateDigitalClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('digital-clock').textContent = timeString;
}

// Analog Clock
function createAnalogClock() {
    const clock = document.getElementById('analog-clock');
    clock.innerHTML = `
        <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="white" stroke="black" stroke-width="2"/>
            <g id="clock-hands">
                <line id="hour-hand" x1="100" y1="100" x2="100" y2="60" stroke="black" stroke-width="4"/>
                <line id="minute-hand" x1="100" y1="100" x2="100" y2="40" stroke="black" stroke-width="3"/>
                <line id="second-hand" x1="100" y1="100" x2="100" y2="30" stroke="red" stroke-width="1"/>
            </g>
        </svg>
    `;
}

function updateAnalogClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    hourHand.setAttribute('transform', `rotate(${hourDeg}, 100, 100)`);
    minuteHand.setAttribute('transform', `rotate(${minuteDeg}, 100, 100)`);
    secondHand.setAttribute('transform', `rotate(${secondDeg}, 100, 100)`);
}

// Initialize clocks
function initClocks() {
    createAnalogClock();
    updateDigitalClock();
    updateAnalogClock();
    setInterval(() => {
        updateDigitalClock();
        updateAnalogClock();
    }, 1000);
}

// Start the clocks when the page loads
document.addEventListener('DOMContentLoaded', initClocks); 