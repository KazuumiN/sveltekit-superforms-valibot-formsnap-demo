<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	export let data;
	const { form, errors, constraints, message } = superForm(data.form);
</script>

{#if $message}<h3>{$message}</h3>{/if}

<form method="POST">
	<label for="email">メールアドレス</label>
	<input
		type="email"
		name="email"
		aria-invalid={$errors.email ? 'true' : undefined}
		bind:value={$form.email}
		{...$constraints.email}
	/>
	<!-- emailフィールドにエラーがあれば表示する -->
	{#if $errors.email}<span class="text-red-500">{$errors.email}</span>{/if}

	<label for="password">パスワード</label>
	<input
		type="password"
		name="password"
		aria-invalid={$errors.password ? 'true' : undefined}
		bind:value={$form.password}
		{...$constraints.password}
	/>
	<!-- passwordフィールドにエラーがあれば表示する -->
	{#if $errors.password}<span class="text-red-500">{$errors.password}</span>{/if}

	<div><button>送信する</button></div>
</form>
