import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import '../styles/global.css'
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-gtag'
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import TagCards from '../components/TagCards/TagCards';
import Container from '../components/Container/Container';
import SmallContainer from '../components/Container/SmallContainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TexasMutual from '../components/LatestNews/TexasMutual';
import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import ContentfulPhotoElement from '../components/PageElements/ContentfulPhotoElement';
import ContentfulTextElement from '../components/PageElements/ContentfulTextElement';
import SEO from '../components/SEO';

//import PostDiv from '../components/Posts/PostDiv';

const PostDiv = styled.div`
width:100%;
margin: 10px auto;
.postBodyDiv{
  width:100%;
  display:grid;
  grid-template-columns:70% 30%;
  @media screen and (max-width: 750px){
    grid-template-columns: 1fr;
  }
 .postTextDiv{
  padding: 5px;
  h1{
    margin:0;
  }
  .publishDate{
    margin:0;
  }
  .paragraphText{
    padding: 0;
    font-size: 1em;
    a{
      text-decoration:underline;
      color: 
    }
    ul{
      a{
        text-decoration:underline;
        color: 
      }
      li{
        list-style-type: disc;
      }
    }
    ol{
      li{
        list-style-type: decimal;
      }
    }
  }
 }
}
.donateDiv{
  margin: 10px auto;
  border: 1px solid #003946;
  padding: 20px;
  button{
    width:100%;
    max-width: 200px;
    background-color:#009AA6;
    color:#fff;
    font-size: 18px;
    border-radius: 5px;
    a{
      color:#fff;
      font-size: 24px;
    }
  }
  button: hover{
    background-color:#003946;
  }
}
h2{
  font-size:1em;
}

`

const ImageDiv = styled.div`
width:100%; 
height:0;
margin-top:10px;
padding-bottom:56.25%;
position:relative;
img{
  position:absolute;
  width:100%;
  height:100%;
  border:none;
}
`


const RelatedPostDiv = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
grid-row-gap:5px;
width:100%;
margin:20px auto;
padding:1px;
align-content:center;
justify-items: center;

`

const PostTemplate = ({ data, pageContext }) => {
  const { title, publishDate, heroImage, featuredVideo, body} = data.contentfulPost;
  const { tag, tagTitle } = pageContext;
  const [ ...relatedPosts ] = data.allContentfulPost.edges;
  const sponsorsBlock = data.contentfulSponsorsBlock;
  const tags2 = data.allContentfulTag.edges;
  const descriptionSEO = body.childMarkdownRemark.excerpt;

  function VideoOrImage(){
    if(featuredVideo){
      return <ContentfulVideoElement {...featuredVideo}/>
    }
    return <ImageDiv><img src={`https:${heroImage.file.url}`} alt={heroImage.title}/></ImageDiv>
  }



  return(
    <Container>
       <SEO 
      title={title}
      description={descriptionSEO}
      image={`https:${heroImage.file.url}`}
      />
      <Header>
      <TagList>
         {tags2.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
          <Link to={'/topics'}><p>+ More Topics</p></Link>
      </TagList>
      </Header>
      <SmallContainer>
        {/* <VideoDiv> */}
       {/* <ContentfulVideoElement {...featuredVideo}/> */}
       <VideoOrImage />
       {/* </VideoDiv> */}
       <PostDiv>
        <div className="postBodyDiv">
          <div className='postTextDiv'>
        <h1>{title}</h1>
        <div className='publishDate'>{publishDate}</div>
        <div className='paragraphText' dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}}>
        </div>
        
        {/* <div className='paragraphText'>Last Update: {updatedAt}</div> */}
        <div className='donateDiv'>
          <h2>Our reporting doesn’t happen without you.</h2>
          <p>Did you value this reporting? Then please consider making a donation to Austin PBS. Your gift makes the quality journalism done by the Decibel team possible. Thank you for your contribution.</p>
          <button><OutboundLink href="https://austinpbs.org/donate/?utm_campaign=decibel&utm_source=website&utm_medium=whatcanido">Donate</OutboundLink></button>
          {/* <button><OutboundLink href="http://bycell.co/wjtf">Donate</OutboundLink></button> */}
        </div>
        </div>
        <TexasMutual {...sponsorsBlock} key={sponsorsBlock.id}/>
        </div>

      <h2>More in {tagTitle}:</h2>
      <RelatedPostDiv>
        {relatedPosts.map((relatedPost) => {
          return <TagCards tag={tag} { ...relatedPost.node } />
        })}
      </RelatedPostDiv>
      <a href={`/${tag}`}><p>See all {tagTitle} posts</p></a> 
      </PostDiv>
      </SmallContainer>
      <Footer />
    </Container>
  )
}

export const query = graphql`
  query($slug: String!, $tag: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      title
      slug
      publishDate(formatString: "dddd, MMMM Do YYYY")
      updatedAt(
        formatString: "dddd, MMMM Do YYYY, h:mm a"
        locale: "en-EN")
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
          excerpt(
            pruneLength: 140)
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
      limit: 3
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
    },
    allContentfulTag(
      limit: 10
      sort: { fields: title, order: ASC}
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
export default PostTemplate;


