<template>
  <Layout>
    <template #page-top>
      <h1 class="mb-4 mt-4 md:mt-8">{{ page.title }}</h1>
    </template>
    <template #home-features>
      <div class="flex flex-col justify-center px-1 sm:px-2 mx-auto mt-4 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3">
        <a
          v-for="post in theme.posts"
          :key="post.frontMatter.date + post.frontMatter.title"
          :href="post.regularPath"
          class="w-full h-20 rounded-lg border-2 border-brand-base hover:bg-brand-dark hover:-translate-y-1 hover:shadow-md transition-all px-3 py-2 mb-4"
        >
          <article class="h-full flex flex-col">
            <div class="flex-1 flex">
              <span class="flex-1 text-lg">{{ post.frontMatter.title }}</span>
              <span class="text-sm">{{ post.frontMatter.date }}</span>
            </div>
            <div class="ml-auto">
              <span
                v-for="tag in post.frontMatter.tags"
                :key="tag"
                class="text-xs rounded bg-brand-dark px-1 py-px ml-1"
                >🏷️{{ tag }}</span
              >
            </div>
          </article>
        </a>
      </div>
    </template>
  </Layout>
</template>
<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const { theme, page } = useData()
</script>
