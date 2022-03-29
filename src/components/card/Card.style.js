import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 7px 12px 15px rgba(0,0,0,0.2);
    animation: scaledown .4s linear;
    animation-fill-mode: forwards;

    :hover {
        cursor: pointer;
        z-index: 100;
        animation: ${props => props.hover === 'on' ? 'scale .4s linear' : ''};
        animation-fill-mode: ${props => props.hover === 'on' ? 'forwards' : ''};
    }
    @keyframes scaledown{
        0%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(1.0);
        }
    };
    @keyframes scale{
        0%{
            transform: scale(1);
        }
        100%{
            transform: scale(1.1);
            box-shadow:10px 10px 20px 10px rgba(0,0,0,0.2);
        }
    };
`;

export const ImageContainer = styled.div`
    width: 300px;
    height: 300px;
    background-image: linear-gradient(to bottom right, #f7fbff, #e3f2ff);
    margin: auto;
    border-radius: 10px;
`;

export const Image = styled.div`
    background-image: url(${props => props.image}); 
    width: 300px;
    height: 300px;
    background-repeat: no-repeat;
    background-size: contain; 
    border-radius: 10px;
    box-shadow: 7px 10px 15px #d7dce0;

`;

export const Name = styled.p`
    font-family: 'Lobster', cursive;
    font-weight: bold;
    font-size: large;
`;

export const Info = styled.p`
    font-family: 'Lobster';
    opacity: 0.6;
    font-size: small;
`;