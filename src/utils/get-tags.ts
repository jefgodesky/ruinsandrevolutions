const getTags = (posts: any[]): string[] => {
  return [...new Set(posts.flatMap(post => post.data.tags))]
}


export default getTags
