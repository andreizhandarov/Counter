import { count } from 'console';
import React, { useState } from 'react';
import styled from 'styled-components';

type CounterType ={
    count: number,
    randomCount: number
}

export const Desk = ({count, randomCount} : CounterType) => {
   
    return (
        <DeskStyled>
            <p>Max Value: {randomCount}</p>
            <p style={{color: count === randomCount ? 'red' : 'white'}}>{count}</p>
        </DeskStyled>
    );
};

const DeskStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`










