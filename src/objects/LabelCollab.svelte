<script>
  export let labelTitle = 'Title not definied'
  export let forAction
</script>

<style>
  .label-collab {
    color: #6c6c6c;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
  }
</style>

<label class="label-collab" for={forAction}>{labelTitle}</label>
