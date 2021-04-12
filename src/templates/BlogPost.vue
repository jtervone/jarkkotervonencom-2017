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
        <g-image v-if="$page.blogPost.image" :src="$page.blogPost.image" :alt="$page.blogPost.image_text" />
        <div class="content" v-html="$page.blogPost.content" />
      </section>
    </div>
  </Layout>
</template>

<script>
import config from "/gridsome.config.js"

export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.blogPost.description
        },
        {
          key: "og:url",
          name: "og:url",
          content: config.siteUrl + this.$page.blogPost.path
        },
        {
          key: "og:type",
          name: "og:type",
          content: "website"
        },
        {
          key: "og:title",
          name: "og:title",
          content: this.$page.blogPost.title ? this.$page.blogPost.title : ""
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.blogPost.description ? this.$page.blogPost.description : ""
        },
        {
          key: "og:image",
          name: "og:image",
          content: this.$page.blogPost.image ? config.siteUrl + this.$page.blogPost.image.src : ""
        },
        {
          key: "twitter:creator",
          name: "twitter:creator",
          content: "@jarkkotervonen"
        },
      ]
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
      image_text
      path
    }
  }
</page-query>

<style>
</style>
