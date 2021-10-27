import React from 'react'
import styled from 'styled-components'



const Slide = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
`

const SlideItem = styled.li`
width:100%;
margin 0 auto;
`
const Image = styled.img`
width:600px;
heigth: 500px;
`

const Button = styled.button`
color:black;
`

const ButtonNext = styled.button`
color:black;
`

const Slides = props => {
  return (
  
    <Slide>
      {props.images.map(image =>(
      <SlideItem key={image.id} className="slideItem">
        <Image src={image.photo.file.url} alt={image.photo.title} />
        {/* <h3>{image.title}</h3> */}

      </SlideItem>
    ))}
    </Slide>
 
  )
}

//export default Slides;