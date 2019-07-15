import React from 'react';
import { graphql } from 'gatsby';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import TagCards from '../components/TagCards/tagCards';
import Container from '../components/Container/Container';
import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';

const PostTemplate = ({ data, pageContext }) => {
  const { title, publishDate, heroImage, featuredVideo, body, tags } = data.contentfulPost;
  const { tag, tagTitle } = pageContext;
  const [ ...relatedPosts ] = data.allContentfulPost.edges;

  const divStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  };

  return(
    <Container>
      <h1>{title}</h1>
      <p>{publishDate}</p>
      {/* <ContentfulVideoElement {...featuredVideo}/> */}
      <p dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}}></p>

      <h2>Tags:</h2>
      {tags.map((tag) => {
        return <TagItem {...tag} key={tag.id} />
      })}

      <h2>More in {tagTitle}:</h2>
      <div style={divStyle}>
        {relatedPosts.map((relatedPost) => {
          return <TagCards tag={tag} { ...relatedPost.node } />
        })}
      </div>
      <a href={`/${tag}`}><p>See all {tagTitle} posts</p></a> 
    </Container>
  )
}

export const query = graphql`
  query($slug: String!, $tag: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      title
      slug
      publishDate(formatString: "MMMM D, YYYY")
      heroImage {
        file {
          url
        }
      }
      featuredVideo {
        title
        source
        embedCode
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      tags {
        id
        title
        slug
        post {
          title
        }
      }
    }
    allContentfulPost(
      limit: 3,
      filter: {
        tags: {
          elemMatch: {
            slug: {
              eq: $tag
            }
          }
        },
        slug: {
          ne: $slug
        }
      }
    ) {
      edges {
        node {
          id
          title
          slug
          heroImage {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
export default PostTemplate;


