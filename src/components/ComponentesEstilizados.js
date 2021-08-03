import React from "react";
import styled from "styled-components";

export default function ComponentesEstilizados(){

    let color = "#000";

    const MiDiv = styled.div`

        margin: 10px;
        text-align: center;
        color: red;
        background-color: ${color};

        &:hover{

            background-color: blue;

        }

    `;

    return (

        <MiDiv>Este div esta estilizado con styled componets</MiDiv>

    );

};