<template>
  <h1 class="tags-header">Tags</h1>
  <div class="tags">
    <span
      @click="toggleTag(key)"
      v-for="(item, key) in data"
      class="tag"
      :style="getFontSize(data[key].length)"
      :class="{ activetag: selectTag === key }"
    >
      {{ key }} <span class="tag-length">{{ data[key].length }}</span>
    </span>
  </div>

  <h4 class="header" v-show="selectTag">
    <svg
      t="1641783753540"
      class="fas-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1254"
      width="200"
      height="200"
    >
      <path
        d="M995.126867 592.38l-360.08 360.08a53.333333 53.333333 0 0 1-71.333334 3.68l356.22-356.22a64 64 0 0 0 0-90.506667L495.8402 85.333333h45.573333a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667z m-128 0l-360.08 360.08a53.333333 53.333333 0 0 1-75.426667 0l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667zM341.333533 341.333333a85.333333 85.333333 0 1 0-85.333333 85.333334 85.426667 85.426667 0 0 0 85.333333-85.333334z"
        fill="var(--c-brand)"
        p-id="1255"
      ></path>
    </svg>
    <span class="header-text">{{ selectTag }}</span>
  </h4>
  <a :href="withBase(article.regularPath)" v-for="(article, index) in data[selectTag]" :key="index" class="article">
    <div class="title">
      <div class="title-o"></div>
      {{ article.frontMatter.title }}
    </div>
    <div class="date">{{ article.frontMatter.date }}</div>
  </a>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { Post } from '../../server/index.ts'

function initTags(post: Post[]) {
  const data: any = {}
  for (let i = 0; i < post?.length ?? 0; i++) {
    const element = post[i]
    const tags = element.frontMatter.tags
    if (Array.isArray(tags)) {
      tags.forEach((item) => {
        if (!data[item]) {
          data[item] = []
        }
        data[item].push(element)
      })
    }
  }
  return data
}
const { theme } = useData()
const data = computed(() => initTags(theme.value.posts))
let selectTag = ref('')
const toggleTag = (tag: string) => {
  selectTag.value = tag
}
// set font-size
const getFontSize = (length: number) => {
  let size = length * 0.04 + 0.85
  return { fontSize: `${size}em` }
}
</script>

<style scoped>
.tags-header {
  font-weight: bold;
  padding-bottom: 14px;
}
.tags {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;

  border-bottom: 1px dashed #c7c7c7;
  margin-bottom: 10px;
  padding-bottom: 20px;
}
.tag {
  display: inline-block;
  margin: 6px 8px;
  font-size: 0.85em;
  line-height: 25px;
  transition: 0.4s;
  color: #a1a1a1;
  cursor: pointer;
}
.tag:hover {
  color: var(--c-hover);
}
.activetag {
  color: var(--c-hover);
}
.tag-length {
  color: var(--c-brand);
  font-size: 12px !important;
  position: relative;
  top: -8px;
}
.header {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: left;
}
.fas-icon {
  width: 2rem;
  height: 2rem;
}
.header-text {
  padding-left: 10px;
}
.article {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px;
  color: #666;
  transition: border 0.3s ease, color 0.3s ease;
}
.article:hover {
  text-decoration: none;
  color: var(--c-brand);
}
.date {
  font-family: Georgia, sans-serif;
}
</style>
