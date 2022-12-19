<template>
  <div class="card">
  <router-link :to="'/single-news/'+ cardSlug" >
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="cardImage" :alt="cardTitle">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{cardTitle}}</p>
      </div>
    </div>

    <div class="content">
      <div v-html="cardContent"></div>
      <time datetime="2016-1-1">{{cardDate}}</time>
    </div>
  </div>
</router-link>
</div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    cardTitle: String,
    cardContent: String,
    cardImage: String,
    cardDate: String,
    cardSlug: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
