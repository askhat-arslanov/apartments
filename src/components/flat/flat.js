import React from 'react'
import { connect } from 'react-redux'

// Здесь прописываются алиасы в webpack вместо такого пути
import * as actions from '../../store/actions/flat-actions'
import ErrorBoundary from '../error-boundary'

import './flat.scss'
import LikeEmptyIcon from './img/like-empty.svg'
import LikeFullIcon from './img/like-full.svg'
import UserIcon from './img/user.svg'

const Flat = ({
  id,
  title,
  rooms,
  address,
  area,
  unit,
  landlordName,
  selectedFlatIds,
  onToggleSelectedFlatId
}) => {
  return (
    <ErrorBoundary>
      <div className="flat">
        <div className="flat-details">
          <div onClick={() => onToggleSelectedFlatId(id)} className="flat-like">
            <img
              className={`flat-like__icon${selectedFlatIds.includes(id) ? ' show' : ''}`}
              src={LikeFullIcon}
              alt="Like"
            />

            <img
              className={`flat-like__icon${!selectedFlatIds.includes(id) ? ' show' : ''}`}
              src={LikeEmptyIcon}
              alt="Like"
            />
          </div>

          <span className="flat-details__title">{title}</span>

          <span className="flat-details__details">
            {rooms} комнат(ы), {area} {unit}
          </span>

          <span className="flat-details__address">
            {address.city} {address.street}, {address.house}
          </span>

          <div className="landlord">
            <img className="landlord__icon" src={UserIcon} alt="Landlord" />
            <span>{landlordName}</span>
          </div>
        </div>

        <div>
          <img className="flat-photo" src={`/assets/photos/${id}.jpg`} alt="Flat photo" />
        </div>
      </div>
    </ErrorBoundary>
  )
}

const enhance = connect(({ flat }) => ({ selectedFlatIds: flat.selectedFlatIds }), {
  onToggleSelectedFlatId: actions.toggleSelectedFlatId
})

export default enhance(Flat)
