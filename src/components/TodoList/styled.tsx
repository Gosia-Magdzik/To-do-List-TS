import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
    margin-top: 15px;
`;

export const TodosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 30px;
    background-color: #75a76dc9;
    padding: 15px;
    margin-right: 8px;
    transition: 0.2s;
    width: 95%;
    align-items: center;

    @media (max-width: 767px) {
        padding: 5px;
    }

    &:hover {
        box-shadow: 0 0 5px black;
        transform: scale(1.03);
    }
`;

export const RemoveWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: 30px;
    background-color: #b24a4ae0;
    padding: 15px;
    transition: 0.2s;
    width: 95%;
    align-items: center;

    &:hover {
        box-shadow: 0 0 5px black;
        transform: scale(1.03);
    }

    @media (max-width: 767px) {
        padding: 5px;
    }
`;

export const Title = styled.span`
    margin-bottom: 25px;
    font-size: 30px;
    color: #bcbdc5db;
    text-align: center;
`;