import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, cookies }) => {
	const accessToken = cookies.get('accessToken');
	const response = await fetch(`${import.meta.env.VITE_API_URL}/playgame/end-game`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	});
    const result = await response.json();
    if (response.status === 200) {
        return new Response(JSON.stringify(result.data), {
            status: 200
        });
    } else {
        return new Response(JSON.stringify(result.message), {
            status: 400
        });
    }
};
