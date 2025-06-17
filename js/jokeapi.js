async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode');
        const data = await response.json();
        
        const jokeContainer = document.getElementById('joke-container');
        if (jokeContainer) {
            if (data.type === 'single') {
                jokeContainer.innerHTML = `<p>${data.joke}</p>`;
            } else {
                jokeContainer.innerHTML = `
                    <p>${data.setup}</p>
                    <p class="delivery">${data.delivery}</p>
                `;
            }
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchJoke); 