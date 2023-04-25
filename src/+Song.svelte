<!-- src/lib/Song.svelte -->
<script lang="ts">
    export let song:string;
    export let artist:string;
    export let isCurrent = false;
  
    function searchYouTube(query: string): string {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  }
  </script>
  <a
  class="song-container text-center no-underline"
  href={searchYouTube(`${artist} - ${song}`)}
  target="_blank"
  rel="noopener noreferrer"
  
>
  <div>
    <p class="mt-3 text-blue-500">{artist}</p>
    <p>{song}</p>
  </div>
  <!-- Replace this with the SVG or icon you want to use -->
  <img
    class="yt-icon w-5 h-5 ml-3"
    src="/yicon.png"
    alt="YouTube icon"
    width="32"
    height="32"
  />
</a>
  
  <style>
  .song-container {
    position: relative;
    text-decoration:none;
  }

  .yt-icon {
    /* position: absolute; */
    /* top: 50%; */
    /* right: -1.5rem; */
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .song-container:hover .yt-icon {
    opacity: 1;
  }

  </style>
  