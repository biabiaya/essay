<template>
  <div class="index">
    <blog-list :articles="allArticles" />
    <wmui-pagination 
    :limit="limit" 
    :total="total" 
    :currentPage="currentPage"
    @pageClick="pageClick"/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  async fetch({ store, route }) {
    await store.dispatch('STICK_ARTICLES')
    await store.dispatch('ARTICLES', 1)
  },
  data() {
    return {
      currentPage: Number(this.$route.params.id) || 1
    }
  },
  head() {
    return {
      title: this.user.nickname
    }
  },
  computed: {
    ...mapState([
      'user',
      'articles',
      'stickArticles',
      'total',
      'limit',
    ]),
    allArticles() {
      return this.stickArticles.concat(this.articles)
    }
  },
  methods: {
    pageClick(i) {
      this.$router.push({
        name: 'page-id',
        params: {
          id: i
        }
      })
    }
  }
}

</script>
