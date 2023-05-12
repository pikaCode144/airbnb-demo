import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Rate } from 'antd'

import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData, itemCount } = props
  
  return (
    <ItemWrapper
      verifyColor={itemData.verify_info?.text_color || '#39576a'}
      starRantingColor={itemData.star_rating_color || '#00848a'}
      bottomInfo={{
        contentColor: itemData.bottom_info?.content_color || '#767676',
        fontSize: itemData.bottom_info?.font_size || '10'
      }}
      itemWidth={100 / (itemCount || 4) + '%'}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt='' />
        </div>
        <div className="desc">{itemData.verify_info?.messages[0] + '·' + itemData.verify_info?.messages[1]}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{`￥${itemData.price}/晚`}</div>
        <div className="bottom">
          <Rate className='rate' allowHalf disabled defaultValue={itemData.star_rating ?? 4.5} />
          <div className="reviews_count">{itemData.reviews_count}</div>
          { itemData.bottom_info?.content && (
            <div className="content_info">
              {'·' + itemData.bottom_info.content}
            </div>
          ) }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemCount: PropTypes.number
}

export default RoomItem