import styled from "styled-components";

export const StyledButton = styled.div`
    display: ${props => props.display || 'inline'};
    text-decoration: none;
    padding: 0 50px;
    font-family: 'Lobster', cursive;
    font-size: 20px;
    cursor: pointer;
`;
