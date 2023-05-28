<script lang="ts">
export default {
    props: ['title', 'resumeDescription', 'id', 'postImage'],
    data() { 
        return { 
            imagePath: null
        }
    },
    async mounted() {
        this.imagePath = (await this.getPostImage()).default;
    },
    methods: {
        async getPostImage() {
            return await import(`@/assets/${this.postImage}.jpg`)
        }
    },
}
</script>

<template>
    <article>
        <router-link :to="{ name: 'post', params: { id: id } }">
            <h2>{{ title }}</h2>
            <img v-if="imagePath" :src="imagePath" alt="Imagem do post" class="post-image"/>
            <p class="post-resumed-description">{{ resumeDescription }}</p>
        </router-link>
    </article>
</template>

<style scoped>
    article {
        margin-bottom: 2rem;
    }
    .post-resumed-description {
        margin-top: 1rem;
        color: #9c9c9c;
    }
</style>