import React from 'react';
import {Helmet} from "react-helmet";
import { graphql } from 'gatsby';
import { Link } from 'gatsby'
import '../styles/global.css'
//import { TwitterTimelineEmbed } from 'react-twitter-embed';
//import ContactForm from '../components/ContactForm/ContactForm';
import Newsletter from '../components/ContactForm/Newsletter';
import Container from '../components/Container/Container';
//import HeroGrid from '../components/HeroGrid';
import HomepageHero from '../components/Homepage/HomepageHero';
import MainGrid from '../components/MainGrid';
import Header from '../components/Header/Header';
//import ModalPopUp from '../components/Modal/ModalPopUp';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
//import FacebookLive from '../components/FacebookLive/FacebookLive';
//import FeaturedStoryBlock from '../components/FeaturedStoryBlock/FeaturedStoryBlock';
//import FeaturedTopicBlock from '../components/FeaturedTopicBlock/FeaturedTopicBlock'
//import ContentfulPhotoElement from '../components/PageElements/ContentfulPhotoElement';
//import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import LatestNews from '../components/LatestNews/LatestNews';
import LatestNewsItem from "../components/LatestNews/LatestNewsItem"
import LatestNewsList from "../components/LatestNews/LatestNewsList"
import Footer from '../components/Footer/Footer';
// import TexasMutual from '../components/LatestNews/TexasMutual';
//import TwoStorySection from '../components/TwoStoryBlock/TwoStorySection';
//import TwoStories from '../components/TwoStoryBlock/TwoStoryBlock';
import SEO from '../components/SEO';

const IndexPage = ({ data }) => {
  const posts = data.allContentfulPost.edges;
  //const featuredStory = data.contentfulFeaturedStoryBlock;
  const pageContent = data.contentfulHomepage;
  //const featuredTopic = data.contentfulFeaturedTopicBlock;
  //const facebookLive = data.contentfulFacebookLiveEvent;
  //const twoStoryBlock = data.contentfulTwoStoryBlock;
  //const twoStoryBlocks = data.allContentfulTwoStoryBlock.edges;
  //const twoStoryPosts = data.allContentfulTwoStoryBlock.secondaryFeaturedPost;
  //const sponsorsBlock = data.contentfulSponsorsBlock;
  const [ ...tags ] = data.allContentfulTag.edges;

 
  return (
    <Container>
      <Helmet>

      </Helmet> 

      <SEO />
      <div className ='skipLink'>
      <a href='#mainContent'>Skip to Main Content</a>
      </div>
      <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
           <li className ="topicTag"><Link className="topicTagLink" to={'/topics'}>+ All Topics</Link></li>
      </TagList>
      </Header>
        
    {/* <FacebookLive {...facebookLive} key={facebookLive.id}/> */}
      {/* <ModalPopUp /> */}
      {/* <HeroGrid>
        <FeaturedStoryBlock {...featuredStory} key={featuredStory.id}/>
      </HeroGrid> */}
      <HomepageHero {...pageContent} key={pageContent.id}/>
      <MainGrid>
        <section>
        {/* <FeaturedTopicBlock {...featuredTopic} key={featuredTopic.id}/> */}
      
       {/* <TwoStorySection>    
      {twoStoryBlocks.map(({node:twoStoryBlock})=>(
        <div>
        <h2 className='blockTitle'>{twoStoryBlock.title}</h2>
       
          <TwoStories {...twoStoryBlock} />

        
        </div>
      ))}
      </TwoStorySection> */}


       <LatestNews>
          <h2>More Stories from Decibel:</h2>
          <LatestNewsList>
            {posts.map(({node:post})=>(
              <LatestNewsItem key={posts.id} {...post}/>
            ))}
          </LatestNewsList> 
          <Link to={'/archive'} className='seeMoreButton'><button>See More</button></Link>
        </LatestNews>
        </section>
        <aside>
           {/* <TexasMutual {...sponsorsBlock} key={sponsorsBlock.id}/>  */}
           <Newsletter />
           <div>
          {/* <div>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="austinpbs"
                options={{height: 600}}
                />
            </div>  */}
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
          author
          heroImage {
            description
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
          topicDescription{
            childMarkdownRemark{
              html
            }
          }
        }
      }
    },
    contentfulHomepage{
      title
      mainStory{
        title
        slug
        heroImage{
          description
          file{
            url
          }
        }
        excerpt
        body {
          childMarkdownRemark {
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
      sideStories{
        title
         slug
        heroImage{
          description
          file{
            url
          }
        }
        excerpt 
        body {
          childMarkdownRemark {
                excerpt(
                  format: HTML
                  pruneLength: 50)
              }
        }
        tags{
          slug
          title
        }
      }
    },
    allContentfulSlideshow{
      edges{
        node{
          title
          images{
            title
            photo{
              title
              description
              file{
                url
              }
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
          description
          fluid{
            src
          }
        }
      }
    }
  }
`

export default IndexPage;