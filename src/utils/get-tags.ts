const getTags = (posts: any[]): string[] => {
  return [...new Set(posts.flatMap(post => post.frontmatter.tags))]
}


export default getTags
