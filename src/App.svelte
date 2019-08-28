<script>
	import FormCollab from "./objects/FormCollab.svelte";
	import InputCollab from "./objects/InputCollab.svelte";
</script>

<FormCollab>
	<InputCollab class="input-collab" type={'text'} name={'name'} placeholder={'Seu nome completo'} />
	<InputCollab class="input-collab" type={'email'} name={'email'} placeholder={'Seu email'} />
	<InputCollab class="input-collab" type={'password'} name={'password'} placeholder={'Senha com no mínimo 8 digitos'} />
	<InputCollab class="input-collab" type={'password'} name={'repeatPassword'} placeholder={'Digite sua senha novamente'} />
</FormCollab>


