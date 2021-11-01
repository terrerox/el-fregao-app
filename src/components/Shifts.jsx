import React from 'react'
import styled from 'styled-components';
import Shift from './Shift'

const MainSection = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px dotted #adadad;
`;

const ShiftsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Shifts = ({ shifts }) => {
    return (
        <MainSection>
            <ShiftsList>
            {shifts.map(shift => (
                <Shift
                  key={shift.id}
                  shift={shift}
                />
              ))}
            </ShiftsList>
        </MainSection>
    )
}

export default Shifts
