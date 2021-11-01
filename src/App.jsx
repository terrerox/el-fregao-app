import { useState } from 'react'
import Header from './components/Header'
import Shifts from './components/Shifts'

function App() {
  
  const [shifts, setShifts] = useState([]);

  const createShift = shift => {
    setShifts([ ...shifts, shift ]);
  }

  return (
    <div className="App">
      <Header
        createShift={createShift}
      />
      <Shifts
        shifts={shifts}
      />
    </div>
  )
}

export default App
