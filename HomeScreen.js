import React from "react"
import styled from "styled-components"
import HeaderComponent from "./HeaderComponent";
import BodyView from "./BodyView";

const HomeScreen = () => {
    return(

        <Container>
            <HeaderComponent />
            <BodyView />
        </Container>

    );

};

export default HomeScreen

const Container = styled.main`
    width: 100vw;
    height:100vh;
    position: relative;
    

    &:before{
        content: "";
        background: url(images/home-background.png) center center / cover fixed no-repeat;

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        Z-index: -1;

    }
`