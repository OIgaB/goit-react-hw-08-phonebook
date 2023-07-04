import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
    border-bottom: 1px solid #A38A00;
`; 

export const Container = styled.header`
    display: flex;
    justify-content: space-between; 
    align-items: center;
`;

export const StyledLink = styled(NavLink)`
    background: linear-gradient(to bottom, #cfc09f 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#3a2c0f 78%); 
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
    font-family: 'Playfair Display', serif;
    position: relative;
    font-size: 30px;
    margin-bottom: 15px;
    font-weight: 400;
    &:after {
        background: none;
        content: attr(data-heading);
        left: 0;
        top: 0;
        z-index: -1;
        position: absolute;
        text-shadow: 
            -1px 0 1px #c6bb9f, 
            0 1px 1px #c6bb9f, 
            5px 5px 10px rgba(0, 0, 0, 0.4),
            -5px -5px 10px rgba(0, 0, 0, 0.4);
    }
    &:hover,
    &:focus,
    &:active {
        background: linear-gradient(to bottom, #FFD700 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#FFD700 78%); 
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: #fff;
        font-family: 'Playfair Display', serif;
        position: relative;
        font-size: 30px;
        margin: 0 0 40px 0;
        font-weight: 400;
    }
    &:first-child {
        margin-right: 20px;
    }
`; 