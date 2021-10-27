import React, { useState } from 'react'
import styled from 'styled-components'

const SlideshowContainer = styled.div`
  width: 600px;
  margin: auto;
  overflow: hidden;
  .buttons{
    display: grid;
    grid-template-columns: 50% 50%;
    button{
      width:50px;
    }
    .nxtBtn{
      margin-right:0;
    }
  }
`

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

const Slideshow = (props) => {

const slideList = props;
const images = slideList.images;

const [counter, setCounter] = useState(1);
//const [transition, setTransition] = useState('');

const carouselSlide = document.querySelector('.slideItem');

function handlePrevClick(){
    console.log('clicked')
  }

  function handleNextClick(){
    //carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    //setTransition ('transform 0.4s ease-in-out')
    setCounter(counter + 1)
    console.log(counter)    
  }


  return (
    <SlideshowContainer>
      <Slide>
      {images.map((image)=>(
      <SlideItem key={image.id} className="slideItem">
        <Image src={image.photo.file.url} alt={image.photo.title} />
        {/* <h3>{image.title}</h3> */}

      </SlideItem>
    ))}
    </Slide>
      <div className ='buttons'>
      <button className ='prvBtn' id='prevBtn' onClick={handlePrevClick}>Prev</button>
      <button className ='nxtBtn' id='nextBtn' onClick={handleNextClick}>Next</button>
      </div>
    </SlideshowContainer>
  )
}

//export default Slideshow;
