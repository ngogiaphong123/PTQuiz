import { VITE_API_URL } from '$env/static/private';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ fetch, request }) => {
	// get data from request
	const data = await request.json();
	const response = await fetch(`${VITE_API_URL}/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			...data
		})
	});
	const result = await response.json();
	if (response.status === 201) {
		return new Response(JSON.stringify(result.message), {
			status: 201
		});
	} else {
		return new Response(JSON.stringify(result.message), {
			status: 400
		});
	}
};
