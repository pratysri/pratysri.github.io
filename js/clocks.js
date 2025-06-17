function updateClocks() {
    const now = new Date();
    
    const digitalClock = document.getElementById('digital-clock');
    if (digitalClock) {
        digitalClock.textContent = now.toLocaleTimeString();
    }
    
    const analogClock = document.getElementById('analog-clock');
    if (analogClock) {
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        const hourDeg = (hours * 30) + (minutes * 0.5);
        const minuteDeg = minutes * 6;
        const secondDeg = seconds * 6;
        
        analogClock.innerHTML = `
            <div class="clock-face">
                <div class="hand hour-hand" style="transform: rotate(${hourDeg}deg)"></div>
                <div class="hand minute-hand" style="transform: rotate(${minuteDeg}deg)"></div>
                <div class="hand second-hand" style="transform: rotate(${secondDeg}deg)"></div>
                <div class="center-dot"></div>
            </div>
        `;
    }
}

setInterval(updateClocks, 1000);
updateClocks(); 