import React, { createContext, useContext } from 'react'

export const ApiServiceContext = createContext(null)

const withApi = Wrapped => props => {
  const apiService = useContext(ApiServiceContext)

  return <Wrapped {...props} apiService={apiService} />
}

export default withApi
