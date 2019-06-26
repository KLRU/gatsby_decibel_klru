import React from 'react';
import { graphql } from 'gatsby';
import TagList from '../components/TagList';
import Iframe from 'react-iframe';

function determineVideoElement(videoSource, videoCode) {
  videoSource = videoSource.toLowerCase();
  let videoUrl;
  if (videoSource === 'youtube') {
    videoUrl = `https://www.youtube.com/embed/${videoCode}`;
  //   // return <iframe src='https://www.youtube.com/embed/{videoCode}' frameborder='0' allowfullscreen></iframe>;
  } else if (videoSource === 'media manager') {
    videoUrl = `https://video.klru.tv/widget/partnerplayer/${videoCode}`;
  //   // return <iframe src="https://video.klru.tv/widget/partnerplayer/{videoCode}?topbar=false&amp;chapterbar=false&amp;toolbar=true&amp;endscreen=false&amp;start=0&amp;end=0" class="partnerPlayer" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen=""></iframe>;
  } else if (videoSource === 'vimeo') {
    videoUrl = `http://player.vimeo.com/video/${videoCode}`;
  //   // return <iframe src="http://player.vimeo.com/video/{videoCode}?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="640" height="360" frameborder="0" webkitallowfullscreen="" allowfullscreen=""></iframe>;
  } else if (videoSource === 'facebook') {
    videoUrl = `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/decibelatx/videos/${videoCode}/`;
  //   // return <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/decibelatx/videos/{videoCode}/&width=500&show_text=false&appId=274660039863086&height=280" width="500" height="280" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
  }
  return <Iframe url={videoUrl}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
}

const PostTemplate = ({data, pageContext}) =>{
  const{
    title,
    slug,
    publishDate,
    heroImage,
    featuredVideo,
    body,
    tags,
  }=data.contentfulPost
  const postNode = data.contentfulPost
  return(
    <div>
      <img src={heroImage.fluid.src} />
      <h1>{title}</h1>
      {determineVideoElement(featuredVideo.source, featuredVideo.embedCode)}
      <p dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}}></p>
      {tags && <TagList tags={tags} />}
     
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      title
      slug
      publishDate(formatString: "MMMM DD YYYY")
      heroImage {
        fluid {
          src
        }
      }
      featuredVideo {
        title
        embedCode
        source
      }
      body {
       childMarkdownRemark{
         html
         excerpt(pruneLength: 320)
       }
      }
      tags{
        title
        slug
      }
    }
  }
`
export default PostTemplate