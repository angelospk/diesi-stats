<script lang="ts">
	import type { PageData } from "./$types";
import { convertTimeOption, choice } from "../../../convertTime";

//load ArtistData from server.ts
interface ArtistData {
    [key: string]: number;
  }
export let data: PageData;
  // export let artistData: ArtistData;
  // export let time_option: string | "day";
let {artistData, time_option} = data.props;
let max=artistData[0].count;
// console.log(getChoice());
</script>

<style>
    .bar {
      /* display: inline-block; */
      height: 20px;
      background-color: blue;
      margin-right: 10px;
      margin-bottom: 5px;
    }
    .table-container{
    /* max-width: 80%; */
  } 
  </style>
  
  <div>
  <!-- <a href="/artists/week" class="btn variant-filled">week</a>
  <a href="/artists/month" class="btn variant-filled">month</a>
  <a href="/artists/all" class="btn variant-filled">all</a> -->
  <h3 class="my-5">Πιο διάσημοι καλλιτέχνες {convertTimeOption(time_option)}</h3>
  {#if $choice=="γράφημα"} <!-- Add this conditional statement -->
    
    <ol class="m-2 max-h-[600px] overflow-scroll">
    {#each artistData as a, i}
  
        <li class="my-0">{i+1+". "}{a.artist} ({a.count +" φορές"})
        <br>
        <div
          class="bar"
          style="width: {Math.round((a.count / max) * 100)}%"
        ></div></li>
    {/each}
  </ol>
  
  {:else}
  <div class="table-container max-h-[600px] overflow-scroll">
    <!-- Native Table Element -->
    <table class="table text-justify table-fixed md:table-auto">
      <thead>
        <tr>
          <th class="w-10">Θέση</th>
          <th>Καλλιτέχνης</th>
          <th>Μετρητής</th>
          <th>Γράφημα Μπάρας</th>
        </tr>
      </thead>
      <tbody>
        {#each artistData as row, i}
          <tr>
            <td>{i+1}</td>
            <td>{row.artist}</td>
            <td>{row.count}</td>
            <td><div
              class="bar"
              style="width: {Math.round((row.count / max) * 100)}%"
            ></div></td>
          </tr>
        {/each}
      </tbody>
    </table>
  
  </div>
  
  {/if}
</div>
