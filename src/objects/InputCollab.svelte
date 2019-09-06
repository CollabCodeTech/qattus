<script>
  export let type = 'text'
  export let name = 'name not defined'
  export let placeholder = 'placeholder not defined'
</script>

<style>
  .input-collab {
    width: 100%;
    border-radius: 5px;
    color: #6c6c6c;
    font-size: 18px;
    padding: 14px 20px;
    border: 2px solid #c4c4c4;
    box-sizing: border-box;
    margin-bottom: 15px;
  }

  .input-collab:nth-last-child(2) {
    margin-bottom: 20px;
  }
</style>

<input class="input-collab" {type} {name} {placeholder} />
