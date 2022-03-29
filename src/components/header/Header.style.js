import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
    display: inline-block;
    background-color: aliceblue;
    padding: 10px 0;
    width: 100%;
    vertical-align: auto;
`;

export const Icon = styled.img`
    height: 40px;
    float: left;
`

export const styledButton = styled.button``;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    padding: 0 50px;
    font-family: 'Lobster', cursive;
    font-size: 20px;
`;
