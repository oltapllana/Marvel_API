<template>
  <div id="app">
    <div class="container">
      <div class="card-list">
        <MarvelCharacters/>
      </div>
    </div>
  </div>
</template>

<script>
import MarvelCharacters from '@/components/marvel-characters.vue';


export default {
  name: 'HomePage',
  components: {
    MarvelCharacters
    }

}
</script>

<style>
  .card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  img {
    object-fit:  cover !important;
  }
</style>
