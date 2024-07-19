let points = 0;

function adjustMeter(amount) {
    points += amount;
    points = Math.max(0, Math.min(10, points)); // Ensure points are between 0 and 10
    updateMeter();
}

function resetMeter() {
    points = 0;
    updateMeter();
}

function updateMeter() {
    const bar = document.getElementById('bar');
    const width = (points / 10) * 100;
    bar.style.width = width + '%';

    if (points <= 3.33) {
        bar.style.backgroundColor = 'red';
    } else if (points <= 6.66) {
        bar.style.backgroundColor = 'orange';
    } else {
        bar.style.backgroundColor = 'green';
    }
}

document.addEventListener('DOMContentLoaded', updateMeter);
