import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 50px;
`; 

export const Container = styled.div`
    margin-top: 50px;
    padding: 15px;
    background-color: rgba(102, 124, 48, 0.6);
    border-radius: 4px;
`; 

export const Text = styled.p`
    font-family: 'Playfair Display', serif;
    color: #ABA730;
    font-size: 20px;
`; 

export const Title = styled.h1`
    background: linear-gradient(to bottom, #cfc09f 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#756300 78%); 
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
    font-family: 'Playfair Display', serif;
    position: relative;
    text-transform: uppercase;	
    font-size: 80px;
    margin-bottom: 40pxS;
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
`; 

export const Image = styled.img`
    margin-top: 5px;
    border-radius: 4px;
`;