<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { Router, Route, Link } from 'svelte-navigator';
	import TopArtists from './artists/+page.svelte';
	import TopSongs from './songs/+page.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
import {choice} from '../convertTime';
	function section(c: string = 'γράφημα'): void {
		choice.set(c);
	}

	// setContext('choice', choice);
</script>

<div class="app">
	<header class="content-center bg-white rounded-lg shadow m-3 dark:bg-gray-800">
		<title>Στατιστικά Σταθμού Δίεση 101.3</title>
		<nav>
			<a href="/" class="btn btn-sm-filled m-1" data-sveltekit-preload-data="hover">Αρχική</a>
			<a href="/artists" class="btn btn-sm-filled m-1" data-sveltekit-preload-data="hover">Top Καλλιτέχνες</a>
			<a href="/songs" class="btn btn-sm-filled m-1" data-sveltekit-preload-data="hover">Top Τραγούδια</a>
			<a href="/page1" class="btn btn-sm-filled m-1" data-sveltekit-preload-data="hover">Page 1</a>
			<a href="/page2" class="btn btn-sm-filled m-1" data-sveltekit-preload-data="hover">Page 2</a>
			<!-- <a class="ml-3" href="/artists">Top Καλλιτέχνες</a>
			<a class="ml-3" href="/songs">Top Τραγούδια</a> -->
		</nav>
		<div class="m-0">{#each ['γράφημα', 'πίνακας'] as c}
			<span
				class="chip {$choice === c ? 'variant-filled' : 'variant-soft'}"
				on:click={() => {
					section(c);
				}}
				on:keypress
			>
				{#if $choice === c}<span>✓</span>{/if}
				<span>{c}</span>
			</span>
		{/each}</div>
		<LightSwitch class="mr-6" />
	</header>
	<!-- add slot -->
	<div class="w-full flex justify-center text-center md:flex-row">
		<div class="">
			<h2 class="mb-5">Πληροφορίες Δίεση 101.3</h2>
			<slot/>
		</div>
		
	</div>
	

	<footer class="fixed bottom-0 right-0 opacity-70 content-center bg-white rounded-lg shadow m-4 dark:bg-gray-800 hover:opacity-30">
		<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
			<span class="text-sm mr-4 text-gray-500 sm:text-center dark:text-gray-400"
				>© 2023  All Rights
				Reserved.
			</span>
			<ul
				class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
			>
				<li>
					<a href="/" class="mr-4 hover:underline md:mr-6">About</a>
				</li>
				<li>
					<a href="/" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
				</li>
				<li>
					<a href="/" class="hover:underline">Contact</a>
				</li>
			</ul>
		</div>
	</footer>
</div>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
	header {
		display: flex;
		justify-content: space-around;
		padding: 1rem 0;
		margin-bottom: 1rem;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
</style>
