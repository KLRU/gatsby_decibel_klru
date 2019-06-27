import React from 'react';
import { graphql } from 'gatsby';
import TagList from '../components/TagList';
import VideoElement from '../Components/PageElements/VideoElement';

const PostTemplate = ({ data, pageContext }) =>{
  const { title, publishDate, heroImage, featuredVideo, body, tags }=data.contentfulPost
  return(
    <div>
      <img src={heroImage.fluid.src} alt={heroImage.title} />
      <h1>{title}</h1>
      <p>{publishDate}</p>
      <p dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}}></p>
      {tags && <TagList tags={tags} />}

      <VideoElement {...featuredVideo}/>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      title
      slug
      publishDate(formatString: "MMMM DD YYYY")
      heroImage {
        fluid {
          src
        }
      }
      featuredVideo {
        title
        embedCode
        source
      }
      body {
       childMarkdownRemark{
         html
         excerpt(pruneLength: 320)
       }
      }
      tags{
        title
        slug
      }
    }
  }
`
export default PostTemplate;
