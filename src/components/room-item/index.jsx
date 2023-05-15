import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rate, Carousel } from 'antd'

import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const { itemData, itemCount, itemClick } = props
  const [ selectIndex, setSelectIndex ] = useState(0)

  const sliderRef = useRef()

  // 事件处理的逻辑
  const controlClickHandle = (isRight) => {
    // 1.上一个面板/下一个面板
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
    const length = itemData.picture_urls.length - 1
    const addOne = selectIndex + 1 > length ? 0 : selectIndex + 1
    const subOne = selectIndex - 1 < 0 ? length : selectIndex - 1
    const index = isRight ? addOne : subOne
    setSelectIndex(index)
  }

  const itemClickHandle = () => {
    if (itemClick) itemClick(itemData)
  }

  // 只有图片
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt='' />
    </div>
  )

  // 轮播图
  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={() => controlClickHandle(false)}>
          <IconArrowLeft width={28} height={28} />
        </div>
        <div className="btn right" onClick={() => controlClickHandle(true)}>
          <IconArrowRight width={28} height={28} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {
            itemData.picture_urls?.map((item, index) => {
              return (
                <span className='dot-item' key={item}>
                  <span className={classNames('dot', { active: selectIndex === index })}></span>
                </span>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData.picture_urls?.map(item => {
            // console.log(item)
            return (
              <div className="cover" key={item}>
                <img src={item} alt='' />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
  
  return (
    <ItemWrapper
      verifyColor={itemData.verify_info?.text_color || '#39576a'}
      starRantingColor={itemData.star_rating_color || '#00848a'}
      bottomInfo={{
        contentColor: itemData.bottom_info?.content_color || '#767676',
        fontSize: itemData.bottom_info?.font_size || '10'
      }}
      itemWidth={100 / (itemCount || 4) + '%'}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {/* 判断展示图片还是轮播图 */}
        { !itemData.picture_urls ? pictureElement : sliderElement }
        
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