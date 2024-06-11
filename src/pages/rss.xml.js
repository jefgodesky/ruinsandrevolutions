import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET(context) {
  return rss({
    title: 'Ruins & Revolutions Blog',
    description: 'A blog dedicated to better ways to play the tabletop roleplaying game, Ruins & Revolutions.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
    customData: '<language>en-US</language>',
  })
}