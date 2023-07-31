import styled from "styled-components";

export const Wrapper = styled.form`
    display: flex;
    padding: 20px;
    width: 90%;
    margin-top: 15px;
    background-color: #d6d65ed9;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    transition: 0.2s;

    &:hover {
        box-shadow: 0 0 5px black;
        transform: scale(1.03);
    }

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
    font-family: 'Arial';

    @media (max-width: 767px) {
        font-size: 15px;
        padding: 2px;
    }
`;

export const SingleTextDone = styled.s`
    padding: 5px;
    border: none;
    font-size: 20px;
    flex: 1; //gwarantuje elastyczność elementu
    font-family: 'Arial';

    &:focus {
        outline: none;
    }

    @media (max-width: 767px) {
        font-size: 15px;
        padding: 2px;
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
