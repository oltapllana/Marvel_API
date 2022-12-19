<template>
  <div id="app">
    <div class="container">
      <div class="card-list">
        <CardItem v-for="news in newsList" :key="news.id"
          :cardTitle="news.title.rendered"
          :cardContent="news.excerpt.rendered"
          :cardImage="news._embedded['wp:featuredmedia'][0].source_url"
          :cardDate="news.date"
          :cardSlug="news.slug"
        >
        </CardItem>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from '../components/CardItem.vue';

export default {
  name: 'HomePage',
  components: {
    CardItem
  },
  data() {
    return {
      newsList: []
    }
  },
  methods : {
    fetchNews() {
      fetch('https://telegrafi.com/wp-json/wp/v2/posts?_embed=1')
      .then(response => response.json())
      .then(data => {
        this.newsList = data;
        console.log(this.newsList);
      })
    }
  },
  mounted() {
    this.fetchNews();
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
