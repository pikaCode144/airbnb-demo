import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex } = props

  const [distance, setDistance] = useState()
  const contentRef = useRef()

  useEffect(() => {
    // 1.获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    // 2.content高度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth
    // 3.获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    // 4.特殊情况的处理
    if (distance < 0) distance = 0 // 左边的特殊情况
    const totalDistance = contentScroll - contentWidth // 右边的特殊情况
    if (distance > totalDistance) distance = totalDistance

    // 5.改变位置
    setDistance(distance)
  }, [selectIndex])
  
  return (
    <IndicatorWrapper translateLeft={distance}>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator