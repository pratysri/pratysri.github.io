async function fetchXKCD() {
    try {
        const response = await fetch('https://xkcd.vercel.app/?comic=latest');
        const data = await response.json();
        const xkcdContainer = document.getElementById('xkcd-container');
        
        xkcdContainer.innerHTML = `
            <h3>${data.title}</h3>
            <img src="${data.img}" alt="${data.alt}" title="${data.alt}">
        `;
    } catch (error) {
        document.getElementById('xkcd-container').innerHTML = '<p>Failed to load comic. Please try again later.</p>';
    }
}

document.addEventListener('DOMContentLoaded', fetchXKCD); 