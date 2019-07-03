import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const TagItem = props =>{
  return(
    
    <Link to={`/${props.slug}`}><h2>{props.title}</h2></Link>
    
  )
}

export default TagItem