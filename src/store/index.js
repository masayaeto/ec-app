import React, { createContext } from 'react'

const initialState = {
  popular: []
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null
})