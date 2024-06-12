import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection('posts')
  return rss({
    title: 'Ruins & Revolutions Blog',
    description: 'A blog dedicated to better ways to play the tabletop roleplaying game, Ruins & Revolutions.',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: '<language>en-US</language>',
  })
}