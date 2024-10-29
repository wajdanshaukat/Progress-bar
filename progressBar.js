function setProgress() {
    let progressBar = document.getElementById('progressBar');
    let percentageInput = document.getElementById('percentageInput');
    let value = parseInt(percentageInput.value, 10);

    if (isNaN(value) || value < 0 || value > 100) {
        alert('Please enter a valid percentage between 0 and 100.');
        return;
    }

    progressBar.style.width = value + '%';
    progressBar.textContent = value + '%';
}
