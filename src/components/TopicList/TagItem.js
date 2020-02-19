import React from 'react';
//import styled from 'styled-components';
import { Link } from 'gatsby';

const TagItem = props =>{
  return(
    
    <Link to={`/${props.slug}`}><p>{props.title}</p></Link>
    
  )
}

export default TagItem