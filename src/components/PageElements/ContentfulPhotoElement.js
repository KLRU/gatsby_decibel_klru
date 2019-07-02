import React from 'react';

const ContentfulPhotoElement = props => {
  return (
    <div>
      <img src={`https:${props.photo.file.url}`} alt={props.photo.title} />
    </div>
  )
};

export default ContentfulPhotoElement;
