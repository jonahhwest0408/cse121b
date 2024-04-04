let songs;
let song;
let audio;
let currentSongIndex = 0;

const fetchSongData = async () => {
    try {
        const response = await fetch('https://mocki.io/v1/2711d74e-c257-4b3a-a214-a2f47abe7f96');
        if (!response.ok) {
            throw new Error('Failed to fetch song data');
        }
        songs = await response.json();
        if (songs.length > 0) {
            loadSong(0); 
        } else {
            console.error('No songs found in the array');
        }
    } catch (error) {
        console.error('Error fetching song data:', error);
    }
};

function loadSong(songIndex) {
    const selectedSong = songs[songIndex];
    song = new Audio(selectedSong.source);
    audio = document.getElementById('song');
    audio.src = selectedSong.source;
    displaySongInfo(selectedSong);

    song.addEventListener('timeupdate', function() {
        const currentTime = song.currentTime;
        const duration = song.duration;
        const progressPercentage = (currentTime / duration) * 100;
        progress.value = progressPercentage;
    });

    song.addEventListener('ended', function() {
        nextSong();
    });

    progress.addEventListener('input', function() {
        const seekTime = (progress.value / 100) * song.duration;
        song.currentTime = seekTime;
    });

    progress.addEventListener('change', function() {
        song.play(); 
    });
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

function nextSong() {
    song.pause(); // Pause the current song
    currentSongIndex++;
    
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    
    loadSong(currentSongIndex);
}

function previousSong() {
    song.pause(); // Pause the current song
    currentSongIndex--;
    
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    
    loadSong(currentSongIndex);
}

function displaySongInfo(song) {
    if (song) {
        const songImg = `<img src="${song.image}" class="song-img">`;
        const songTitle = `<h1>${song.title}</h1>`;
        const artistName = `<p>${song.artist}</p>`;
        document.querySelector('.song-info').innerHTML = songImg + songTitle + artistName;
    } else {
        console.error('Song object is undefined or null.');
    }
}

const progress = document.getElementById('progress');

fetchSongData();
