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
a{
  margin: 0 auto;
  button{
    width:100%;
    //max-width:300px;
    background-color: #003946;
    color:#fff;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #ccc;
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
      <a href='https://www.klrusupport.org/site/SPageNavigator/EmailRegistrationPage.html'><button>Decibel Newsletter</button></a>
    </NewsletterDiv>
  )
}

export default Newsletter;