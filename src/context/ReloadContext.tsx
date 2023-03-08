import React, { ReactNode, useState, useContext, useEffect } from 'react'
import { IText } from '../types/text'

export interface IChildren {
  children: ReactNode
}

// creación del contexto
const reloadContext = React.createContext({
  reload: false,
  changeReload: () => {},
})

// customHook para encapsular el uso del textsContext
export const useReloadContext = () => useContext(reloadContext)

// componente que provee el contexto
export function ReloadContext({ children }: IChildren) {
  const [reload, setReload] = useState(false)

  const changeReload = () => setReload((prev) => !prev)

  useEffect(() => {
    console.log('reload', reload)
  }, [reload])

  return (
    <reloadContext.Provider value={{ reload, changeReload }}>
      {children}
    </reloadContext.Provider>
  )
}
