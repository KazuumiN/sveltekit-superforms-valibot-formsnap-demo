import { object, string, email, minLength } from 'valibot';

export const schema = object({
	// メールアドレスの形式であることを検証
	email: string([email('メールアドレスの形式で入力してください')]),
	// 8文字以上の文字列であることを検証
	password: string([minLength(8, '8文字以上で入力してください')])
});
