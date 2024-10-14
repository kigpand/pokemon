import { createGlobalStyle } from "styled-components";

export const mobileWidth = "767px";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        color : ${({ theme }) => theme.textColor};
        transition: 0.5s;
    }
`;
