import React from "react";
import styled from 'styled-components'



export default function Button(){
    const Button = styled.button`
padding: 10px;
cursor: pointer;
border: none;
width: 50%;
border-radius: 10px;
background-color: #0d65c3;
 color: black !important;
margin-top :auto
`
    return(
        <>
        <Button >Register</Button>

        </>

    )

}