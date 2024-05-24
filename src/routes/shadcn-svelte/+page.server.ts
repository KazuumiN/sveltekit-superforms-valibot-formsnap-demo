import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { schema } from '$lib/schema';

export const load = (async () => {
    const form = await superValidate(valibot(schema));
    return { form };
});

import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, valibot(schema));

        if (!form.valid) {
            // ここでformを返すだけでok
            return fail(400, { form });
        }

        console.log(form.data)

        // Display a success status message
        return message(form, '送信成功しました');
    }
};
