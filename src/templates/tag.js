import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { orderBy } from 'lodash';
import moment from 'moment';
import styled from 'styled-components'
import '../styles/global.css'
import TagCards from '../components/TagCards/TagCards';
//import FeaturedTagDiv from '../components/TagCards/FeaturedTagDiv';
import Container from '../components/Container/Container';
//import SmallContainer from '../components/Container/SmallContainer';
import MainGrid from '../components/MainGrid';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import TexasMutual from '../components/LatestNews/TexasMutual';
import SEO from '../components/SEO';


const TopicIntroDiv =styled.div`
display:grid;
//grid-template-columns: minmax(min-content, 70%) 1fr;
//grid-template-rows: minmax(max-content, 175px) 1fr;
//align-items:center;
//padding: 20px;
@media screen and (max-width: 675px){
  grid-template-columns: 1fr;
  padding: 5px;;
}
p{
  line-height: 1.6;
}
`
const TitleIntro = styled.div`
display: block;
div{
  width:100%;
  max-width:1000px;
  margin: 0 auto;
  margin-bottom: 10px;
  text-align:center;
  a{
    font-weight: bold;
  }
}
`
const MoreStoriesDiv =styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
    width: 100%;
    align-content:center;
    justify-items:center;
    @media screen and (max-width: 675px){
      grid-template-columns: 1fr;
      margin: 5px 0;
    }

`

const TagTemplate = ({ data, pageContext }) => {
  //const topicTag = data.contentfulTag
  //const posts = data.contentfulTag.post;
  const posts = orderBy(
    data.contentfulTag.post,
    // eslint-disable-next-line
    [object => new moment(object.publishDateISO)],
    ['desc']
  )
  const tags = data.allContentfulTag.edges;
  const sponsorsBlock = data.contentfulSponsorsBlock;
  const { title, slug, topicDescription} = data.contentfulTag;
  const h1Style = {
    textAlign:'center',
    color:'#242323',
    marginBottom: '50px'
  }
  function ShowPost(){
    if(posts){
       return <MoreStoriesDiv>{posts.map(post =>(
        <TagCards key={post.id} tag={slug} { ...post } />
      ))}</MoreStoriesDiv>
    }else{
      return <div><h2>There are no post for this Topic.</h2></div>
    }
  }

  function ShowDescription(){
    if(topicDescription){
      return <div dangerouslySetInnerHTML={{__html:topicDescription.childMarkdownRemark.html}}></div> 
    }else{
     return <div></div>
    }
  }
  return (
    <Container>
      <SEO 
      title={title}/>
       <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
           <li className ="topicTag"><Link className="topicTagLink" to={'/topics'}>+ All Topics</Link></li>
      </TagList>
      </Header>
      <TitleIntro>
      <h1 style={h1Style}>{title}</h1> 
      <ShowDescription />
      </TitleIntro>
      <MainGrid>
      <section>
      <MoreStoriesDiv>
      {/* <h2>Stories on this topic:</h2> */}
      {/* {posts.map(post =>(
        <TagCards key={post.id} tag={slug} { ...post } />
      ))} */}
    <ShowPost /> 
    </MoreStoriesDiv>
    </section>
    <aside>
      <TopicIntroDiv>
        <TexasMutual {...sponsorsBlock} key={sponsorsBlock.id}/>
      </TopicIntroDiv>
      </aside>
    </MainGrid>
    <Footer />
    </Container>
  )
};

export const query = graphql`
  query($slug: String!){
    contentfulTag(slug: {eq: $slug}
      ){
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
        publishDateISO: publishDate(formatString: "YYYY-MM-DD")
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
        slug:{
          nin: ["episodes", "live", "decibel-dialogue"] 
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
