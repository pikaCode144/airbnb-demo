import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'
import IconTriangleArrowBottom from '@/assets/svg/icon_triangle_arrow_bottom'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'
import IconTriangleArrowTop from '@/assets/svg/icon_triangle_arrow_top'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeBtn } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ isDirection, setIsDirection ] = useState(true)
  const [ showList, setShowList ] = useState(true)
  
  // 当图片浏览器展示出来时, 滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'auto'
  }, [])

  // 关闭按钮
  const closeBtnClickHandle = () => {
    if (closeBtn) closeBtn()
  }

  // 上一个下一个按钮
  const controlClickHandle = (isRight) => {
    isRight ? setIsDirection(true) : setIsDirection(false)
    const length = pictureUrls.length - 1
    const isNext = currentIndex + 1 > length ? 0 : currentIndex + 1
    const isPrev = currentIndex - 1 < 0 ? length : currentIndex - 1
    const newIndex = isRight ? isNext : isPrev
    setCurrentIndex(newIndex)
  }

  const bottomItemClickHandle = (index) => {
    // 点击item时, 改变图片的来向
    currentIndex > index ? setIsDirection(false) : setIsDirection(true)
    // 修改当前的索引
    setCurrentIndex(index)
  }
  
  return (
    <BrowserWrapper isNext={isDirection} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className='btn left' onClick={() => controlClickHandle(false)}>
            <IconArrowLeft width='77' height='77' />
          </div>
          <div className="btn right" onClick={() => controlClickHandle(true)}>
            <IconArrowRight width='77' height='77' />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames='fade'
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{ currentIndex + 1 }/{ pictureUrls.length }:</span>
              <span>room apartment图片{ currentIndex + 1 }</span>
            </div>
            <div className='toggle' onClick={() => setShowList(!showList)}>
              <span>{ showList ? '隐藏' : '显示' }照片列表</span>
              { showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop /> }
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div
                      className={classNames('item', { active: currentIndex === index })}
                      key={item}
                      onClick={() => bottomItemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeBtn: PropTypes.func
}

export default PictureBrowser