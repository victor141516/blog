import matter from 'gray-matter'
import fs from 'fs-extra'
import path from 'path'

const globby = import('globby').then(({ globby }) => globby)

function convertDate(date = new Date().toString()) {
  const jsonDate = new Date(date).toJSON()
  return jsonDate.split('T')[0]
}

function compareDate(obj1, obj2) {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}

async function getPostMDFilePaths() {
  const paths = await (
    await globby
  )(['docs/**/*.md'], {
    ignore: ['node_modules', 'README.md'],
  })
  return paths.filter((item) => item.includes('posts/'))
}

export type Post = {
  frontMatter: {
    date?: string
    title?: string
    tags?: string[]
    description?: string
  }
  regularPath: string
}

export async function getPosts(): Promise<Post[]> {
  const paths = await getPostMDFilePaths()
  const posts = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, 'utf-8')
      const { data } = matter(content)
      data.date = convertDate(data.date)
      return {
        frontMatter: data,
        regularPath: `/${item
          .replace('.md', '.html')
          .replace(/^docs\//, '')
          .replace(/index.html$/, '')}`,
      }
    }),
  )
  posts.sort(compareDate)
  return posts
}
