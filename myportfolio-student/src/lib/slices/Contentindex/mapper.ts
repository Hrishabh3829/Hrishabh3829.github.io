import type{ Client, Content,SliceMapper } from '@prismicio/client';
import type { ComponentProps } from 'svelte';
import Contentindex from './index.svelte';


type Context={client: Client<Content.AllDocumentTypes>}

const mapper: SliceMapper<
	Content.ContentindexSlice,
	ComponentProps<Contentindex>,
	Context
> = async ({slice,context})=>{
	const { client } = context;

	const items= slice.primary.content_type === "Blog" ? await client.getAllByType('blogpost') : await client.getAllByType('project')

	return {slice,items}
};


export default mapper;