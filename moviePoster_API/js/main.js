

const getToken = async () => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${btoa(clientId + ":" + clientSecret)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error(error);
  }
};

console.log(getToken());

const getSong = async (track, artist) => {
  const result = await fetch(
    `https://api.spotify.com/v1/search?q=${track},${artist}&type=track,artist&limit=5`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await getToken()}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await result.json();
  return data.tracks.items[0].preview_url;
};

// getSong("Ooh La La", "The Faces");

const clickedEvent = async (figId) => {
  /* // parseInt = convert to integers and then extract the last character of the string figId minus 1 

    For example, if figId is "fig5", then figId.slice(-1) extracts "5", which is converted to the number 5. Subtracting 1 from 5 produces 4, so the entire expression evaluates to 4. */

  const imgIndex = parseInt(figId.slice(-1)) - 1;
  const songList = document.getElementsByTagName("img");
  const [track, artist] = songList[imgIndex].alt.split(" - ");
  const songUrl = await getSong(track, artist);
//   playSong ? playSong.pause() : ''
    if(playSong) {
        playSong.pause()
    }
  startSong(songUrl);
};

let playSong
const startSong = (url) => {
  playSong = new Audio(url);
  return playSong.play();
};

const stopSong = () => {
    playSong.pause()
}

