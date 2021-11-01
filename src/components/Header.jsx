import React from 'react'
import styled from 'styled-components';
import Form from './Form';

const HeaderContainer = styled.header`
  padding-top: 15px;
  border-radius: inherit;
  &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 15px;
        z-index: 2;
        border-bottom: 1px solid #6c615c;
        background: #8d7d77;
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(132, 110, 100, 0.8)),to(rgba(101, 84, 76, 0.8)));
        background: -webkit-linear-gradient(top, rgba(132, 110, 100, 0.8), rgba(101, 84, 76, 0.8));
        background: -moz-linear-gradient(top, rgba(132, 110, 100, 0.8), rgba(101, 84, 76, 0.8));
        background: -o-linear-gradient(top, rgba(132, 110, 100, 0.8), rgba(101, 84, 76, 0.8));
        background: -ms-linear-gradient(top, rgba(132, 110, 100, 0.8), rgba(101, 84, 76, 0.8));
        background: linear-gradient(top, rgba(132, 110, 100, 0.8), rgba(101, 84, 76, 0.8));
        filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#9d8b83', EndColorStr='#847670');
        border-top-left-radius: 1px;
        border-top-right-radius: 1px;
    }
`;

const Title = styled.h1`
  position: absolute;
  top: -120px;
  width: 100%;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  color: #b3b3b3;
  color: rgba(255, 255, 255, 0.3);
  text-shadow: -1px -1px rgba(0, 0, 0, 0.2);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  -ms-text-rendering: optimizeLegibility;
  -o-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
`

const Header = ({ createShift }) => {
    return (
        <HeaderContainer>
	        <Title>El Fregao´ App</Title>
            <Form
              createShift={createShift}
            />
        </HeaderContainer>
    )
}

export default Header
