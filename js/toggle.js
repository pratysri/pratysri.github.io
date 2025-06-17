const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

function showhideEmail() {
    const email = document.getElementById("email");
    const btn = event.target;

    if (email.style.display === "none") {
        email.style.display = "inline";
        email.innerHTML = "pratysri@mail.uc.edu";
        btn.innerText = "Hide My Email";
    } else {
        email.style.display = "none";
        email.innerHTML = "";
        btn.innerText = "Show My Email";
    }
} 