document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const progress = document.getElementById('progress');
    const playlistItems = document.querySelectorAll('.playlist li');

    const tracks = ['audio/Nueva grabación 20.m4a', 'audio/Nueva grabación 21.m4a', 'audio/Nueva grabación 23.m4a', 'audio/Nueva grabación 24.m4a', 'audio/Nueva grabación 25.m4a', 'audio/Nueva grabación 28.m4a','audio/Nueva grabación 34.m4a'];
    let currentTrack = 0;

    playButton.addEventListener('click', () => {
        audio.play();
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
    });

    prevButton.addEventListener('click', () => {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        audio.src = tracks[currentTrack];
        audio.play();
    });

    nextButton.addEventListener('click', () => {
        currentTrack = (currentTrack + 1) % tracks.length;
        audio.src = tracks[currentTrack];
        audio.play();
    });

    audio.addEventListener('timeupdate', () => {
        const value = (audio.currentTime / audio.duration) * 100;
        progress.value = value;
    });

    progress.addEventListener('input', () => {
        const value = (progress.value / 100) * audio.duration;
        audio.currentTime = value;
    });
    playlistItems.forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('data-src');
            audio.src = src;
            audio.play();
        });
    });
});
