import React, { useState } from 'react';
import { Desk } from './Desk';
import { Button } from './Button';
import styled from 'styled-components';


export const Counter = () => {
    const [count, setCount] = useState(0);
    const [randomCount, setRandomCount] = useState(Math.floor(Math.random() * (10 - 1) + 1));

    const ButtonPlus = () => {
        if(count !== randomCount){
            setCount(count + 1);
        }
      };

      const ButtonReset = () => {
        setCount(0);
        setRandomCount(Math.floor(Math.random() * (10 - 1) + 1));
      };

    return (
        <Box>
        <BoxStyled >
            <BlockCount>
                <Desk count={count} randomCount={randomCount}/>
            </BlockCount>
            <BlockButton>
                <Button title={'inc'} onClick={ButtonPlus} disabled={count === randomCount}/>
                <Button title={'reset'} onClick={ButtonReset} disabled={count === 0}/>
            </BlockButton>
        </BoxStyled>
        </Box>
    );
};

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
`;

const BoxStyled = styled.div`
    width: 150px;
    height: 200px;
    border: 1px solid blue;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const BlockCount = styled.div`
    width: 120px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: blue;
    border-radius: 5px;
`;

const BlockButton = styled.div`
    width: 120px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid blue;
    border-radius: 5px;
    margin-top: 10px;
`;




