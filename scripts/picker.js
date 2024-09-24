import { songs } from "../data/songs.js";

renderSongList();

function renderSongList() {
    let songListHTML = `
        <div class="home-menu">
            <img src="images/moments.png">
            <div class="album-info-container" onclick="openPage('home.html')">
                <div class="album-title">
                    Moments
                </div>
                <div class="album-author">
                    by Perry Xie
                </div>
                <div class="album-description">
                    Cinema screens, we dine and dream,<br/>Eis in a cone, planetarium dome,<br/>Travel and see, sharing moments with me.
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
