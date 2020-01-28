import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby'
import '../styles/global.css'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import ContactForm from '../components/ContactForm/ContactForm';
import Container from '../components/Container/Container';
import HeroGrid from '../components/HeroGrid';
import MainGrid from '../components/MainGrid';
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight, Index} from 'react-instantsearch-dom';
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
  const sponsorsBlock = data.contentfulSponsorsBlock;
  const [ ...tags ] = data.allContentfulTag.edges;
  const searchClient = algoliasearch('465BL44UJ0', '7e97084438ea03e0abf87df591b68438');
  const Hit = ({ hit }) => (
    <div>
    <p>
      <Highlight attribute="title" hit={hit}/>
    </p>
    <p><Highlight attribute='body.childMarkdownRemark.excerpt' hit={hit}/></p>
    </div>
  );
 

  function DisplayStories(){
    if(twoStoryBlocks){
      return <TwoStorySection>
      {/* <TwoStoryBlock {...twoStoryBlock} key={twoStoryBlock.id}/> */}
      {twoStoryBlocks.map(({node:twoStoryBlock})=>(
        <div>
        <h2>{twoStoryBlock.title}</h2>
        <TwoStories {...twoStoryBlock} />
        </div>
      ))}
      </TwoStorySection>
    }else{
      return null;
    }   
  }
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
      <InstantSearch searchClient={searchClient} indexName="Decibel">
      <SearchBox />
      <Hits hitComponent={Hit}/>
      </InstantSearch>
  
      <FacebookLive {...facebookLive} key={facebookLive.id}/>
  
      <HeroGrid>
        <FeaturedStoryBlock {...featuredStory} key={featuredStory.id}/>
      </HeroGrid>
      <MainGrid>
        <section>
        <FeaturedTopicBlock {...featuredTopic} key={featuredTopic.id}/>
      
          <DisplayStories />


        <LatestNews>
          <h1>More Stories from Decibel:</h1>
          <LatestNewsList>
            {posts.map(({node:post})=>(
              <LatestNewsItem key={posts.id} {...post}/>
            ))}
          </LatestNewsList> 
        </LatestNews>   
        </section>
        <aside>
           <TexasMutual {...sponsorsBlock} key={sponsorsBlock.id}/> 
           <ContactForm />
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
      associatedTopicPost{
        id
        slug
        title
        publishDate(formatString: "MMMM DD, YYYY")
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
      embedCode
      isLive
      iFrameSrc
    },
    contentfulTwoStoryBlock{
      title
      secondaryFeaturedPost{
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        heroImage{
          fluid{
            src
          }
        }
        tags{
          slug
          title
        }
      }
    },
    allContentfulTwoStoryBlock{
      edges{
        node{
          title
          secondaryFeaturedPost{
            title
            slug
            publishDate(formatString: "MMMM DD, YYYY")
            heroImage{
              fluid{
              src
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