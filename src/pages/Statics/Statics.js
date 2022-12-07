import React from 'react'
import Rainbow from '../../components/Charts/Rainbow'
import Gradient from '../../components/Charts/Gradient'
function Statics() {
  return (
    <div>
        <h2 className='heading'>Gradient chart</h2>
        <div style={{"margin-top" : "3rem"}}>
            <Gradient/>
        </div>
        <h2 className='heading'>Rainbow Statistics</h2>
        <div style={{"margin-top" : "3rem"}}>
            <Rainbow/>
        </div>
    </div>
  )
}

export default Statics