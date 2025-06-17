async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode');
        const data = await response.json();
        
        const jokeContainer = document.getElementById('joke-container');
        
        if (data.type === 'single') {
            jokeContainer.innerHTML = `<p class="lead">${data.joke}</p>`;
        } else {
            jokeContainer.innerHTML = `
                <p class="lead">${data.setup}</p>
                <p class="lead text-muted">${data.delivery}</p>
            `;
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('joke-container').innerHTML = 
            '<p class="text-danger">Failed to load joke. Please try again later.</p>';
    }
}

// Fetch a new joke every minute
function initJokeAPI() {
    fetchJoke(); // Initial fetch
    setInterval(fetchJoke, 60000); // Update every minute
}

// Start fetching jokes when the page loads
document.addEventListener('DOMContentLoaded', initJokeAPI); 