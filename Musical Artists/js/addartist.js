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

if (localStorage.getItem("fartist")) {
  try {
    fartist = JSON.parse(localStorage.getItem("fartist"));
  } catch (error) {
    console.error("Error al parsear datos del localStorage:", error);
  }
} else {
  fartist = [
    {
      mgenre: "Trap",
      artist: "Kidd Keo"
    },
    {
      mgenre: "Rap",
      artist: "Kaze"
    }
  ];
}

function initialize() {
  const ARTIST_FORM = document.getElementById("artist-form");
  ARTIST_FORM.addEventListener("submit", addartist);
  showartist();
}

function addartist(event) {
  event.preventDefault();
  const MGENRE = event.target.mgenre.value.trim();
  const ARTIST = event.target.artist.value.trim();

  if (MGENRE === "") {
    displayError("mgenre-error");
    return;
  } else if (ARTIST === "") {
    displayError("artist-error");
    return;
  }

  fartist.push({
    mgenre: MGENRE,
    artist: ARTIST
  });
  localStorage.setItem("fartist", JSON.stringify(fartist));
  showartist();
}

function showartist() {
  const ARTIST_LIST = document.getElementById("artist-list");
    let allArtist = "";
    for (let i = 0; i < fartist.length; i++) {
      allArtist += `<li>${fartist[i].artist} - ${fartist[i].mgenre}
            <button class="down" onclick="downartist(${i})">⬇️</button>
            <button class="deleteform" onclick="deleteartist(${i})">❌</button>
            <button class="up" onclick="upartist(${i})">⬆️</button>
            <button class="copy" onclick="copyartist(${i})">🖨️</button>
            <button class="update" onclick="updateartist(${i})">🔧</button></li>`;
    }
    ARTIST_LIST.innerHTML = allArtist;
  }

function deleteartist(artistid) {
  fartist.splice(artistid, 1);
  localStorage.setItem("fartist", JSON.stringify(fartist));
  showartist();
}

function upartist(artistid) {
  if (artistid > 0) {
    const temp = fartist[artistid - 1];
    fartist[artistid - 1] = fartist[artistid];
    fartist[artistid] = temp;
    localStorage.setItem("fartist", JSON.stringify(fartist));
    showartist();
  }
}

function downartist(artistid) {
  if (artistid < fartist.length - 1) {
    const temp = fartist[artistid + 1];
    fartist[artistid + 1] = fartist[artistid];
    fartist[artistid] = temp;
    localStorage.setItem("fartist", JSON.stringify(fartist));
    showartist();
  }
}

function copyartist(artistid) {
  const AUX_FARTIST = fartist[artistid].mgenre + " " + fartist[artistid].artist;
  navigator.clipboard.writeText(AUX_FARTIST);
}

function updateartist(artistid) {
  const ARTIST_FORM = document.getElementById("artist-form");
  ARTIST_FORM.elements["mgenre"].value = fartist[artistid].mgenre;
  ARTIST_FORM.elements["artist"].value = fartist[artistid].artist;
  deleteartist(artistid);
}

function displayError(elementId) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.style.visibility = "visible";
  }
}

initialize();
