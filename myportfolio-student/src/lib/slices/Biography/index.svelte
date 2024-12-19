<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import Button from '$lib/components/Button.svelte';
	import Bounded from '$lib/components/Bounded.svelte';

	export let slice: Content.BiographySlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
		<h1>
			{slice.primary.heading}
		</h1>
		<div class="col-start-1">
			<PrismicRichText field={slice.primary.description}/>
		</div>
		<Button linkField={slice.primary.button_link} label={slice.primary.button_label}/>
			<PrismicImage field={slice.primary.avatar} class="avatar-image h-full w-full object-fill"
					imgixParams={{q:90}}/>
	</div>
</Bounded>
