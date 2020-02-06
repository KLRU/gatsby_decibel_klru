import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import styled from 'styled-components'
import TagCards from '../components/TagCards/tagCards';
//import FeaturedTagDiv from '../components/TagCards/FeaturedTagDiv';
import Container from '../components/Container/Container';
import SmallContainer from '../components/Container/SmallContainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import TexasMutual from '../components/LatestNews/TexasMutual';


const TopicIntroDiv =styled.div`
display:grid;
grid-template-columns: minmax(min-content, 70%) 1fr;
grid-template-rows: minmax(max-content, 175px) 1fr;
align-items:center;
padding: 20px;
@media screen and (max-width: 675px){
  grid-template-columns: 1fr;
  padding: 5px;;
}
p{
  line-height: 1.6;
}
`

const MoreStoriesDiv =styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    width: 100%;
    margin: 20px auto:
    align-content:center;
    justify-items:center;
    @media screen and (max-width: 675px){
      grid-template-columns: 1fr;
      margin: 5px 0;
    }

`

const TagTemplate = ({ data, pageContext }) => {
  //const topicTag = data.contentfulTag
  const posts = data.contentfulTag.post;
  const tags = data.allContentfulTag.edges;
  const sponsorsBlock = data.contentfulSponsorsBlock;
  const { title, slug, topicDescription } = data.contentfulTag;
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
      <SmallContainer>
      {/* <FeaturedTagDiv>
      <img src={posts[0].heroImage.fluid.src} alt={posts[0].heroImage.title}/> 
      <Link to={`${slug}/${posts[0].slug}/`}><p>{posts[0].title}</p></Link>
      </FeaturedTagDiv>  */}
      <TopicIntroDiv>
        {/* <p dangerouslySetInnerHTML={{__html:topicDescription.childMarkdownRemark.html}}></p> */}
        <h1 style={h1Style}>{title}</h1>
        <TexasMutual {...sponsorsBlock} key={sponsorsBlock.id}/>
      </TopicIntroDiv>
      <h2>Stories on this topic:</h2>
      <MoreStoriesDiv>
      {posts.map(post =>(
        <TagCards key={post.id} tag={slug} { ...post } />
      ))}
   
    </MoreStoriesDiv>
    </SmallContainer>
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
      filter:{
        title:{
          ne:"Episodes"
        }
      }
    ){
      edges {
        node {
          title
          slug
        }
      }
    },
    contentfulSponsorsBlock{
      id
      title
      sponsors{
        sponsorTitle
        sponsorLink
        image{
          fluid{
            src
          }
        }
      }
    }
  }
`

export default TagTemplate;
