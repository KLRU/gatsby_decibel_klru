import React from 'react';
import { Link } from 'gatsby';

const TagNav = props => {
  const allTags = props.data.allContentfulTag.edges
  return (
    <div>
      {allTags.map(tag =>(
        <li key={tag.id}>
          <Link to={`/${tag.slug}/`}>{tag.title}</Link>
        </li>

      ))}
    </div>
  )
};

export default TagNav;
