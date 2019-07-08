import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import TagCards from '../components/TagCards/tagCards';
import Container from '../components/Container/Container';

const TagTemplate = ({ data, pageContext }) => {
  const posts = data.contentfulTag.post;
  const { title, slug } = data.contentfulTag;
  const numberOfPost = posts.length;
  const divStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  };
  return (
    <Container>
    <div>
      <h1>{title}</h1>
      <div style={divStyle}>
    
      {posts.map(post =>(
        <TagCards key={post.id} tag={slug} {...post} />
        /* <img src={post.heroImage.fluid.src}/>
        <Link to={post.slug}><p>{post.title}</p></Link> */
        //</TagCards>
      ))}
      </div>
    </div>
    </Container>
  )
};

export const query = graphql`
  query($slug: String!){
    contentfulTag(slug: {eq: $slug}){
      title
      id
      slug
      post{
        id
        title
        slug
        publishDate(formatString:"MMMM D, YYYY")
        heroImage{
          title
          fluid{
            src
          }
        }
        body{
          body
        }
      }
    }
  }
`

export default TagTemplate;
