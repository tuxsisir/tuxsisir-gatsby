import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <li>
    <Link className='text-gray-900' to={post.frontmatter.slug}>
      {post.frontmatter.title}
    </Link>
  </li>
)
export default PostLink
