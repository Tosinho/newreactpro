import React from 'react'
import styled from "styled-components"

const BodyView = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <img src = "images/viewers-marvel.png"/>
                    <video type= "video/mp4"
                    loop = {true}
                    autoplay= {true}
                    playsinline = {true}
                    src = "videos/vision.mp4" />
                </Wrapper>

                <Wrapper>
                    <img src = "images/viewers-marvel.png"/>
                    <video type= "video/mp4"
                    loop = {true}
                    autoplay= {true}
                    playsinline = {true}
                    src = "videos/vision.mp4" />
                </Wrapper>

                <Wrapper>
                    <img src = "images/viewers-marvel.png"/>
                    <video type= "video/mp4"
                    loop = {true}
                    autoplay= {true}
                    playsinline = {true}
                    src = "videos/vision.mp4" />
                </Wrapper>

                <Wrapper>
                    <img src = "images/viewers-marvel.png"/>
                    <video type= "video/mp4"
                    loop = {true}
                    autoplay= {true}
                    playsinline = {true}
                    src = "videos/vision.mp4" />
                </Wrapper>

                <Wrapper>
                <img src = "images/viewers-marvel.png"/>
                    <video type= "video/mp4"
                    loop = {true}
                    autoplay= {true}
                    playsinline = {true}
                    src = "videos/vision.mp4" />
                    
                </Wrapper>
            </Container>
            
        </div>
    )
}

export default BodyView

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 20px;
    margin: 20px;


`

const Wrapper = styled.div`
border: 2px gray solid;
//margin: 20px;
border-radius: 10px;
transition: all 350ms;
box-shadow: gray;
cursor: pointer;position: relative;



img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    

}

video{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    object-fit: cover;
    border-radius: 10px;
    z-index: -1;
    opacity: 0;
}

&:hover{
    transform: scale(1.06);
    border-color: white;
    box-shadow: rgb(0 0 0/68%) 0px 26px 30px-10px;
   video{
    opacity: 1;
   }

   
}
`
