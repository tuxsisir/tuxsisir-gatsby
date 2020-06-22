import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <div className='mb-5'>
    <h3 className='mb-0'>
      <Link to={post.frontmatter.slug}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <small>{post.frontmatter.date} ({post.fields.readingTime.text})</small>
  </div>
)
export default PostLink
