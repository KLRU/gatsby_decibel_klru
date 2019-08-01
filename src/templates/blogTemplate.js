import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

const BlogTemplate = ({data, pageContext}) =>{
  const {title, author, date, blogPostBody, images, tags}=data.contentfulBlogPost;
  return(
    <div>
    <div>{title}</div>
    <div>{date}</div>
    <img src={`http:${images[0].fluid.src}`}/>
    <p dangerouslySetInnerHTML={{__html:blogPostBody.childMarkdownRemark.html}}></p>
    </div>
  )
}

export default BlogTemplate;

export const query = graphql`
  query($slug: String!){
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author
      date(formatString: "MMMM D, YYYY")
      blogPostBody{
        childMarkdownRemark{
          html
        }
      }
      images{
        fluid{
          src
        }
      }
    },
    allContentfulBlogPost{
      edges{
        node{
          title
          slug
          author
          date(formatString: "MMMM D, YYYY")
          blogPostBody{
            childMarkdownRemark{
              html
            }
          }
          images{
            fluid{
              src
            }
          }
          tags{
            id
            title
            slug
          }
        }
      }
    }
  }
`