import React, { useContext, useCallback } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { Close } from '@styled-icons/material/Close';
import { ChallengeContext, TOGGLE_MODAL } from '../App';

const sizeStyles = css`
  ${props =>
    props.size === 'small' &&
    css`
      width: 450px;
      padding: 2rem;
  `}
`;
const DarkBackground = styled.div`
  position: fixed;
  left: 0; top: 0;
  width: 100%; 
  height: 100%; 
  background: ${props => props.background || 'rgba(22, 50, 25, 0.8);'}
  z-index: 10;
`;
const ModalBlock = styled.div`
  width: 470px;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.02);
  padding: 3rem;
  z-index: 20;
  h2 {
    width: 100%;
    color: #447d53;
    font-size: 32px;
    font-weight: 500;
    border-bottom: 2px solid #447d53;
    padding-bottom: 1.2rem;
  }

  ${sizeStyles}
`;
const CloseButton = styled(Close)`
  display: 'block';
  position: absolute;
  top: 1rem; right: 1rem;
  width: 50px;
  fill: #fff;
  cursor: pointer;
  z-index: 30;
`;

const Modal = ({ children, title, size, background }) => {
  const { dispatch } = useContext(ChallengeContext);

  const onClickClose = useCallback(() => {
    dispatch({ type: TOGGLE_MODAL });
  }, []);

  return (
    <>
      <DarkBackground  background={background} onClick={onClickClose}/>
        <CloseButton onClick={onClickClose} />
        <ModalBlock size={size}>
          <h2>{title}</h2>
          {children}
        </ModalBlock>
    </>
  );
}

export default Modal;