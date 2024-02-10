document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const skipNextBtn = document.getElementById('skip-next-btn');
    const audioSource = document.getElementById('audio-source');
    const playlistSelects = document.querySelectorAll('.playlist-container select');

    let currentTrackIndex = 0;
    let isPlaying = false;

    const playlists = [
        {
            name: 'Bollywood Songs 1990 hits',
            songs: [
                'Bollywood/song1.mp3',
                'Bollywood/song2.mp3',
                'Bollywood/song3.mp3',
                // Add more songs
            ]
        },
        {
            name: 'Punjabi Songs',
            songs: [
                'Punjabi Songs/song1.mp3',
                'Punjabi Songs/song2.mp3',
                'Punjabi Songs/song3.mp3',
                // Add more songs
            ]
        },
        {
            name: 'Hindi Songs',
            songs: [
                'Hindi Songs/song1.mp3',
                'Hindi Songs/song2.mp3',
                'Hindi Songs/song3.mp3',
                // Add more songs
            ]
        }
    ];

    function updateAudioSource() {
        audioSource.src = playlists[currentTrackIndex].songs[0];
        audioPlayer.load();
    }

    function playPauseToggle() {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
        isPlaying = !isPlaying;
        updatePlayPauseButton();
    }

    function updatePlayPauseButton() {
        playPauseBtn.textContent = isPlaying ? 'Pause' : 'Play';
    }

    function playSelectedTrack(selectElement) {
        const playlistIndex = parseInt(selectElement.dataset.playlistIndex, 10);
        const selectedSongIndex = selectElement.selectedIndex;
        currentTrackIndex = playlistIndex;
        audioSource.src = playlists[playlistIndex].songs[selectedSongIndex];
        audioPlayer.load();
        audioPlayer.play();
        isPlaying = true;
        updatePlayPauseButton();
    }

    function playNextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % playlists.length;
        updateAudioSource();
        audioPlayer.play();
        isPlaying = true;
        updatePlayPauseButton();
    }

    function playPreviousTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + playlists.length) % playlists.length;
        updateAudioSource();
        audioPlayer.play();
        isPlaying = true;
        updatePlayPauseButton();
    }

    // Event listeners
    playPauseBtn.addEventListener('click', playPauseToggle);
    prevBtn.addEventListener('click', playPreviousTrack);
    skipNextBtn.addEventListener('click', playNextTrack);

    playlistSelects.forEach((select, index) => {
        select.dataset.playlistIndex = index;
        select.addEventListener('change', function () {
            playSelectedTrack(this);
        });
    });

    // Initial setup
    updateAudioSource();
});
