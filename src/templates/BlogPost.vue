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
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$page.blogPost.path
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:title",
          content: this.$page.blogPost.title ? this.$page.blogPost.title : ""
        },
        {
          property: "og:description",
          content: this.$page.blogPost.description ? this.$page.blogPost.description : ""
        },
        {
          property: "og:image",
          content: this.$page.blogPost.image ? this.$static.metadata.siteUrl + this.$page.blogPost.image.src : ""
        },
        {
          property: "fb:app_id",
          content: "228969710939107"
        },
        {
          property: "twitter:creator",
          content: "@jarkkotervonen"
        },
      ]
    }
  }
}
</script>

<static-query>
  query { metadata { siteName siteUrl } }
</static-query>

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
