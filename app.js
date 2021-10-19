const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.myvideo');

speed.addEventListener('mousemove', (e) => {
  const min = 0.4;
  const max = 4;
  const y = e.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
})