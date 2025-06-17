async function fetchXKCD() {
    try {
        const response = await fetch('https://xkcd.vercel.app/?comic=latest');
        const data = await response.json();
        
        const xkcdContainer = document.getElementById('xkcd-container');
        if (xkcdContainer) {
            xkcdContainer.innerHTML = `
                <h3>${data.title}</h3>
                <img src="${data.img}" alt="${data.alt}" class="img-fluid">
                <p class="mt-2"><small>${data.alt}</small></p>
            `;
        }
    } catch (error) {
        console.error('Error fetching XKCD:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchXKCD); 