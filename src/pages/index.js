import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby'
import '../styles/global.css'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
//import ContactForm from '../components/ContactForm/ContactForm';
import Newsletter from '../components/ContactForm/Newsletter';
import Container from '../components/Container/Container';
import HeroGrid from '../components/HeroGrid';
import MainGrid from '../components/MainGrid';
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import FacebookLive from '../components/FacebookLive/FacebookLive';
import FeaturedStoryBlock from '../components/FeaturedStoryBlock/FeaturedStoryBlock';
import FeaturedTopicBlock from '../components/FeaturedTopicBlock/FeaturedTopicBlock'
//import ContentfulPhotoElement from '../components/PageElements/ContentfulPhotoElement';
//import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import LatestNews from '../components/LatestNews/LatestNews';
import LatestNewsItem from "../components/LatestNews/LatestNewsItem"
import LatestNewsList from "../components/LatestNews/LatestNewsList"
import Footer from '../components/Footer/Footer';
import TexasMutual from '../components/LatestNews/TexasMutual';
import TwoStorySection from '../components/TwoStoryBlock/TwoStorySection';
import TwoStories from '../components/TwoStoryBlock/TwoStoryBlock';

const IndexPage = ({ data }) => {
  const posts = data.allContentfulPost.edges;
  const featuredStory = data.contentfulFeaturedStoryBlock;
  const featuredTopic = data.contentfulFeaturedTopicBlock;
  const facebookLive = data.contentfulFacebookLiveEvent;
  //const twoStoryBlock = data.contentfulTwoStoryBlock;
  const twoStoryBlocks = data.allContentfulTwoStoryBlock.edges;
  //const twoStoryPosts = data.allContentfulTwoStoryBlock.secondaryFeaturedPost;
  const sponsorsBlock = data.contentfulSponsorsBlock;
  const [ ...tags ] = data.allContentfulTag.edges;

 
  return (
    <Container>
      <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
           <Link to={'/topics'}><p>+ All Topics</p></Link>
      </TagList>
      </Header>
  
      <FacebookLive {...facebookLive} key={facebookLive.id}/>
  
      <HeroGrid>
        <FeaturedStoryBlock {...featuredStory} key={featuredStory.id}/>
      </HeroGrid>
      <MainGrid>
        <section>
        <FeaturedTopicBlock {...featuredTopic} key={featuredTopic.id}/>
      
        <TwoStorySection>    
      {/* <TwoStoryBlock {...twoStoryBlock} key={twoStoryBlock.id}/> */}
      {twoStoryBlocks.map(({node:twoStoryBlock})=>(
        <div>
        <h2 className='blockTitle'>{twoStoryBlock.title}</h2>
       
          <TwoStories {...twoStoryBlock} />

        
        </div>
      ))}
      </TwoStorySection>


       <LatestNews>
          <h1>More Stories from Decibel:</h1>
          <LatestNewsList>
            {posts.map(({node:post})=>(
              <LatestNewsItem key={posts.id} {...post}/>
            ))}
          </LatestNewsList> 
          <Link to={'/archive'} className='seeMoreButton'><button>See More</button></Link>
        </LatestNews>
        </section>
        <aside>
           <TexasMutual {...sponsorsBlock} key={sponsorsBlock.id}/> 
           <Newsletter />
           <div>
            <div>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="DecibelAtx"
                options={{height: 600}}
                //onComplete={action}
                />
            </div>
          </div> 
        </aside>
      </MainGrid>
           
    <Footer />
    </Container>
  )
};

export const query = graphql`
  query {
    allContentfulPost( 
      limit: 5
      filter:{
        featuredStory:{
          ne: true
        }
      }
      sort: { fields: [publishDate], order: DESC }
     ) {
      edges {
        node {
          title
          slug
          id
          heroImage {
            fluid {
              src
            }
          }
          publishDate(formatString: "MMMM DD, YYYY")
          featuredVideo {
            title
            embedCode
            source
          }
          body {
            childMarkdownRemark {
              html
              excerpt(
                format: HTML
                pruneLength: 140)
            }
          }
          tags {
            title
            slug
            topicDescription{
              childMarkdownRemark{
                html
              }
            }
          }
        }
      }
    },
    allContentfulTag(
      limit: 10
      sort: { fields: title, order: ASC  }
    ){
      edges {
        node {
          title
          slug
          topicDescription{
            childMarkdownRemark{
              html
            }
          }
        }
      }
    },
    contentfulFeaturedTopicBlock{
      title
      id
      featuredTopicImage{
        fluid{
          src
        }
      }
      featuredTopicTag{
        title
        slug
      }
      shortTopicDescription{
        childMarkdownRemark{
          html
        }
      }
    },
    contentfulFeaturedStoryBlock{
      id
      title
      storyPostDate(formatString: "MMMM DD, YYYY")
      shortDescription{
        childMarkdownRemark{
          html
        }
      }
      heroImage{
        fluid{
          src
        }
      }
      associatedPost{
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        heroImage{
          fluid{
            src
          }
        }
        featuredVideo{
          title
          embedCode
          source
        }
        tags{
          slug
          title
        }
      }
    },
    contentfulFacebookLiveEvent{
      title
      isLive
      videoLink{
        embedCode
        source
      }
    },
    contentfulTwoStoryBlock{
      title
      displayBlock
      secondaryFeaturedPost{
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        heroImage{
          title
          description
          fluid{
            src
          }
        }
        featuredVideo{
          embedCode
          title
          source
        }
        body{
          childMarkdownRemark{
            excerpt(
              format: HTML
              pruneLength: 140)
          }
        }
        tags{
          slug
          title
        }
      }
    },
    allContentfulTwoStoryBlock(
      filter:{
        displayBlock:{
          ne: false
        }
      }
    ){
      edges{
        node{
          title
          displayBlock
          secondaryFeaturedPost{
            title
            slug
            publishDate(formatString: "MMMM DD, YYYY")
            heroImage{
              title
              description
              fluid{
              src
              }
            }
            featuredVideo{
              embedCode
              title
              source
            }
            body{
              childMarkdownRemark{
                excerpt(
                  format: HTML
                  pruneLength: 140)
              }
            }
          tags{
            slug
            title
          }
          }
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

export default IndexPage;