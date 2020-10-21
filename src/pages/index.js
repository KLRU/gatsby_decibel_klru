import React from 'react';
//import {Helmet} from "react-helmet";
import { graphql } from 'gatsby';
import { Link } from 'gatsby'
import '../styles/global.css'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
//import ContactForm from '../components/ContactForm/ContactForm';
import Newsletter from '../components/ContactForm/Newsletter';
import Container from '../components/Container/Container';
import HeroGrid from '../components/HeroGrid';
import HomepageHero from '../components/Homepage/HomepageHero';
import MainGrid from '../components/MainGrid';
import Header from '../components/Header/Header';
//import ModalPopUp from '../components/Modal/ModalPopUp';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import FacebookLive from '../components/FacebookLive/FacebookLive';
import FeaturedStoryBlock from '../components/FeaturedStoryBlock/FeaturedStoryBlock';
//import FeaturedTopicBlock from '../components/FeaturedTopicBlock/FeaturedTopicBlock'
//import ContentfulPhotoElement from '../components/PageElements/ContentfulPhotoElement';
//import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import LatestNews from '../components/LatestNews/LatestNews';
import LatestNewsItem from "../components/LatestNews/LatestNewsItem"
import LatestNewsList from "../components/LatestNews/LatestNewsList"
import Footer from '../components/Footer/Footer';
import TexasMutual from '../components/LatestNews/TexasMutual';
import TwoStorySection from '../components/TwoStoryBlock/TwoStorySection';
import TwoStories from '../components/TwoStoryBlock/TwoStoryBlock';
import SEO from '../components/SEO';

const IndexPage = ({ data }) => {
  const posts = data.allContentfulPost.edges;
  const featuredStory = data.contentfulFeaturedStoryBlock;
  const pageContent = data.contentfulHomepage;
  //const featuredTopic = data.contentfulFeaturedTopicBlock;
  const facebookLive = data.contentfulFacebookLiveEvent;
  //const twoStoryBlock = data.contentfulTwoStoryBlock;
  const twoStoryBlocks = data.allContentfulTwoStoryBlock.edges;
  //const twoStoryPosts = data.allContentfulTwoStoryBlock.secondaryFeaturedPost;
  const sponsorsBlock = data.contentfulSponsorsBlock;
  const [ ...tags ] = data.allContentfulTag.edges;

 
  return (
    <Container>
      {/* <Helmet>
      <script src="https://elections.ap.org/widgets/js/resizer.client.min.js" type="text/javascript"></script>
      </Helmet> */}
      <SEO />
      <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
           <Link to={'/topics'}><p>+ All Topics</p></Link>
      </TagList>
      </Header>
        
      {/* <div style={{height: 600,}}>
      <iframe id="iframe_f18fe77f724d031d6f16af26e986f047" style={{overflow: "hidden", minWidth: "100%", height:"100%", border: "none"}} src="https://elections.ap.org/widgets/content/f18fe77f724d031d6f16af26e986f047" width="100%" height="100%" frameborder="1" allowfullscreen="allowfullscreen" onload="iFrameResize({}, '#iframe_f18fe77f724d031d6f16af26e986f047')"></iframe>
      </div>   */}
      

      <FacebookLive {...facebookLive} key={facebookLive.id}/>
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
      filter:{
        slug:{
          nin: ["episodes", "live"] 
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
      associatedTopicPost{
        id
        slug
        title
        publishDate
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
          file{
            url
          }
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
      post{
        title
        slug
        id
        tags{
          title
          slug
        }
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