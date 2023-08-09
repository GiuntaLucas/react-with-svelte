<script>
  export let card;
  export let count;
  export let valueFromInterval;

  const id = Math.random();
</script>

<div class="card">
  <div class="card-title">{card.title}</div>
  <div class="card-content">{card.content}</div>
  <div class="card-action">Svelte prop count: {count} <br> Svelte prop setInterval: {valueFromInterval} <br> Svelte id: {id}</div>
</div>

<style>
  .card {
    height: 400px;
    box-shadow: 0 3px 5px -1px orange, 0 6px 10px orange, 0 1px 18px orange;
    display: flex;
    flex-direction: column;
  }
  .card-title {
    font-size: 1.5rem;
    padding: 1rem;
  }
  .card-content {
    font-size: 1rem;
    padding: 1rem;
    flex-grow: 1;
  }
  .card-action{
    background: #0003;
    color: white;
  }

</style>