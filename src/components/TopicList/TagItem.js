import React from 'react';
//import styled from 'styled-components';
import { Link } from 'gatsby';

const TagItem = props =>{
  return(
    
    <li className="topicTag"><Link className="topicTagLink" to={`/${props.slug}`}>{props.title}</Link></li>
    
  )
}

export default TagItem