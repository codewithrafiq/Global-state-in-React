import React from 'react'
import { GetState } from '../state/StateProvider'

const Home = () => {
    const [state, dispatch] = GetState()
    return (
        <div>
            <h1>Home-N1={state.num1}-N2={state.num2} </h1>
            <button onClick={() => dispatch('addNum1')} >Num1</button>
            <button onClick={() => dispatch('addNum2')} >Num2</button>
        </div>
    )
}

export default Home
