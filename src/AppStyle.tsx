import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.span`
    font-size: 50px;
    font-family: 'Neucha', cursive;
    color: white;
    margin: 40px 0;

    @media (max-width: 767px) {
        margin: 15px 0;
        font-size: 35px;
    }
`;

export const Input = styled.input`
    

`;