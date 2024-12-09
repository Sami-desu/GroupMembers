function openProfile(url) {
  window.location.href = url;
}
function toggleMusic() {
  const audio = document.getElementById("background-music");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
