function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

function checkVisitor() {
    const lastVisit = getCookie("lastVisit");
    const now = new Date().toISOString();
    
    if (lastVisit === "") {
        document.getElementById('visitor-counter').innerHTML = 
            '<p class="text-light">Welcome! This is your first visit.</p>';
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDiff = Math.floor((new Date() - lastVisitDate) / (1000 * 60 * 60 * 24));
        document.getElementById('visitor-counter').innerHTML = 
            `<p class="text-light">Welcome back! Your last visit was ${timeDiff} days ago.</p>`;
    }
    
    setCookie("lastVisit", now, 365);
}

document.addEventListener('DOMContentLoaded', checkVisitor);

const cookieConsent = document.getElementById('cookie-consent');
const acceptCookies = document.getElementById('accept-cookies');

function setLastVisit() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const formattedDate = now.toLocaleDateString('en-US', options);
    localStorage.setItem('lastVisit', formattedDate);
}

function displayLastVisit() {
    const lastVisit = localStorage.getItem('lastVisit');
    const lastVisitDiv = document.getElementById('last-visit');
    
    if (lastVisitDiv) {
        if (lastVisit) {
            lastVisitDiv.textContent = `Your last visit was at ${lastVisit}`;
        } else {
            lastVisitDiv.textContent = 'Welcome to my website!';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayLastVisit();
    setLastVisit();
}); 