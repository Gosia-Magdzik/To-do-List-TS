import styled from "styled-components";

export const Wrapper = styled.form`
    display: flex;
    padding: 20px;
    width: 33%;
    margin-top: 15px;
    background-color: #d6d65ed9;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    @media (max-width: 767px) {
        width: 95%;
        padding: 8px;
    }
`;

export const SingleText = styled.span`
    padding: 5px;
    border: none;
    font-size: 20px;
    flex: 1; //gwarantuje elastyczność elementu
    font-family: 'Neucha', cursive;
`;

export const SingleTextDone = styled.s`
    padding: 5px;
    border: none;
    font-size: 20px;
    flex: 1; //gwarantuje elastyczność elementu
    font-family: 'Neucha', cursive;

    &:focus {
        outline: none;
    }
`;

export const Img = styled.span`
    font-size: 25px;
    cursor: pointer;
    margin-left: 25px;

    @media (max-width: 767px) {
        font-size: 15px;
        margin-left: 15px;
    }
`;


export const Input = styled.input`
    padding: 5px;
    border: none;
    font-size: 20px;
    flex: 1;
    border-radius: 10px;
    margin: 10px;

    &:focus {
        outline: none;
    }

    @media (max-width: 767px) {
        padding: 3px;
        font-size: 15px;
        margin: 8px;
    }

`;
