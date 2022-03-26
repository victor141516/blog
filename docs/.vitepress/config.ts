import { getPosts } from './server'

const allPosts = getPosts()

/**
 * @type {import('vitepress').UserConfig}
 */
async function config() {
  return {
    title: 'Viti blog',
    description: 'My personal trash dump :D',
    themeConfig: {
      posts: await allPosts,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Tags', link: '/tags' },
        { text: 'About', link: '/about' },
        { text: 'Contact', link: 'https://t.me/victor141516' },
      ],
      sidebar: (await allPosts).map((item) => ({
        text: item.frontMatter.title,
        link: item.regularPath,
      })),
    },
    base: '/',
  }
}

export default config
