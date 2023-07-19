import type { RequestHandler } from '../$types';

export const GET: RequestHandler = async ({ fetch, cookies, request, params }) => {
	const accessToken = cookies.get('accessToken');
	const response = await fetch(
		`${import.meta.env.VITE_API_URL}/quizzes/getAllQuestions?quizId=${params.quizzesId}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`
			}
		}
	);
	const result = await response.json();
	console.log('result', result);
	if (response.status === 200) {
		return new Response(JSON.stringify(result.data), {
			status: 200
		});
	} else {
		return new Response(JSON.stringify(result.message), {
			status: 401
		});
	}
};
