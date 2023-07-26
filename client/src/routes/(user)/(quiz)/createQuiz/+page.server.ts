import { InforQuizFormSchema } from '../../../../libs/schema/inforQuiz';

export const actions = {
	createQuizz: async ({ fetch, request }) => {
		const data = await request.formData();
		try {
			// const validatedData = InforQuizFormSchema.parse({
			// 	titleQuiz: data.get('titleQuiz'),
			// 	thumbnail: data.get('thumbnail'),
			// 	decription: data.get('decription'),
			// 	passingPoint: data.get('passingPoint')
			// });
			const response = await fetch('/api/create-quizzes', {
				method: 'POST',
				body: data
			});
			const result = await response.json();

		} catch (error: any) {
			console.log(error);
		}
	}
};
