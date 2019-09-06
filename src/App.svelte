<script>
  import FormCollab from './objects/FormCollab.svelte'
  import TitleCollab from './objects/TitleCollab.svelte'
  import LabelCollab from './objects/LabelCollab.svelte'
  import InputCollab from './objects/InputCollab.svelte'
  import ButtonCollab from './objects/ButtonCollab.svelte'
</script>

<FormCollab>
  <TitleCollab title={'Faça seu cadastro abaixo'} />
  <LabelCollab labelTitle={'Nome Completo'} />
  <InputCollab
    class="input-collab"
    type={'text'}
    name={'name'}
    placeholder={'Seu nome completo'} />
  <LabelCollab labelTitle={'Email'} />
  <InputCollab
    class="input-collab"
    type={'email'}
    name={'email'}
    placeholder={'Seu email'} />
  <LabelCollab labelTitle={'Senha'} />
  <InputCollab
    class="input-collab"
    type={'password'}
    name={'password'}
    placeholder={'Senha com no mínimo 8 digitos'} />
  <LabelCollab labelTitle={'Confirmação de senha'} />
  <InputCollab
    class="input-collab"
    type={'password'}
    name={'repeatPassword'}
    placeholder={'Digite sua senha novamente'} />
  <ButtonCollab
    class="button-collab"
    type={'submit'}
    titleButton={'Cadastre-se'} />
</FormCollab>
