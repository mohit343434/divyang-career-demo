import { Toaster } from '@/components/ui/toaster'
import React, { createContext } from 'react'

const AppContext = () => {

  const DataContext = createContext()


  return (
    <DataContext.Provider value={{
      Toaster,
    }}>

    </DataContext.Provider>
  )
}

export default AppContext