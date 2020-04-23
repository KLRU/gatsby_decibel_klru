import React from 'react';
//import { Link } from 'gatsby';
import styled from 'styled-components'

const NewsletterDiv = styled.div`
display: block;
width:100%;
box-sizing:border-box;
padding: 100px 0;
margin-bottom: 100px;
h2{
  text-align:center;
}
p{
  text-align:center;
  a{
    color:#009AA6;
  }
}
a{
  margin: 0 auto;
  button{
    width:100%;
    //max-width:300px;
    background-color:#009AA6;
    color:#fff;
    font-size: 18px;
    border-radius: 5px;
  }
  button: hover{
    background-color:#003946;
  }
}
`
const Newsletter = () =>{
  return(
    <NewsletterDiv>
      <h2>Want to Hear from Decibel?</h2>
      <p>Sign Up for <a href='https://www.klrusupport.org/site/SPageNavigator/EmailRegistrationPage.html'>Our Newsletter</a></p>
      <a href='https://www.klrusupport.org/site/SPageNavigator/EmailRegistrationPage.html'><button>Decibel Newsletter</button></a>
    </NewsletterDiv>
  )
}

export default Newsletter;