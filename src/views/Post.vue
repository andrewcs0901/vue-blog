<script lang="ts">
import postData from '@/data/posts';
import { Post } from '@/types';

interface PostData {
  loading: boolean;
  post: Post | null;
  error: string | null;
  imagePath: string | null;
};

export default {
props: ['id'], 
  data():PostData {
    return {
      loading: false,
      post: null,
      error: null,
      imagePath: null
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      { immediate: true }
    )
  },
  methods: {
    async fetchData() {
      this.error = this.post = null
      this.loading = true
      const currentPost = postData.find((post) => post.id === +this.id);
      if(currentPost) {
        this.post = currentPost;
        this.imagePath = (await import(`@/assets/${currentPost.postImage}.jpg`)).default;
      } else {
        this.error = 'Post não encontrado';
      }
    }
  },
}
</script>

<template>
    <div v-if="error">
        <p>{{ error }}</p>
    </div>
    <article>
        <header>
          <h2>{{ post?.title }}</h2>
        </header>
        <section>
          <img v-if="imagePath" :src="imagePath" alt="Imagem do post" class="post-image"/>
          <div v-html="post?.completeDescription"></div>
        </section>
        <section>
            <router-link to="/">Voltar ao início</router-link>
        </section>
    </article>
</template>

<style scoped>
  article {
      max-width: 600px;
      padding: 0 1rem;
  }
  article h2 {
      margin-bottom: 1rem;
  }
  article p {
      margin-bottom: 1rem;
  }
  article section {
      margin-top: 1rem;
  }
  .post-image {
      object-fit: cover;
      width: 100%;
      height: 240px;
  }
</style>