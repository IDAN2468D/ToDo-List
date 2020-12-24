import React from 'react';
import styled from "styled-components";



const H1 = styled.h1`
    font-size: 50px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    color: #666;
    border-bottom: rgb(146, 151, 150) solid 2px;
`;

export default function Header() {
    return (
        <div className="Header">
            <H1>To Do kazam</H1>
        </div>
    )
}
