import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList } = props
  
  return (
    <RoomsWrapper>
      {
        roomList.list.slice(0, 8).map(item => {
          return <RoomItem key={item.id} itemData={item} />
        })
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.object
}

export default SectionRooms