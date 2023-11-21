<script lang="ts">
	import type { PageData } from "./$types";
  import { convertTimeOption, choice } from "../../../convertTime";
	// ...
	interface Song {
		artist: string;
		title: string;
		count: number;
	}

	//load songs and time_option from server.ts
  export let data: PageData;
  let {songs, time_option} = data.props;
  // export let songs: Song[];
  // export let time_option: string | "day";

  let max = songs[0].count;
	// const navigate = useNavigate();

  
	// function selectTimeOption(time_option: string) {
	// 	navigate(`/songs/${time_option}`);
	// }
    function searchYouTube(query: string): string {
      return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    }
</script>

<!-- Add buttons -->
<a href="/songs" class="btn variant-filled">Επέλεξε άλλο χρονικό διάστημα</a>
<h3 class="my-5">Πιο διάσημα τραγούδια {convertTimeOption(time_option)}</h3>
  {#if $choice=="γράφημα"}
    
    <ol class="m-2 max-h-[600px] overflow-scroll">
      {#each songs as s,i }
        <li>
          <a class="flex" href={searchYouTube(`${s.artist} - ${s.title}`)} target="_blank">
            <span>{i+1+". "}{s.artist} - {s.title} ({s.count+ " φορές  "})</span><img class="h-5 w-5 ml-3" src="/yicon.png" alt="youtube">
          </a>
          <div
          class="bar"
          style="width: {Math.round((s.count / max) * 100)}%"
        ></div>
        </li>
      {/each}
    </ol>
  <!-- {:else} -->
  {:else}
  <div class="table-container max-h-[600px] overflow-scroll">
    <!-- Native Table Element -->
    <table class="table text-justify table-fixed md:table-auto table-hover">
      <thead>
        <tr>
          <th class="w-10" >Θέση</th>
          <th >Τίτλος</th>
          <th >Καλλιτέχνης</th>
          <th class="text-right md:text-left">Μετρητής</th>
        </tr>
      </thead>
      <tbody>
        {#each songs as row, i}
        <tr
        on:click={() => window.open(searchYouTube(`${row.artist} - ${row.title}`), '_blank')}
        title="Κλικ για να το ακούσεις!"
      >
            <td>{i+1}</td>
            <td>{row.title}</td>
            <td>{row.artist}</td>
            <td class="text-right md:text-left">{row.count}</td>
            <!-- <td><a class="content-center" href={searchYouTube(`${row.artist} - ${row.title}`)} target="_blank">
              <img src="/yicon.png" alt="youtube" width="32" height="32">
            </a></td> -->
          </tr>
        {/each}
      </tbody>
    </table>
  
  </div>
  {/if}

  <style>
        .bar {
      /* display: inline-block; */
      height: 20px;
      background-color: blue;
      margin-right: 10px;
      margin-bottom: 5px;
    }
  </style>