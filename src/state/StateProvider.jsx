import React, { createContext, useContext, useReducer } from 'react'

export const ContextData = createContext()

const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <ContextData.Provider value={useReducer(reducer, initialState)} >
            {children}
        </ContextData.Provider>
    )
}

export const GetState = () => useContext(ContextData)

export default StateProvider
