import { songs } from "../data/songs.js";

renderSongList();

function renderSongList() {
    let songListHTML = `
        <div class="home-menu">
            <img src="images/angel-face-cover.webp">
            <div class="album-info-container" onclick="openPage('home.html')">
                <div class="album-title">
                    Angel Face
                </div>
                <div class="album-author">
                    by Stephen Sanchez
                </div>
                <div class="album-description">
                    The album follows a "loose concept" of a fictional version of Sanchez named "The Troubadour Sanchez" rising to fame in 1958 after performing his song "Until I Found You" before he falls in love with a woman named Evangeline, who is the girlfriend of a mob boss named Hunter, and is killed.
                </div>
            </div>
        </div>
        <div class="bar">
            <div class="song-number">
                #
            </div>
            <div class="song-name">
                Title
            </div>
            <div class="song-duration">
                <i class="fa-regular fa-clock"></i>
            </div>
        </div>
    `;

    songs.forEach(song => {
        songListHTML += `
            <div class="song" onclick="openPage('songs/song-${song.number}.html')">
                <div class="song-number">
                    ${song.number}
                </div>
                <div class="song-name">
                    ${song.name}
                </div>
                <div class="song-duration">
                    ${song.duration}
                </div>
            </div>
        `;
    });

    document.querySelector(".song-container").innerHTML = songListHTML;
    console.log(songListHTML);
}
