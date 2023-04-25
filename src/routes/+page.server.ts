// src/routes/index.page.server.ts
import fetch from 'node-fetch';
type playingNow={
    artist: string;
    song:string;
    status:string;
}
type recentSongs=string[]

export async function load() {
  const recentSongsRes = await fetch('https://diesiback.haroldpoi.repl.co/recent-songs');
  let recentSongs:any= await recentSongsRes.json();
  const playingNowRes = await fetch('https://api.diesi.gr/playing-now');
  const pn:any = await playingNowRes.json();
  let playingNow:playingNow;
  if (pn){
    playingNow=pn.data;
  }
  else{
    playingNow={
      artist: "Δεν παίζει τίποτα",
      song: "Δεν παίζει τίποτα",
      status: "Δεν παίζει τίποτα"
    }
  }
  if (recentSongs[0].song=playingNow.song){
    recentSongs.shift();
}

  return {
    props: {
      recentSongs,
      playingNow
    }
  };
}
