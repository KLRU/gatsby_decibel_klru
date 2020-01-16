import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import TagCards from '../components/TagCards/tagCards';
import FeaturedTagDiv from '../components/TagCards/FeaturedTagDiv';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';

const TagTemplate = ({ data, pageContext }) => {
  //const topicTag = data.contentfulTag
  const posts = data.contentfulTag.post;
  const tags = data.allContentfulTag.edges;
  const { title, slug, topicDescription } = data.contentfulTag;
  const divStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    width:'100%',
    margin: '20px auto',
    //marginTop: '20px',
    alignContent:'center',
    justifyItems:'center'
  };
  const h1Style = {
    textAlign:'center',
    color:'#242323'
  }
  return (
    <Container>
       <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
          <Link to={'/topics'}><p>+ More Topics</p></Link>
      </TagList>
      </Header>
      <h1 style={h1Style}>{title}</h1>
      <FeaturedTagDiv>
      <img src={posts[0].heroImage.fluid.src} alt={posts[0].heroImage.title}/> 
      {/* <iframe src={ `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/decibelatx/videos/${posts[0].featuredVideo.embedCode}/`} />  */}
      <Link to={`${slug}/${posts[0].slug}/`}><p>{posts[0].title}</p></Link>
      </FeaturedTagDiv>
      {/* <p>{posts.featuredVideo.title}</p> */}
      <div><p dangerouslySetInnerHTML={{__html:topicDescription.childMarkdownRemark.html}}></p></div>
    <h2>More stories on this topic:</h2>
    <div style={divStyle}>
      {posts.slice(1).map(post =>(
        <TagCards key={post.id} tag={slug} { ...post } />
      ))}
   
    </div>
    <Footer />
    </Container>
  )
};

export const query = graphql`
  query($slug: String!){
    contentfulTag(slug: {eq: $slug}){
      title
      id
      slug
      topicDescription{
        childMarkdownRemark{
          html
        }
      }
      post{
        id
        title
        slug
        featuredVideo{
          title
          embedCode
        }
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
    },
    allContentfulTag(
      limit: 10
      sort: { fields: title, order: ASC }
    ){
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default TagTemplate;
