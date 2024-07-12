import React from 'react';
import styled from 'styled-components';

export type ButtonType = {
    title: string,
    onClick: () => void,
    disabled?: boolean
}

export const Button = ({title, onClick, disabled} : ButtonType) => {
    const onClickHandler = () =>{
        onClick();
    }
    return (
        <div>
            <ButtonStyled onClick={onClickHandler} disabled={disabled}>{title}</ButtonStyled>
        </div>
    );
};

const ButtonStyled = styled.button`
    cursor: pointer;
    background-color: blue;
    color: aliceblue;
    border-radius: 5px;

    &:hover{
        background-color: purple;
    }
`

