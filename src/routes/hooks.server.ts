import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { SvelteKitAuth } from '@auth/sveltekit';
import github from '@auth/sveltekit/providers/github';
import {
	SECRET_AUTH,
	SECRET_GITHUB_CLIENT_ID,
	SECRET_GITHUB_CLIENT_SECRET
} from '$env/static/private';

export const handle: Handle = sequence(
	SvelteKitAuth({
		providers: [
			github({
				clientId: SECRET_GITHUB_CLIENT_ID,
				clientSecret: SECRET_GITHUB_CLIENT_SECRET
			})
		],
		secret: SECRET_AUTH
	})
);
