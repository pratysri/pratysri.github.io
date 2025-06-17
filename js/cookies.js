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
        // First time visitor
        document.getElementById('visitor-counter').innerHTML = 
            '<p class="text-light">Welcome! This is your first visit.</p>';
    } else {
        // Return visitor
        const lastVisitDate = new Date(lastVisit);
        const timeDiff = Math.floor((new Date() - lastVisitDate) / (1000 * 60 * 60 * 24));
        document.getElementById('visitor-counter').innerHTML = 
            `<p class="text-light">Welcome back! Your last visit was ${timeDiff} days ago.</p>`;
    }
    
    // Update last visit cookie
    setCookie("lastVisit", now, 365);
}

// Check visitor status when the page loads
document.addEventListener('DOMContentLoaded', checkVisitor);

const cookieConsent = document.getElementById('cookie-consent');
const acceptCookies = document.getElementById('accept-cookies');

if (!localStorage.getItem('cookiesAccepted')) {
    cookieConsent.style.display = 'block';
}

acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieConsent.style.display = 'none';
}); 