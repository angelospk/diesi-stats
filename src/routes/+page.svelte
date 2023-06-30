<script lang="ts">
	import { onMount } from 'svelte';
	import Song from '../+Song.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	import {  choice } from "../convertTime";
	type playingNow={
    artist: string;
    song:string;
    status:string;
}
type recentSongs={"artist":string,"song":string}[]
  	let {recentSongs, playingNow} = data.cache;

let b:{"artist":string,"song":string}= {artist:"",song:""};
function changeRecents(){
  let a=recentSongs;
  if (b.artist!="" && b.song!=recentSongs[0].song){
    a.unshift(b);
    recentSongs = a;
  }
}

	onMount(() => {
	  setInterval(async () => {
		const response = await fetch('https://api.diesi.gr/playing-now');
		let pn:any = await response.json();
		if (pn){
			if (pn.data.song!=playingNow.song){
				//add to the top of recent songs'
				b={artist:playingNow.artist,song:playingNow.song};
				changeRecents();
			}
			playingNow=pn.data;
		}
		else{
			playingNow={artist:"",song:"",status:""}
		}
	  }, 15000);
	});


</script>

<style>
  .recent-songs-container {
    max-height: 300px;
  }
</style>

<div class="font-bold scale-125 md:scale-100">
  <Song artist={playingNow.artist || ""} song={playingNow.song || ""}  />
</div>
<h5 class="mt-8">Έπαιξαν πρόσφατα:</h5>
<div class="recent-songs-container overflow-y-auto">
{#if $choice=="γράφημα"}
	{#each recentSongs as {artist, song}}
    <Song {artist} {song}  />
  {/each}
{:else}
<div class="table-container max-w-md">
    <!-- Native Table Element -->
    <table class="table">

      <tbody>
        {#each recentSongs as {artist, song}}
          <tr>
			<Song {artist} {song}  />
          </tr>
        {/each}
      </tbody>
    </table>
  
  </div>
{/if}
</div>
