"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStor, store} from './store'

const Providers = ({ children }) => {
  return (<Provider store={store}>
    <PersistGate loading={null} persistor={persistStor}>
    {children}
    </PersistGate>
    </Provider>
    )
}

export default Providers