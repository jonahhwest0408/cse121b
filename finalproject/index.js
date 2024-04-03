let songs = [];

function fetchSongData() {
    fetch('songs.json')
        .then(response => response.json())
        .then(data => {
            songs = data;
            loadSong(0); 
        })
        .catch(error => {
            console.error('Error fetching song data:', error);
        });
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
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


function loadSong(songIndex) {
    const selectedSong = songs[songIndex];
    displaySongInfo(selectedSong);
    song.src = selectedSong.source;
    song.play();
    ctrlIcon.classList.add("fa-pause");
}

loadSong(0);

song.onplaying = function() {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
};

progress.onchange = function() {
    song.currentTime = progress.value;
};

function nextSong() {
    currentSongIndex++;
    
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    
    loadSong(currentSongIndex);
}

fetchSongData();
