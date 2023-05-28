<script lang="ts">
import PostItem from './PostItem.vue'
import postData from '@/data/posts';
  
export default {
  components: { PostItem },
  data() {
    return {
      posts: postData,
    }
  }
}
</script>

<template>
  <h1>Últimas postagens do blog</h1>
  <section>
    <PostItem 
      v-for="item in posts"
      :key="item.id"
      :title="item.title"
      :resumeDescription="item.resumeDescription"
      :id="item.id"
      :postImage="item.postImage"
    />
  </section>
</template>

<style scoped>
section {
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(512px, 1fr));
    grid-gap: 2rem;
  }
}
</style>
