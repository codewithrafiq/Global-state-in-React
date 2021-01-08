import React from 'react'
import { GetState } from '../state/StateProvider'

const About = () => {
    const [{ num1 }, { }] = GetState()
    return (
        <div>
            <h1>{num1}</h1>
            {/* <h1>About-N1={state.num1}-N2={state.num2} </h1>
            <button onClick={() => dispatch('addNum1')} >Num1</button>
            <button onClick={() => dispatch('addNum2')} >Num2</button> */}
        </div>
    )
}

export default About
