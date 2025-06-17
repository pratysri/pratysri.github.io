async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode');
        const data = await response.json();
        const jokeContainer = document.getElementById('joke-container');
        
        if (!jokeContainer) return;
        
        if (data.type === 'single') {
            jokeContainer.innerHTML = `<p>${data.joke}</p>`;
        } else {
            jokeContainer.innerHTML = `
                <p>${data.setup}</p>
                <p class="delivery">${data.delivery}</p>
            `;
        }
    } catch (error) {
        const jokeContainer = document.getElementById('joke-container');
        if (jokeContainer) {
            jokeContainer.innerHTML = '<p>Failed to load joke. Please try again later.</p>';
        }
    }
}

document.addEventListener('DOMContentLoaded', fetchJoke); 