import React, { memo, useCallback, useEffect, useState } from 'react'

import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  const [ showPanel, setShowPanel ] = useState(false)

  // 副作用代码
  useEffect(() => {
    const windowHandleClick = () => {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandleClick)
    return () => {
      window.removeEventListener('click', windowHandleClick)
    }
  }, [])

  // 事件处理函数
  const profileClickHandle = useCallback((e) => {
    // 阻止冒泡的进一步传递, 继续传递会被window的监听事件又设置为false
    e.stopPropagation()
    setShowPanel(true)
  }, [])

  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'><IconGlobal /></span>
      </div>

      <div className="profile" onClick={e => profileClickHandle(e)}>
        <IconMenu />
        <IconAvatar />

        {
          showPanel && (
            <div className="panel">
              <div className="top">
                <div className="item register">注册</div>
                <div className="item login">登录</div>
              </div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight