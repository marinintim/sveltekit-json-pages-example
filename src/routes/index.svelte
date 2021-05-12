<script context="module">
	import _projects from './_projects.json';
	export const hydrate = false;
	export const router = false;
	export const prerender = true;
	export function load() {
		return {
			props: {
				projects: _projects.projects
			}
		}
	}
</script>

<script>
export let projects = [];
</script>


<h1>Welcome to SvelteKit</h1>

{#each projects as project}
<li><a href="/{project.slug}">{project.name}</a></li>
{/each}