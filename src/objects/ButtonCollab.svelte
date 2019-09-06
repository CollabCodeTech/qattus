<script>
  export let typeButton
  export let titleButton = 'title not defined'
  export let autoComplete = 'off'
</script>

<style>
  .button-collab {
    background-color: #f25a70;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    padding: 14px 20px;
    color: #fff;
    border-radius: 50px;
    border: none;
  }
</style>

<button class="button-collab" type={typeButton} autocomplete={autoComplete}>
  {titleButton}
</button>
