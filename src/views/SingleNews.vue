<template>
  <article class="single-article">
    <div class="container">
      <div class="single-article__image">
        <img :src="articleImage" alt="">
      </div>
      <div class="single-article__content content">
        <div v-html="articleContent" > </div>
      </div>
    </div>
  </article>

</template>

<script>
export default {
  name: 'SingleNews',
  data() {
    return {
      articleContent: '',
      articleImage: ''
    }
  },
  methods: {
    fetchSingleNews(newsID) {
      fetch('https://telegrafi.com/wp-json/wp/v2/posts/?_embed=1&slug=' + newsID)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.articleContent = data[0].content.rendered;
        this.articleImage = data[0]._embedded['wp:featuredmedia'][0].source_url;
      })
    }
  },
  mounted() {
    this.fetchSingleNews(this.$route.params.id);
  }
}
</script>

<style>
.single-article {
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: left;
}
</style>