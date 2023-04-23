<script lang="ts">
    import { onMount} from 'svelte';
  
    interface Song {
      artist: string;
      title: string;
      count: number;
    }
  
    let songs: Song[] = [];
    const timeOptions = ['day', 'week', 'month', 'all'];
    let selectedTimeOption= "day";
    // $: selectedTimeOption = selectTimeOption() || "day";
  
    async function fetchSongs(timeOption: string) {
      const url = `https://diesiback.haroldpoi.repl.co/topsongs/${timeOption}`; // Replace with your Flask server URL
      console.log(url);
      const response = await fetch(url);
      songs = await response.json();
      console.log(songs);
    }
    function selectTimeOption(timeOption: string="day"): void {
      selectedTimeOption = timeOption;
    }
    $: selectTimeOption();
    function searchYouTube(query: string): string {
      return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    }
  
    $: fetchSongs(selectedTimeOption);
  
  </script>
  
  <style>
    a {
      text-decoration: none;
      color: inherit;
    }
    button {
      margin-right: 5px;
    }
  </style>
  
  <div>
    <h2>Top 50 Songs</h2>
    {#each timeOptions as timeOption}
      <button
        on:click={() => selectTimeOption(timeOption)}
        class:selected={selectedTimeOption === timeOption}
      >
        {timeOption}
      </button>
    {/each}
    <ol>
      {#each songs as s }
        <li>
          <a href={searchYouTube(`${s.artist} - ${s.title}`)} target="_blank">
            {s.artist} - {s.title} ({s.count})
          </a>
        </li>
      {/each}
    </ol>
  </div>
  