<template>
  <Layout>
    <div class="article">
      <section class="header">
        <h1>{{ $page.blogPost.title }}</h1>
        <p class="descript">
          {{ $page.blogPost.date }}
        </p>
      </section>
      <section>
        <g-image v-if="$page.blogPost.image" :src="$page.blogPost.image" :alt="$page.blogPost.imageText" />
        <div class="content" v-html="$page.blogPost.content" />
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      description
      date (format: "D.M.Y")
      content
      image
      imageText
    }
  }
</page-query>

<style>
</style>
