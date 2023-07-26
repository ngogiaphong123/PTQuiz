import { z } from 'zod';
import { t } from '$i18n/translations';

export const InforQuizFormSchema = z.object({
	titleQuiz: z
		.string()
		.min(3, t.get('validation.TITLE_QUIZ_MUST_BE_AT_LEAST_3_CHARACTERS'))
		.max(50, t.get('validation.TITLE_QUIZ_TOO_LONG')),
	passingPoint: z
		.string()
		.min(0, t.get('validation.PASSING_POINT_MUST_BE_AT_LEAST_1'))
		.max(100, t.get('validation.PASSING_POINT_MUST_BE_AT_MOST_100')),
	decription: z.string().max(200, t.get('validation.DESCRIPTION_TOO_LONG')),
	thumbnail: z
		.any()
		.refine(
			(file) => file.size <= +import.meta.env.VITE_MAX_FILE_SIZE,
			t.get('validation.THUMBNAIL_MUST_BE_LESS_THAN_5MB')
		)
		.refine((file) => {
			const type = file.type;
			return type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg';
		})
});
