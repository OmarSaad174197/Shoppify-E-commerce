// Simulated Live Match Updates
function updateMatchScores() {
    const scores = [
        { id: 2, score: "Up Comming" }, // Barcelona vs Real Madrid
        { id: 3, score: "Up Comming" }  // Man City vs Liverpool
    ];
    scores.forEach(match => {
        const scoreElement = document.getElementById(`score-${match.id}`);
        if (scoreElement && scoreElement.textContent === "VS") {
            scoreElement.textContent = match.score;
            scoreElement.style.color = "#28a745";
            scoreElement.style.fontWeight = "bold";
        }
    });
}

// Update scores every 10 seconds (simulated)
setInterval(updateMatchScores, 10000);

// Search Feature for News
const searchInput = document.getElementById('searchInput');
const newsItems = document.querySelectorAll('.news-item');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    newsItems.forEach(item => {
        const title = item.querySelector('.card-title').textContent.toLowerCase();
        const text = item.querySelector('.card-text').textContent.toLowerCase();
        if (title.includes(query) || text.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});