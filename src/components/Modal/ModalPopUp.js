import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import DecibelWhiteLOGO from '../../images/Decibel-Logo-AustinPBS-White.png'
import DecibelBlueLOGO from '../../images/Decibel-Logo-AustinPBS-Blue.png'
import { OutboundLink } from 'gatsby-plugin-gtag'



const ModalContent = styled.div`
  display:grid;
  justify-items:center;
  .closeButton{
    width:100px;
    background-color:#fff;
    color:#000;
    font-size: 14px;
    border-radius: 5px;
  }
  .donateButton{
    width:100%;
    max-width: 200px;
    background-color:#009AA6;
    color:#fff;
    font-size: 18px;
    border-radius: 5px;
    a{
      color:#fff;
      font-size: 24px;
    }
  }
  button: hover{
    background-color:#003946;
  }
 
 `


const ModalPopUp = props => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const imagesAr = [`${DecibelBlueLOGO}`, `${DecibelWhiteLOGO}`];

  function GetRandomImage() {
    const num = Math.floor(Math.random() * imagesAr.length);
    var img = imagesAr[num];
    return <img src={img} />
  }
  return(
    <div>
      <Modal
      // className='modalContent'
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 57, 70, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '15%',
          left: '15%',
          right: '15%',
          bottom: '10%',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      }}
      isOpen={modalIsOpen} 
      onRequestClose={() => setModalIsOpen(false)}>
        <ModalContent> 
        
        <h1>Hello</h1>
        <div>
        <GetRandomImage />
        </div>
        <button className='donateButton'><OutboundLink href="https://austinpbs.org/donate">Donate</OutboundLink></button>
        <button className='closeButton' onClick={() => setModalIsOpen(false)}>Close</button>
        </ModalContent>
      </Modal>
    </div>
  )
}

//export default ModalPopUp;