import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'

const index = memo((props) => {
  // 定义内部状态
  // 左侧按钮的显示与隐藏
  const [ showLeftBtn, setShowLeftBtn ] = useState(false)
  // 右侧按钮的显示与隐藏
  const [ showRightBtn, setShowRightBtn ] = useState(false)
  // 可滚动区域
  const totalDistance = useRef(0)
  // 记录滚动的索引
  const posIndex = useRef(0)
  // 记录位移的距离
  const [ translateX, setTranslateX ] = useState(0)

  const scrollContentRef = useRef()
  useEffect(() => {
    // 一共可滚动的宽度
    const scrollWidth = scrollContentRef.current.scrollWidth
    // 本身占据的宽度
    const clientWidth = scrollContentRef.current.clientWidth
    totalDistance.current = scrollWidth - clientWidth
    setShowRightBtn(totalDistance.current > 0)
  }, [props.children])

  const controlClickHandle = (isRight) => {
    posIndex.current = isRight ? posIndex.current + 1 : posIndex.current - 1
    const newEl = scrollContentRef.current.children[posIndex.current]
    // 修改位移的大小
    setTranslateX(newEl.offsetLeft)
    // 总共可滚动的区域大于已滚动的区域为true显示右侧按钮，反之为false不显示右侧按钮
    setShowRightBtn(totalDistance.current > newEl.offsetLeft)
    // 可滚动的索引大于0，显示左侧按钮，反之不显示左侧按钮
    setShowLeftBtn(posIndex.current > 0)
  }

  const leftBtn = (
    <div className='button-left' onClick={() => controlClickHandle(false)}>
      <IconArrowLeft />
    </div>
  )

  const rightBtn = (
    <div className='button-right' onClick={() => controlClickHandle(true)}>
      <IconArrowRight />
    </div>
  )
  
  return (
    <ViewWrapper translateX={translateX}>
      {/* 左边按钮 */}
      { showLeftBtn && leftBtn }
      {/* 右边按钮 */}
      { showRightBtn && rightBtn }
      {/* 中间内容 */}
      <div className="content">
        <div ref={scrollContentRef} className="scroll-content">
          { props.children }
        </div>
      </div>
    </ViewWrapper>
  )
})

export default index