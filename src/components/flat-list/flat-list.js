import React, { useEffect, useState } from 'react'

import Flat from '../flat'

import './flat-list.scss'
import { withApi } from '../../hoc'

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

  return (
    <div className="flat-list">
      {flatList.map(flat => (
        <Flat key={flat.id} {...flat} />
      ))}
      {flatList.map(flat => (
        <Flat key={flat.id} {...flat} />
      ))}
      {flatList.map(flat => (
        <Flat key={flat.id} {...flat} />
      ))}
    </div>
  )
}

export default withApi(FlatList)
