import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 90%;
    position: relative;
    align-items: center;
`;

export const InputField = styled.input`
    width: 100%;
    border-radius: 50px;
    padding: 20px 30px;
    font-size: 30px;
    border: none;
    transition: 0.2s;
    box-shadow: inset 0 0 5px gray;
    background-color: #e8e8dfed;

    &:focus {
        box-shadow: 0 0 10px 1000px #0080809c;
        outline: none;
        background-color: #fffff3ed;
        scale: 1.003;
    }
`;

export const Button = styled.button`
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 12px;
    border-radius: 50px;
    right: 0px;
    background-color: #008080;
    color: white;
    border: none;
    font-size: 15px;
    transition: 0.2s all;

    &:hover {
        scale: 0.8;
    }

    &:active {
        scale: 1.07;
        background-color: #02a1a1;
    }
`;