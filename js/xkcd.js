async function fetchXKCD() {
    try {
        const response = await fetch('https://xkcd.com/info.0.json');
        const data = await response.json();
        
        const xkcdContainer = document.getElementById('xkcd-container');
        xkcdContainer.innerHTML = `
            <div class="card">
                <img src="${data.img}" alt="${data.alt}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.alt}</p>
                    <p class="card-text"><small class="text-muted">Comic #${data.num}</small></p>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching XKCD comic:', error);
        document.getElementById('xkcd-container').innerHTML = 
            '<p class="text-danger">Failed to load XKCD comic. Please try again later.</p>';
    }
}

// Fetch XKCD comic when the page loads
document.addEventListener('DOMContentLoaded', fetchXKCD); 