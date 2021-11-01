import React, { useState } from 'react'
import styled from 'styled-components'

const NameInput = styled.input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -ms-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.02);
  z-index: 2;
  box-shadow: none;
`

const Form = ({ createShift }) => {

    const todaysDate = new Date().toLocaleString().replace(',','');

    const [shift, setShift] = useState({
        name: '',
    })

    const { name } = shift

    const updateState = e => {
        setShift({
            ...shift,
            [e.target.name]: e.target.value 
        })
    }

    const saveShift = (e) => {
      e.preventDefault()

      if (name.trim() === '') return

      shift.id = Date.now(),
      shift.date = todaysDate,

      createShift(shift)
      setShift({
        name: ''
      })
    }

    return (
        <form onSubmit={saveShift}>
            <NameInput
                name="name"
                onChange={updateState}
                value={name}
                placeholder="Write your name for save your shift" 
                autoFocus
            />
        </form>
    )
}

export default Form
