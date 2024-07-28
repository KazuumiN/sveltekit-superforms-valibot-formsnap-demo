import * as v from 'valibot';

export const schema = v.object({
	// メールアドレスの形式であることを検証
	email: v.pipe(v.string(), v.email('メールアドレスの形式で入力してください')),
	// 8文字以上の文字列であることを検証
	password: v.pipe(v.string(), v.minLength(8, '8文字以上で入力してください'))
});
