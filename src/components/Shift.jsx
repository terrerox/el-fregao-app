import React from 'react'
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  font-size: 24px;
  border-bottom: 1px dotted #ccc;

  &:last-child {
    border-bottom: none;
  }
`

const Label = styled.label`
  word-break: break-word;
  padding: 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  -webkit-transition: color 0.4s;
  -moz-transition: color 0.4s;
  -ms-transition: color 0.4s;
  -o-transition: color 0.4s;
  transition: color 0.4s;
`
const DateLabel = styled.label`
  word-break: break-word;
  padding: 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  font-size: 60%;
  -webkit-transition: color 0.4s;
  -moz-transition: color 0.4s;
  -ms-transition: color 0.4s;
  -o-transition: color 0.4s;
  transition: color 0.4s;
`

const Shift = ({ shift }) => {
    return (
        <Item>
            <Label>{ shift.name }</Label>
            <DateLabel>{ shift.date }</DateLabel>
        </Item>
    )
}

export default Shift
