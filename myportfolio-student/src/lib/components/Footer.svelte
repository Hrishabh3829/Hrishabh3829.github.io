<script lang="ts">

	import type { Content } from '@prismicio/client';

	export let settings: Content.SettingsDocument;

</script>

<footer class="text-slate-600">
	<div class="container">
		<div class="name">
			<a href="/" class="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400">
				{settings.data.name}
			</a>
		</div>

		<nav class="navigation">
			Profile
		</nav>

		<div class="socials">
			Twitter
		</div>
	</div>
</footer>