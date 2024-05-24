<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { Field, Control, Label, Description, FieldErrors } from 'formsnap';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { schema } from '$lib/schema';

	export let data;

	const form = superForm(data.form, {
		validators: valibotClient(schema)
	});
	const { form: formData, message, enhance } = form;
</script>

{#if $message}<h3>{$message}</h3>{/if}

<form use:enhance class="mx-auto flex max-w-md flex-col" method="POST">
	<Field {form} name="email">
		<Control let:attrs>
			<Label>メールアドレス</Label>
			<input {...attrs} type="email" bind:value={$formData.email} />
		</Control>
		<Description>メールアドレスを入力してください</Description>
		<FieldErrors />
	</Field>
	<Field {form} name="password">
		<Control let:attrs>
			<Label>パスワード</Label>
			<input {...attrs} type="password" bind:value={$formData.password} />
		</Control>
		<Description>パスワードを入力してください</Description>
		<FieldErrors />
	</Field>

	<button>送信</button>
</form>
