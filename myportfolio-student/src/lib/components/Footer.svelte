<script lang="ts">
	import type { Content } from '@prismicio/client';
	export let settings: Content.SettingsDocument;

</script>
<style>
    @keyframes colorWave {
        0% { color: #FF4500; }   /* Bright Orange */
        25% { color: #1E90FF; }  /* Dodger Blue */
        50% { color: #32CD32; }  /* Lime Green */
        75% { color: #FFD700; }  /* Gold */
        100% { color: #FF4500; } /* Back to Bright Orange */
    }
    .color-wave {
        animation: colorWave 4s linear infinite;
        font-weight: bold;
    }
</style>

<footer class="text-slate-600">
	<div class="container">
		<div class="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
			<a href="/" class="text-xl font-extrabold tracking-tighter text-slate-100 transition-color duration-150 hover:text-yellow-400">
				{settings.data.name}
			</a>
			<span class="hidden text-5xl  font-extralight leading-[0] text-slate-400 sm:inline">/</span>
			<p class="text-sm text-slate-300">
			{new Date().getFullYear()}@
			<span class="color-wave tracking-tighter font-thin text-xs">Dark£Blaze</span>
			</p>
		</div>
		<nav class="navigation">Profile</nav>
		<div class="socials">Twitter</div>
	</div>
</footer>
