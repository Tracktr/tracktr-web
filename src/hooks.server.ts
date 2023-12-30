import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import {
	SECRET_GITHUB_CLIENT_ID,
	SECRET_GITHUB_CLIENT_SECRET,
	SECRET_AUTH
} from '$env/static/private';

export const handle = SvelteKitAuth({
	providers: [
		GitHub({
			clientId: SECRET_GITHUB_CLIENT_ID,
			clientSecret: SECRET_GITHUB_CLIENT_SECRET
		})
	],
	secret: SECRET_AUTH
});
