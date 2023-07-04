import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
`;

export const Name = styled.h4`
    background: linear-gradient(to bottom, #FFD700 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#F51720 78%); 
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
    font-family: 'Playfair Display', serif;
    position: relative;
    font-size: 30px;
    font-weight: 400;
    margin: 0;
    margin-right: 20px;
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
`; 