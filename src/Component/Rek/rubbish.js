import React, {useState,useEffect, useRef}from 'react'
import styled from "styled-components"

const HomeScreen =()=>{
  const textColor1=useRef();
  const textColor2=useRef();
  const textColor3=useRef();
  const [counter,setCounter]=useState(0);

const mycolor=["#1f82e8","black","black"]
const mycolor1=["#1f82e8","#935bc0","black"]
const mycolor2=["#1f82e8","black","#ae395a"]

useEffect(()=>{
  textColor1.current.style.color= mycolor[counter % mycolor.lenght];
  textcolor1.current.style.transition = 'all 350ms'
  textColor2.current.style.color= mycolor[counter % mycolor.lenght];
  textcolor3.current.style.transition = 'all 350ms'

  textColor3.current.style.color= mycolor[counter % mycolor.lenght];
  textcolor3.current.style.transition = 'all 350ms'
},[counter]);


  useEffect(()=>{
    setInterval(()=>{
      setCounter((el)=> el + 1);
    }, 3000)
  },[]);

  return(
    <Container>
      <Wrapper>
        
        <Text1 ref={textcolor}>Home Screen</Text1>
        <Text2>Develop</Text2>
        <Text3>ship</Text3>
<BLock>Peter</BLock>
      </Wrapper> 
    </Container>
  );
  };

  

export default HomeScreen


const Text1= styled.div`
font-size:150px;
font-weight:bold;
font-family:poppins
letter-spacing:8px

`;
const Text2= styled.div`
font-size:150px;
font-weight:bold;
font-family:poppins
letter-spacing:8px
background
`;
const Text3= styled.div`
font-size:150px;
font-weight:bold;
font-family:poppins
letter-spacing:8px
`;

const Block= styled.div`
height70%:;
width:60%;
background: linear-CanvasGradient(90deg,red,blue);
`;
const Container= styled.div`
display:flex;
width:100%;
height:50rem;
justify-content:center;
align-items:center;
`;
const Wrapper= styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
align-items:center;
justify-content:canter;
`;

const Text= styled.div`
font-size:100px;
font-weight:bold;
background:bold
color:linear-gradient;
color:black;

`;
