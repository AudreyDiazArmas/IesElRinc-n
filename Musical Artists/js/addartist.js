let fartist = [
    {
        mgenre: "Trap",
        artist: "Kidd Keo"
    },
    {
        mgenre: "Rap",
        artist: "Kaze"
    }
];

function initialize() {
    const ARTIST_FORM = document.getElementById("artist-form");
    ARTIST_FORM.addEventListener("submit", addartist);
    showartist();
}

function addartist(event) {
    event.preventDefault();
    const MGENRE = event.target.mgenre.value;
    const ARTIST = event.target.artist.value;

    if (MGENRE == "") {
        let MGENRE_ERROR = document.getElementById("mgenre-error");
        MGENRE_ERROR.style.visibility = "visible";

    }
    else if (ARTIST == "") {
        let ARTIST_ERROR = document.getElementById("artist-error");
        ARTIST_ERROR.style.visibility = "visible";
    }
    else {
        fartist.push({
            mgenre: MGENRE,
            artist: ARTIST
        })
    }

    showartist();
}

function showartist() {
    const ARTIST_LIST = document.getElementById("artist-list");

    let allartist = "";
    for (let i = 0; i < fartist.length; i++) {
        allartist = allartist + `<li>${fartist[i].mgenre} ${fartist[i].artist} 
        <button class="deleteform" onclick="deleteartist(${i})">X</button> 
        <button class="down" onclick="downartist(${i})">↓</button>
        <button class="up" onclick="upartist(${i})">↑</button>
        <button class="copy" onclick="copyartist(${i})"> ❐</button></li>`;

    }
    ARTIST_LIST.innerHTML = allartist;
}

function deleteartist(artistid) {
    fartist.splice(artistid, 1);
    showartist();
}

function downartist(artistid) {
    if (artistid == fartist.length - 1) {

    }
    else {
        const AUX_FARTIST = fartist[artistid];
        fartist[artistid] = fartist[artistid + 1];
        fartist[artistid + 1] = AUX_FARTIST;
    }
    showartist();
}

function upartist(artistid) {
    if (artistid == 0) {

    }
    else {
        const AUX_FARTIST = fartist[artistid];
        fartist[artistid] = fartist[artistid - 1];
        fartist[artistid - 1] = AUX_FARTIST;
    }
    showartist();
}

function copyartist(artistid) {
    const AUX_FARTIST = fartist[artistid].mgenre + " " + fartist[artistid].artist;
    navigator.clipboard.writeText(AUX_FARTIST)
}
showartist();




initialize();