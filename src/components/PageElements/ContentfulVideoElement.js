import React from 'react';

function determineVideoElement(videoSource, videoCode) {
  videoSource = videoSource.toLowerCase();
  if (videoSource === 'youtube') {
    return `https://www.youtube.com/embed/${videoCode}`;
  } else if (videoSource === 'media manager') {
    return `https://video.klru.tv/widget/partnerplayer/${videoCode}`;
  } else if (videoSource === 'vimeo') {
    return `http://player.vimeo.com/video/${videoCode}`;
  } else if (videoSource === 'facebook') {
    return `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/decibelatx/videos/${videoCode}/`;
  }
};

const ContentfulVideoElement = props => {
  const featuredVideo = props;
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "46.25%" /* 16:9 */,
        marginTop: "10px",
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          //top: 0,
          //left: 0,
          width: "100%",
          height: "100%"
        }}
        src={ determineVideoElement(featuredVideo.source, featuredVideo.embedCode) }
        frameBorder="0"
        title={featuredVideo.title}
      />
    </div>
  );
};

export default ContentfulVideoElement;
