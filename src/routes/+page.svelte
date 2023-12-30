<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
	<p>{$page.data.session.user?.name ?? 'User'}</p>
	<a href="/app">Go to dashboard</a>
	<button on:click={() => signOut()} class="button">Sign out</button>
{:else}
	<p>You are not signed in</p>
	<button on:click={() => signIn('github')}>Sign In with GitHub</button>
{/if}
