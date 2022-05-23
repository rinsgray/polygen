import * as styles from"./index.module.css"
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    {data.DJANGO.allPosts.map((blog, i) => (
      <Link key={i} to={blog.slug}>
        <h2>{blog.title}</h2>
        <p>{blog.summary}</p>
      </Link>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    DJANGO {
      allPosts {
        keywords
        slug
        summary
        title
      }
    }
  }
`
