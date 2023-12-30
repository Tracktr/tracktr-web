import { redirect, type Handle } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { sequence } from '@sveltejs/kit/hooks';
import { SvelteKitAuth } from '@auth/sveltekit';
import github from '@auth/sveltekit/providers/github';
import {
	SECRET_AUTH,
	SECRET_GITHUB_CLIENT_ID,
	SECRET_GITHUB_CLIENT_SECRET
} from '$env/static/private';

async function authorization({ event, resolve }) {
	if (event.url.pathname.startsWith('/app')) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/');
		}
	}

	return resolve(event);
}

export const handle: Handle = sequence(
	SvelteKitAuth({
		providers: [
			github({
				clientId: SECRET_GITHUB_CLIENT_ID,
				clientSecret: SECRET_GITHUB_CLIENT_SECRET
			})
		],
		secret: SECRET_AUTH
	}),
	authorization
);
