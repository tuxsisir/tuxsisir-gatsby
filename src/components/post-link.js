import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <div class='mb-5'>
    <h3 class='mb-0'>
      <Link to={post.frontmatter.slug}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <small>{post.frontmatter.date}</small>
  </div>
)
export default PostLink
