<script lang="ts">


	import { type  Content, type ImageField, type KeyTextField } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';

	export let items: Content.BlogpostDocument[] | Content.ProjectDocument[];
	export let fallbackItemImage: ImageField;
	export let viewMoreText: KeyTextField = "Read More"
</script>


<ul>
	{#each items as post,index(post.id + index)}
		<li>
			<PrismicLink document={post} class="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row">
				<div class="flex flex-col">
					<span class="text-3xl font-bold">{post.data.title}</span>
				</div>
			</PrismicLink>
		</li>
		{/each}
</ul>