import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { CLOSE_MESSAGE  } from '../App';
import Button from './Button';
import Modal from './Modal';

const ResultCircle = styled.div`
   width: 230px;
   height: 230px;
   position: relative;
   background-color: #447d53;
   border-radius: 50%;
   color: #fff;
   font-size: 4rem;
   font-weight: 500;
   margin: 2rem 0;

   div.count {
    position: absolute;
    top: 20%;
    left: 15%;
   }
   div.total {
    position: absolute;
    bottom: 20%;
    right: 15%;
   }
`

const ResultCont = styled.div`
    span{
        display: block;
        font-size: 1.3rem;
        margin-bottom: 1.2rem;
    }

    em {
        display: block;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
`

const Bar = styled.div`
    width: 2px;
    height: 100px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
`
const ButtonGroup = styled.div`
    width: 100%;
`


const ResultMessage = ({ count, dday, visible }) => {
    const [resultMessage, setResultMessage] = useState('Good Job! 👌');
    //const [localVisible, setLocalVisible] = useState(visible);

    useEffect(() => {
        if(dday === 0){
            if(count === 0){
                setResultMessage('도전 실패! 😭');
            } else if(count >= 1 && count < 10){
                setResultMessage('분발하세요! 💪');
            } else if(count >= 10 && count < 20){
                setResultMessage('좀 더 열심히! 👌');
            } else if(count >= 20 && count < 30){
                setResultMessage('잘 했어요! 👍');
            } else if(count === 30){
                setResultMessage('🎉도전 성공!!! 👏');
            }
        }
    }, [count, dday]);

    if(!visible && dday !== 0) return null;
    return (
        <>
            <Modal
                title="CHALLENGE RESULT" 
                size="medium">
                <ResultCircle>
                    <div className="count">{count < 10 ? `0${count}` : count}</div>
                    <Bar />
                    <div className="total">30</div>
                </ResultCircle>
                <ResultCont>
                    <span>SUCCESS RATE : {count / 30 * 100}%</span>
                    <em>{resultMessage}</em>
                </ResultCont>
                <ButtonGroup>
                    <Button title="RESET" size="medium"/>
                    <Button title="CANCEL" size="medium"/>
                </ButtonGroup>
            </Modal>
        </>
    )
}

export default ResultMessage;