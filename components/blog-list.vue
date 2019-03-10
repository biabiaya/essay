<template>
  <div class="blog-list">
    <div class="list-null" v-if="articles.length === 0">空空如也</div>
    <ul class="list-article" v-else>
      <li class="article" v-for="article in articles" :key="article.id">
        <h2 class="article-title">
          <nuxt-link class="title-link" :to="'/detail/' + article.id">
            <span v-if="article.flag === 0">[置顶]</span>
            {{ article.title }}
          </nuxt-link>
        </h2>
        <div class="article-opt" v-if=' render_more == "draft"' >
          <a>编辑</a>
          <a>删除</a>
        </div>
        <p class="article-body">{{ article.content | cutString(180) }}</p>
        <div class="split_line">-----------------------------------------------💗-----------------------------------------------</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'blog-list',
  props: {
    articles: {
      type: Array,
      default: () => []
    },
    render_more: String
  }
}

</script>
<style scoped>
  .split_line {
    color: #b5b5b5;
    width: 680px;
    margin: 20px auto 0;
    text-align: center;
  }
</style>
