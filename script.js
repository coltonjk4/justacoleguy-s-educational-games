// interactive game tracking

function gameTracking() {
    let gamesPlayed = 0;
    let totalScore = 0;

    function playGame(score) {
        gamesPlayed++;
        totalScore += score;
        console.log(`Game played! Total Games: ${gamesPlayed}, Total Score: ${totalScore}`);
    }

    return { playGame };
}

const tracker = gameTracking();
tracker.playGame(100);
tracker.playGame(200);

// scroll effects

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight;
    const clientHeight = window.innerHeight;

    console.log(`Scroll Top: ${scrollTop}, Scroll Height: ${scrollHeight}, Client Height: ${clientHeight}`);
});