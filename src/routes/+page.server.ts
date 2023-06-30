// src/routes/index.page.server.ts
import fetch from 'node-fetch';
type playingNow={
    artist: string;
    song:string;
    status:string;
}
type recentSongs=string[]

let cache = {
  recentSongs: null,
  playingNow: null,
  timestamp: Date.now()
};
export async function load() {
  const tenMinutes = 200000; // 3.3 minutes in milliseconds

  // If cache is older than 10 minutes, fetch new data
  if (!cache.recentSongs || !cache.playingNow || (Date.now() - cache.timestamp > tenMinutes)) {
    const recentSongsRes = await fetch('https://diesiback.haroldpoi.repl.co/recent-songs');
    const recentSongs = await recentSongsRes.json();
    const playingNowRes = await fetch('https://api.diesi.gr/playing-now');
    const pn:any = await playingNowRes.json();

    // Save the data to the cache and update the timestamp
   
 
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
cache = {
      recentSongs,
      playingNow,
      timestamp: Date.now()
    };
}

  return {
     cache
    }
  };

  // return {
  //   props: {
  //     recentSongs: cache.recentSongs,
  //     playingNow: cache.playingNow
  //   }


