function togglePlay() {
    const video = document.getElementById("promotional-video");
    if (video.paused) {
        video.play();
        document.querySelector('.circle').style.display = 'none'; // Hide play button when playing
    } else {
        video.pause();
        document.querySelector('.circle').style.display = 'flex'; // Show play button when paused
    }
}