import React from 'react';
//import { Link } from 'gatsby';
import styled from 'styled-components'

const NewsletterDiv = styled.div`
display: block;
width:100%;
box-sizing:border-box;
padding: 50px 0;
margin-bottom: 50px;
h2{
  text-align:center;
}
p{
  text-align:center;
  a{
    color:#003946;
    text-decoration:underline;
  }
}
button{
  width:100%;
    background-color: #003946;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #ccc;
  a{
   display: block;
    width:100%;
    color:#fff;
    font-size: 18px;
    
  }
  button: hover{
    background-color:#009AA6;
  }
}
`
const Newsletter = () =>{
  return(
    <NewsletterDiv>
      <h2>Want to Hear from Decibel?</h2>
      <p>Sign Up for <a href='https://www.klrusupport.org/site/SPageNavigator/EmailRegistrationPage.html'>Our Newsletter</a></p>
      <button><a href='https://www.klrusupport.org/site/SPageNavigator/EmailRegistrationPage.html'>Decibel Newsletter</a></button>
    </NewsletterDiv>
  )
}

export default Newsletter;