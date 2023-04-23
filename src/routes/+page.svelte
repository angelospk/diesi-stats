
<script>
	//display stats
	import TopArtists from "../TopArtists.svelte";
	// const { default: TopArtists } = require("../TopArtists.svelte");
	import TopSongs from "../TopSongs.svelte";
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="my-5">
			Στατιστικά Diesi 101.3
		</h1>
		
		<!-- <TopArtists/> -->
		<!-- <h2>Top Songs of the Week</h2> -->
		<TopSongs />
	</div>
</div>
