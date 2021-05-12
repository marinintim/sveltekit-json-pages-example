<script context="module">
import projects from './_projects.json';
export const hydrate = false;
export const router = false;
export const prerender = true;

export function load({ page }) {
	let project = projects.projects.find((p) => p.slug === page.params.projectName);
	if (project) {
		return {
			props: {
				project
			}
		}
	} else {
		return new Error('Project not found');
	}
}
</script>

<script>
	export let project = { name: 'null', description: null };
</script>

<h2>{project.name}</h2>
<p>{project.description}</p>