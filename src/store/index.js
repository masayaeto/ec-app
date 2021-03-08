import React, { createContext, useReducer } from 'react'

const initialState = {
  ranking: []
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null
})

const reducer = (state, action) => {
  console.log("AAAAAA", action.value)
  switch(action.type){
    case "SET_RANKING":
      return {...state, ranking: action.value}
  }
}

export const StoreProvider = ({children}) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return (
    <div>
      <Store.Provider value={{globalState, setGlobalState}}>{children}</Store.Provider>
    </div>
  )
}