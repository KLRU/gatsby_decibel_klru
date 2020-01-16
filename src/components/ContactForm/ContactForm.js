import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'

const ContactFormDiv = styled.div`
width:100%;
padding: 20px;
form{
  display:block;
  input{
    width: 100%;
    padding: 10px 5px;
    margin: 20px 0;
  }
  textarea{
    width: 100%;
    padding: 10px 5px;
    margin: 20px 0;
  }
  button{
    width: 100%;
    padding: 10px 5px;
    margin: 20px 0;
  }
}

`

const ContactForm = props =>{
  return(
    <ContactFormDiv>
      <h1>Contact The Decibel Team</h1>
      <form>
      <input type='text' name='fullname' placeholder='Full Name'></input>
      <br/>
      <input type='email' name='email' placeholder='Email'></input>
      <br/>
      <textarea type='text' name='message' placeholder="Your message for Decibel"></textarea>
      <br/>
      <button>Submit</button>
      </form>
    </ContactFormDiv>
  )
}

export default ContactForm;