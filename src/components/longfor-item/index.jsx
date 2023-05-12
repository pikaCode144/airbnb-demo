import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LongforItem = memo((props) => {
  const { itemInfo } = props
  
  return (
    <ItemWrapper>
      <div className="inner">
        <img className='cover' src={itemInfo.picture_url} alt="" />
        <div className="bg-cover"></div>
        <div className="info">
          <div className="city">{itemInfo.city}</div>
          <div className="price">均价 {itemInfo.price}</div>
        </div>
      </div>
    </ItemWrapper>
  )
})

LongforItem.propTypes = {
  itemInfo: PropTypes.object
}

export default LongforItem