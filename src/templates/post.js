import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Link } from 'gatsby';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import TagCards from '../components/TagCards/tagCards';
import Container from '../components/Container/Container';
import SmallContainer from '../components/Container/SmallContainer';
import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TexasMutual from '../components/LatestNews/TexasMutual';
//import PostDiv from '../components/Posts/PostDiv';

const PostDiv = styled.div`
width:100%;
margin: 10px auto;
.postBodyDiv{
  width:100%;
  display:grid;
  grid-template-columns:70% 30%;
 .postTextDiv{
  padding: 10px;
  h1{
    margin:0;
  }
  .publishDate{
    margin:0;
  }
  .paragraphText{
    padding: 0;
    font-size: 1em;
  }
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
align-content:center;
justify-items: center;

`

const PostTemplate = ({ data, pageContext }) => {
  const { title, publishDate, heroImage, featuredVideo, body} = data.contentfulPost;
  const { tag, tagTitle } = pageContext;
  const [ ...relatedPosts ] = data.allContentfulPost.edges;
  const sponsorsBlock = data.contentfulSponsorsBlock;
  const tags2 = data.allContentfulTag.edges;

  function VideoOrImage(){
    if(featuredVideo){
      return <ContentfulVideoElement {...featuredVideo}/>
    }
    return <ImageDiv><img width='100%' src={`http:${heroImage.file.url}`} alt={heroImage.title}/></ImageDiv>
  }

  return(
    <Container>
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
        <p className='publishDate'>{publishDate}</p>
        <p className='paragraphText' dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}}></p>
        </div>
        <TexasMutual {...sponsorsBlock} key={sponsorsBlock.id}/>
        </div>
      {/* <h2>Tags:</h2>
      {tags.map((tag) => {
        return <TagItem {...tag} key={tag.id} />
      })} */}

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
    },
    allContentfulTag(
      limit: 10
      sort: { fields: title, order: ASC}
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


