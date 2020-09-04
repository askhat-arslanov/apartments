import React, { useEffect, useState } from 'react'

import ErrorBoundary from '../error-boundary'
import { withApi } from '../../hoc'
import './flat-list.scss'

import Flat from '../flat'
import Spinner from '../spinner'

const FlatList = ({ apiService }) => {
  const [flatList, setFlatList] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    setIsFetching(true)

    apiService
      .getFlatList()
      .then(list => {
        setFlatList(list)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  const getFlatListTemplate = () => {
    return flatList.map(flat => <Flat key={flat.id} {...flat} />)
  }

  return (
    <ErrorBoundary>
      <div className="flat-list">
        {isFetching ? (
          <div className="flat-list__spinner-wrapper">
            <Spinner />
          </div>
        ) : (
          getFlatListTemplate()
        )}
      </div>
    </ErrorBoundary>
  )
}

export default withApi(FlatList)
